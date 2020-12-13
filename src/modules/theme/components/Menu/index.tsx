import React from 'react';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { I18N } from '@/modules/lang/i18n.enum';
import { useMediaQuery } from 'react-responsive';
import { LogoDto } from '@/libs/dto/Logo.dto';
import logoSvg from '@/modules/theme/assets/images/Customer-Logo.png';
import { CommonStoreContext } from '@/libs/stores/common.store';
import { AuthenticationStoreContext } from '@/modules/authentication.store';
import { USER_ROUTERS } from '@/modules/router.enum';
import { MenuDto } from '../../theme.dto';
import { menuUser } from '../../theme.constants';

/*
 * Props of Component
 */
interface ComponentProps {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  logo?: LogoDto;
}

const Menu = (props: ComponentProps) => {
  const history = useHistory();
  const authenticationStore = React.useContext(AuthenticationStoreContext);
  const commonStore = React.useContext(CommonStoreContext);
  const routers: any = USER_ROUTERS;

  /*
   * Props of Component
   */
  const {
    style,
    className,
    children,
    logo = {
      className: '',
      url: logoSvg,
      alt: 'Logo',
    },
  } = props;

  /*
   * Translation
   */
  const { t } = useTranslation();
  const { ADMIN_MENU_LOG_OUT } = I18N;

  /*
   * Action of logout link
   * @params: void
   * @return: void
   */
  const handleLogout = () => {
    authenticationStore.logout(history, routers.LOGIN);
  };

  /*
   * Setting Menu Responsive
   */
  const [showMenu, setShowMenu] = React.useState<boolean>(false);

  const handleMediaQueryChange = (matches: boolean) => {
    if (matches === false) setShowMenu(matches);
  };

  const isMobile = useMediaQuery(
    {
      query: '(max-width: 991px)',
    },
    undefined,
    handleMediaQueryChange
  );

  const changeShowHideMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleToUrl = (url: string) => {
    history.push(url);
    commonStore.setActiveMenu(url);
  };

  return (
    <>
      <div className="menu-wrapper">
        {isMobile && (
          <div
            className={`menu-icon ${showMenu ? 'close' : ''}`}
            onClick={() => changeShowHideMenu()}
          >
            {!showMenu && <i className="ico ico-menu"></i>}
            {showMenu && <i className="ico ico-delete"></i>}
          </div>
        )}
        <div
          className={`flex-column main-menu ${className ? className : ''} ${
            isMobile ? 'menu-mobile' : 'menu-desktop'
          } ${showMenu ? 'show' : ''}`}
        >
          {logo && (
            <div
              onClick={() => {
                history.push(USER_ROUTERS.SETUP);
              }}
              className="logo-menu"
            >
              <img
                className={logo.className ? logo.className : ''}
                src={logoSvg}
                alt={logo.alt ? logo.alt : 'Logo'}
              />
            </div>
          )}
          <Nav className="menu-items" style={style}>
            {menuUser.map((item: MenuDto, index) => (
              <Nav.Link
                className={`item ${
                  commonStore.activeMenu === item.url ? 'active' : ''
                }`}
                eventKey={item.url}
                onClick={() => handleToUrl(item.url)}
                key={`menu-${index}`}
              >
                {item.icon && <i className={`ico ${item.icon}`}></i>}
                <span>{t(item.label)}</span>
              </Nav.Link>
            ))}
            <Nav.Link className="item" onClick={handleLogout}>
              <i className="ico ico-logout"></i>
              <span>{t(ADMIN_MENU_LOG_OUT)}</span>
            </Nav.Link>
          </Nav>
          {children}
          <div className="copyright"></div>
        </div>
      </div>
    </>
  );
};

export default observer(Menu);
