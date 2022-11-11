/**@jsxImportSource @emotion/react */
import RegisterForm, {
  FormValues,
} from 'features/account/components/forms/RegisterForm/RegisterForm';
import SocialForm from 'features/account/components/forms/SocialForm/SocialForm';
import { Link } from 'react-router-dom';
import { registerPageStyle } from './register-page-style';

const RegisterPage = () => {
  const register = (data: FormValues) => {
    //
  };
  return (
    <div css={[registerPageStyle.container]}>
      <div>
        <h2>Sign Up to WECOPYTRADE</h2>
        <h5>Sign up with your email address / phone number</h5>
        <div css={registerPageStyle.content}>
          <div css={registerPageStyle.subContent}>
            <RegisterForm onSubmit={register} />
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
          Already a member? Click <Link to="/login">here</Link> to login!
        </h6>
        <h6>
          <span>All rights reserved</span>
        </h6>
      </div>
    </div>
  );
};

export default RegisterPage;
