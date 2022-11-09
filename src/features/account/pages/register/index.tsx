/**@jsxImportSource @emotion/react */
import RegisterForm, { FormValues } from 'features/account/components/forms/register-form';
import SocialForm from 'features/account/components/forms/social-form/social-form';
import { registerPageStyle } from './registerPageStyle';

const RegisterPage = () => {
  const register = (data: FormValues) => {
    //
  };
  return (
    <div css={[registerPageStyle.container]}>
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
  );
};

export default RegisterPage;
