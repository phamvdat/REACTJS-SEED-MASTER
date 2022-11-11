/** @jsxImportSource @emotion/react */
import banner from 'assets/images/imgs/banner.png';
import Header from 'core/components/Header/Header';
import Sidebar from 'core/components/SideBar';
import { Outlet } from 'react-router-dom';
import { defaultLayoutStyle } from '../DefaultLayout/DefaultLayoutStyle';

export default function AuthenLayout() {
  return (
    <div className="container" css={defaultLayoutStyle.container}>
      <Header />
      <img src={banner} alt="banner" css={[defaultLayoutStyle.banner]} />
      <div className="outletComponent" css={[defaultLayoutStyle.wrapperContent]}>
        <Sidebar />
        <div css={defaultLayoutStyle.Outlet}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
