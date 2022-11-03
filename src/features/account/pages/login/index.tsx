import LoginForm, { FormValues } from 'features/account/components/forms/login-form';

const LoginPage = () => {
  /* istanbul ignore next */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const login = (data: FormValues) => {
    //
  };

  return (
    <>
      <h1>Login Page</h1>
      <LoginForm onSubmit={login} />
    </>
  );
};

export default LoginPage;
