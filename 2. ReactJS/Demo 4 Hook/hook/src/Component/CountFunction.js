import React, { useEffect, useState } from "react";

function CountFunction() {
  // khai báo state
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10000);

  // hàm xử lý khi click
  const handleClick = () => {
    setCount(count + 1);
  };

  const handleTRU = () => {
    setCount2(count2 - 1);
  };

  // hàm useEffect
  useEffect(() => {
    console.log("Bạn vừa gọi đến đoạn code 1 trong useEffect");
  }, [count, count2]);

  // [count, count2] thì gọi cả code 1 và code 2
  // [count] thì gọi cả code 1

  useEffect(() => {
    console.log("Bạn vừa gọi đến đoạn code 2 trong useEffect");
  }, [count2]);

  // [] trống thì là componentDidMount được gọi 1 lần duy nhất
  // không có [(dependency)] thì được gọi mỗi lần state thay đổi
  // [count] khi thực hiện state count(count 2 cũng thế) thay đổi thi gọi lần useEffect

  useEffect(() => {
    //
    return () => {
      console.log("Đây là code tương đường với componentWillUnmount");
    };
  }, []);

  // Tương đương với componenuWillUnmount

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleClick}
          >
            Click vào đây
          </button>
          <button type="button" className="btn btn-danger" onClick={handleTRU}>
            {" "}
            - đi
          </button>
        </div>

        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <p>Số lần button được click: {count}</p>
          <p>Số lần - button được click: {count2}</p>
        </div>
      </div>
    </div>
  );
}

export default CountFunction;
