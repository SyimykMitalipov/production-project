import cls from "./SideBar.module.scss";
import { type FC, useState } from "react";
import { classNames } from "shared/lib/helpers/classNames";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher";
import { Button } from "shared/ui/Button";

interface SideBarProps {
  className?: string;
}

const SideBar: FC<SideBarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sideBar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button data-testid="sidebar-toggle" onClick={onToggle}>
        Toggle
      </Button>
      <div className={classNames(cls.switchers, {}, [])}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};

export default SideBar;
