import { Result } from "antd";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link
          href={"/"}
          className="hover:text-white bg-primary px-2 py-2 rounded-xl text-white"
        >
          Back Home
        </Link>
      }
    />
  );
};

export default NotFound;
