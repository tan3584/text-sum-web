import React from 'react';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';
import { LogoDto } from '@/libs/dto/Logo.dto';
import logoSvg from '@/modules/theme/assets/images/logo.svg';
import SwitchLanguages from '@/modules/lang/components/SwitchLanguages';
import NotificationSummary from '@/modules/notification/components/Summary';
import AccountSummary from '@/modules/account/components/AccountSummary';
import { USER_ROUTERS } from '@/modules/router.enum';
/*
 * Props of Component
 */
interface ComponentProps {
  className?: string;
  logo?: LogoDto;
}

const TopMenu = (props: ComponentProps) => {
  const history = useHistory();

  /*
   * Props of Component
   */
  const {
    className,
    logo = {
      className: '',
      url: logoSvg,
      alt: 'Logo',
    },
  } = props;

  /*
   * Setting logo responsive
   */
  const isMobile = useMediaQuery({
    query: '(max-width: 991px)',
  });

  return (
    <>
      <div className={`top-menu ${className ? className : ''}`}>
        {isMobile && (
          <div
            onClick={() => {
              history.push(USER_ROUTERS.SETUP);
            }}
            className="logo-menu"
          >
            <img
              className={logo.className ? logo.className : ''}
              src={logo.url ? logo.url : ''}
              alt={logo.alt ? logo.alt : 'Logo'}
            />
          </div>
        )}
        <NotificationSummary />
        <AccountSummary />
        <SwitchLanguages />
      </div>
    </>
  );
};

export default observer(TopMenu);
