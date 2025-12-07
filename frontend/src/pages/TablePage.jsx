import React from 'react';
import SideNav from '../components/shared/SideNav';
import TableCard from './../components/tablePage/TableCard';
import BackButton from '../components/shared/BackButton';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getAllTables } from '../https';
import { enqueueSnackbar } from 'notistack';

const TablePage = () => {

  const { data: resData, isError } = useQuery({
    queryKey: ['tables'],
    queryFn: async () => {
      return await getAllTables();
    },
    placeholderData: keepPreviousData
  })
  if (isError) {
    enqueueSnackbar('Something went wrong!', { variant: 'error' });
  }

  return (
    <section className='flex'>
      {/* Side Nav */}
      <div className='w-60'>
        <SideNav />
      </div>

      <div className='flex flex-1 flex-col items-start justify-center'>
        <div className='flex items-center gap-4 pl-6 py-4'>
          <BackButton />
          <h1 className='text-2xl font-bold tracking-wide'>Tables List</h1>
        </div>
        <div className='flex items-center justify-center px-5 w-full pb-2'>
          <div className='grid grid-cols-3 gap-5 w-[90%] h-[calc(100vh-9rem)] px-1 overflow-auto'>
            {resData?.data.data.map((table) => {
              return (
                <TableCard tableId={table.tableId} tableNum={table.tableNum} status={table.status} />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TablePage;