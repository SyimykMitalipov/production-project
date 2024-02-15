import React, { FC } from "react";
import { classNames } from "shared/lib/helpers/classNames";
import cls from "./PageLoader.module.scss";
import { Spinner } from "shared/ui/Spinner";

interface PageLoaderProps {
  className?: string;
}

const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Spinner />
    </div>
  );
};

export default PageLoader;
