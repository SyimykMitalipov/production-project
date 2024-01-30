import cls from './Button.module.scss';
import { classNames } from 'shared/lib/helpers/classNames';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

const Button: FC<ButtonProps> = (props) => {
  const { className, theme, children, ...buttonProps } = props;
  return (
    <button
      {...buttonProps}
      className={classNames(cls.button, { [ cls[ theme ] ]: true }, [ className ])}
    >
      {children}
    </button>
  );
};

export default Button;
