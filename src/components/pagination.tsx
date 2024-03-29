import * as React from 'react';
import { Pagination } from 'antd';
import { ComponentsProps, Users } from 'common/types';

interface WithPaginationProps extends ComponentsProps {
  page: number;
  onPageChange(page: number): void;
}

export const withPagination = (WrappedComponent: React.FC<ComponentsProps>) => {
  const addPagination: React.FC<WithPaginationProps> = ({ data, page, onPageChange }) => {
    const [currentPage, setCurrentPage] = React.useState<number>(page);

    const pageSize = data.length;

    const handleChangePage = (page: number) => {
      onPageChange(page);
      setCurrentPage(page);
    };

    return (
      <>
        <WrappedComponent data={data} />
        <Pagination
          showQuickJumper
          current={currentPage}
          pageSize={pageSize}
          showSizeChanger={false}
          total={Users.MaxCount}
          onChange={handleChangePage}
        />
      </>
    );
  };

  return addPagination;
};