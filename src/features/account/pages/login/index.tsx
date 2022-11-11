/**@jsxImportSource @emotion/react */
import LoginForm, { FormValues } from 'features/account/components/forms/LoginForm/LoginForm';
import SocialForm from 'features/account/components/forms/SocialForm/SocialForm';
import { Link } from 'react-router-dom';
import { registerPageStyle } from '../register/register-page-style';

const LoginPage = () => {
  /* istanbul ignore next */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const login = (data: FormValues) => {
    //
  };

  return (
    <div css={[registerPageStyle.container]}>
      <div>
        <h2>Log in to WECOPYTRADE</h2>
        <h5>Welcome to Wecopytrade. Please log in.</h5>
        <div css={registerPageStyle.content}>
          <div css={registerPageStyle.subContent}>
            <LoginForm onSubmit={login} />
          </div>
          <div css={registerPageStyle.subContent}>
            <SocialForm />
          </div>
        </div>
      </div>
      <div css={registerPageStyle.footerForm}>
        <h6>
          © 2021 - 2022 <span> WecopyTrade.</span>
        </h6>
        <h6>
          Not a member? Click <Link to="/register">here</Link> to sign up!
        </h6>
        <h6>
          <span>All rights reserved</span>
        </h6>
      </div>
    </div>
  );
};

export default LoginPage;
