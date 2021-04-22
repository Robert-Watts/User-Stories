import * as React from "react";
import classNames from "classnames";

const Title = ({ className, ...props }) => {
  return (
    <h1 className={classNames("my-3", className)} {...props}>
      User Stories Creator
    </h1>
  );
};

export default Title;
