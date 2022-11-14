/** @jsxImportSource @emotion/react */
import logo from 'assets/images/imgs/logo.png';
import { Link } from 'react-router-dom';
import Button from '../BaseUI/Button';
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
              <Button label="Sign in" size="sm" variant="fill" css={[HeaderStyle.signInBtn]} />
            </Link>
            <Link to="/login">
              <Button label="Login" size="sm" variant="outlined" css={[HeaderStyle.loginBtn]} />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
