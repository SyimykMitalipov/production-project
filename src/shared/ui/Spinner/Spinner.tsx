import React, { FC } from "react";
import { classNames } from "shared/lib/helpers/classNames";
import "./Spinner.scss";

interface LoaderProps {
  className?: string;
}

const Spinner: FC<LoaderProps> = ({ className }) => {
  return (
    <div className={classNames("lds-roller", {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
