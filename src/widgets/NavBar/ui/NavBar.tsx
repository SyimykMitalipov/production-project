import cls from './NavBar.module.scss';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/helpers/classNames';
import { AppLink } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavBarProps {
  className?: string;
}

export default function NavBar({ className }: NavBarProps) {
  return (
    <div className={classNames(cls.navbar, {}, [ className ])}>
      <div className={cls.links}>
        <AppLink to={RoutePaths.main} className={cls.mainLink}>
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.RED} to={RoutePaths.about}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
}
