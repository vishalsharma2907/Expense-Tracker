import React, { useState } from "react";
import { useSelector } from "react-redux";
import Papa from "papaparse";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { toast } from "react-hot-toast";
const ExportTable = () => {
  const expenses = useSelector((state) => state.expenses.expenses);
  //!Export to PDF
  const [format, setFormat] = useState("pdf");

  const handleDownload = () => {
    if (format === "pdf") downloadPdf();
    else if (format === "csv") downloadCsv();
    else if (format === "excel") downloadExcel();
  };

  const downloadPdf = async () => {
    try {
      if (!expenses.length) {
        toast.error("No expenses to export.");
        return;
      }
      const doc = new jsPDF();

      //!Load logo and convert to Base64
      const getImageBase64 = async (url) => {
      const res = await fetch(url);
      const blob = await res.blob();
      return await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      });
    };

    const logoBase64 = await getImageBase64("/Logo.png");

    //!Add Logo + Title
    doc.addImage(logoBase64, "PNG", 14, 10, 30, 15); // (image, format, x, y, width, height)
    doc.setFontSize(16);
    doc.text("Expense Report", 50, 20);

    //!prepare data
      const rows = expenses.map((exp) => {
        const dateTime = new Date(exp.date);
        return [
          dateTime.toLocaleDateString(),
          dateTime.toLocaleTimeString(),
          `${exp.title}(${exp.type})`,
          exp.amount,
          exp.paymentMode,
        ];
      });

      //!add table
      autoTable(doc, {
        head: [["Date", "Time", "Description"+"(Type)", "Amount", "Payment Mode"]],
        body: rows,
        startY: 30,
      });

      //!save file
      doc.save("expenses.pdf");
      toast.success("PDF downloaded successfully!");
    } catch (error) {
      console.log("PDF download error",error);
      toast.console.error("Failed to download PDF");
    }
  };

  //! Export to Excel (.xlsx)
  const downloadExcel = () => {
    try {
      if (!expenses.length) {
        toast.error("No expenses to export.");
        return;
      }
      const worksheetData = expenses.map((exp) => {
        const dateTime = new Date(exp.date);
        return {
          Date: dateTime.toLocaleDateString(),
          Time: dateTime.toLocaleTimeString(),
          "Description(Type)": `${exp.title}(${exp.type})`,
          Amount: exp.amount,
          "Payment Mode": exp.paymentMode,
        };
      });

      const worksheet = XLSX.utils.json_to_sheet(worksheetData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Expenses");

      XLSX.writeFile(workbook, "expenses.xlsx");
      toast.success("Excel downloaded successfully!");
    } catch (error) {
      console.log("Excel download error",error);
      toast.console.error("Failed to download Excel");
    }
  };

  //! Export to CSV
  const downloadCsv = () => {
    try {
      if (!expenses.length) {
        toast.error("No expenses to export.");
        return;
      }

      const csvData = expenses.map((exp) => {
        const dateTime = new Date(exp.date);
        return {
          Date: dateTime.toLocaleDateString(),
          Time: dateTime.toLocaleTimeString(),
          "Description(Type)": `${exp.title}(${exp.type})`,
          Amount: exp.amount,
          "Payment Mode": exp.paymentMode,
        };
      });

      const csv = Papa.unparse(csvData);
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "expenses.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success("CSV downloaded successfully!");
    } catch (error) {
      console.log("CSV download error",error);
      toast.console.error("Failed to download CSV");
    }
  };
  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-4">
        <label className="mr-2 font-medium text-gray-700">Choose Format:</label>

        <select
          className="px-2 py-1 border rounded w-full sm:w-auto"
          value={format}
          onChange={(e) => setFormat(e.target.value)}
        >
          <option value="pdf">PDF</option>
          <option value="csv">CSV</option>
          <option value="excel">Excel</option>
        </select>
        <button
          onClick={handleDownload}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full sm:w-auto"
        >
          Download
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full mt-6 table-auto border text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-2 sm:px-4 py-2 text-start">Date</th>
              <th className="border px-2 sm:px-4 py-2 text-start">Time</th>
              <th className="border px-2 sm:px-4 py-2 text-start">Descrption(Type)</th>
              <th className="border px-2 sm:px-4 py-2 text-start">Amount</th>
              <th className="border px-2 sm:px-4 py-2 text-start">
                Payment Mode
              </th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((exp) => (
              <tr key={exp.id}>
                <td className="border px-2 sm:px-4 py-2 text-start">
                  {exp.date.slice(0, 11)}
                </td>
                <td className="border px-2 sm:px-4 py-2 text-start">
                  {exp.date.slice(12)}
                </td>
                <td className="border px-2 sm:px-4 py-2 text-start">
                  {exp.title}({exp.type})
                </td>
                <td className="border px-2 sm:px-4 py-2 text-start">
                  ₹{exp.amount}
                </td>
                <td className="border px-2 sm:px-4 py-2 text-start">
                  {exp.paymentMode}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExportTable;
