import cls from './LangSwitcher.module.scss';
import { FC } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button';

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();
  const toggleLangugage = () =>
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  return (
    <Button
      className={classNames(cls.langSwitcher, {}, [ className ])}
      onClick={toggleLangugage}
      theme={ThemeButton.CLEAR}
    >
      {t('language')}
    </Button>
  );
};

export default LangSwitcher;
