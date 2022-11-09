/** @jsxImportSource @emotion/react */
import ShortButton from 'core/components/BaseUI/Button/ShortButton/ShortButton';
import ShortSolidButton from 'core/components/BaseUI/Button/ShortSolidButton/ShortSolidButton';
import { Link, Outlet } from 'react-router-dom';
import banner from '../../../../assets/images/imgs/banner.png';
import logo from '../../../../assets/images/imgs/logo.png';
import Sidebar from './components/sidebar/Sidebar';
import { defaultLayoutStyle } from './DefaultLayoutStyle';

const DefaultLayout = () => {
  return (
    <>
      <div className="container" css={defaultLayoutStyle.container}>
        <header css={[defaultLayoutStyle.header]}>
          <div className="content" css={[defaultLayoutStyle.content]}>
            <div className="wrapper" css={[defaultLayoutStyle.wrapper]}>
              <div className="logo-wrapper" css={[defaultLayoutStyle.logowrapper]}>
                <img src={logo} alt="logo" css={[defaultLayoutStyle.logo]} />
                <h1 css={[defaultLayoutStyle.heading]}>WECOPYTRADE</h1>
              </div>
              <div className="btns">
                <Link to="/register">
                  <ShortButton label="Sign Up" color="black" css={[defaultLayoutStyle.signInBtn]} />
                </Link>
                <Link to="/login">
                  <ShortSolidButton label="Login" color="white" />
                </Link>
              </div>
            </div>
          </div>
        </header>
        <img src={banner} alt="banner" css={[defaultLayoutStyle.banner]} />
        <div className="outletComponent" css={[defaultLayoutStyle.outletComponent]}>
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
