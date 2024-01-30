import cls from './AppLink.module.scss';
import { FC, ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/helpers/classNames';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  RED = 'red',
}

interface AppLinksProps extends LinkProps {
  className?: string;
  children: ReactNode;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinksProps> = (props) => {
  const {
    to,
    children,
    className,
    theme = AppLinkTheme.SECONDARY,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, { theme }, [ className, cls[ theme ] ])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
