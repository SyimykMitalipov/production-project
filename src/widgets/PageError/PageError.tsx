import React, { FC } from "react";
import { classNames } from "shared/lib/helpers/classNames";
import cls from "./PageError.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button";

interface IPageErrorProps {
  className?: string;
}

const PageError: FC<IPageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const handleReloadPage = () => location.reload();
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <h1>{t("Something was wrong")}</h1>
      <Button onClick={handleReloadPage}>{t("Reload Page")}</Button>
    </div>
  );
};

export default PageError;
