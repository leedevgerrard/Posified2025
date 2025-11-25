import React from 'react';
import SideNav from '../components/shared/SideNav';
import TableCard from './../components/tablePage/TableCard';
import BackButton from '../components/shared/BackButton';

const TablePage = () => {
  return (
    <section className='flex'>
      {/* Side Nav */}
      <div className='w-60'>
        <SideNav />
      </div>

      <div className='flex flex-1 flex-col items-start justify-center'>
        <div className='flex items-center gap-4 pl-6 py-4'>
          <BackButton />
          <h1 className='text-3xl'>Tables List</h1>
        </div>
        <div className='flex items-center justify-center px-5 w-full pb-2'>
          <div className='grid grid-cols-3 gap-5 w-[90%] h-[calc(100vh-9rem)] px-1 overflow-auto'>
            <TableCard />
            <TableCard />
            <TableCard />
            <TableCard />
            <TableCard />
            <TableCard />
            <TableCard />
            <TableCard />
            <TableCard />
            <TableCard />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TablePage;