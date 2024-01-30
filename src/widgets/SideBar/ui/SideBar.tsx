import cls from './SideBar.module.scss';
import { type FC, useState } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';

interface SideBarProps {
  className?: string
}

const SideBar: FC<SideBarProps> = ({ className }) => {
  const [ collapsed, setCollapsed ] = useState(false);

  const onToggle = () => { setCollapsed((prev) => !prev); };
  return (
    <div
      className={classNames(cls.sideBar, { [ cls.collapsed ]: collapsed }, [
        className
      ])}
    >
      <button onClick={onToggle}>Toggle</button>
      <div className={classNames(cls.switchers, {}, [])}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};

export default SideBar;
