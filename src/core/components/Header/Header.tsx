/** @jsxImportSource @emotion/react */
import logo from 'assets/images/imgs/logo.png';
import { Link } from 'react-router-dom';
import ShortButton from '../BaseUI/Button/short-button/short-button';
import ShortSolidButton from '../BaseUI/Button/short-solid-button/short-solid-button';
import { HeaderStyle } from './HeaderStyle';
export default function Header() {
  return (
    <>
      <header css={[HeaderStyle.header]}>
        <div className="wrapper" css={[HeaderStyle.wrapper]}>
          <Link to="/home">
            <div className="logo-wrapper" css={[HeaderStyle.logowrapper]}>
              <img src={logo} alt="logo" css={[HeaderStyle.logo]} />
              <h1 css={[HeaderStyle.heading]}>WECOPYTRADE</h1>
            </div>
          </Link>
          <div className="btns">
            <Link to="/register">
              <ShortButton label="Sign Up" color="black" css={[HeaderStyle.signInBtn]} />
            </Link>
            <Link to="/login">
              <ShortSolidButton label="Login" color="white" />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
