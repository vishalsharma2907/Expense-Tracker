import React from 'react'
import ExportTable from '../components/ExportTable'

const ExportPage = () => {
  return (
    <div className='p-4'>
        <h2 className='text-xl font-semibold mb-4'>Export Expenses</h2>
        <ExportTable/>
    </div>
  )
}

export default ExportPage