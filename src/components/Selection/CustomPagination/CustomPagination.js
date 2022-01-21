import { memo } from "react";
import { Pagination } from "antd";
import "customPagination.css";

const CustomPagination = memo(({ data }) => {
  const { total, current, pageSize, onChange } = data;
  return (
    <div className="pagination__container">
      <Pagination
        current={current}
        total={total}
        hideOnSinglePage
        pageSize={pageSize}
        onChange={onChange}
        showLessItems
        showSizeChanger={false}
      />
    </div>
  );
});

export default CustomPagination;
