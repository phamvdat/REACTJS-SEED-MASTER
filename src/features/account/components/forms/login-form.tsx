/** @jsxImportSource @emotion/react */
// import email from 'assets/images/icons/email.svg';
// import password from 'assets/images/icons/password.svg';
// import seperate from 'assets/images/icons/seperate.svg';
import Button from 'core/components/BaseUI/Button/Button';
import SecondaryButton from 'core/components/BaseUI/Button/ShortSolidButton/ShortSolidButton';
import Icon from 'core/components/BaseUI/Icon';
import { useForm } from 'react-hook-form';
import { formStyle } from './form-styles';

export type FormValues = {
  email: string;
  password: string;
};

const LoginForm = ({ onSubmit }: { onSubmit: (data: FormValues) => void }) => {
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
  } = useForm<FormValues>();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} css={[formStyle.self]}>
        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <div css={[formStyle.containInput]}>
            <Icon icon="mail-solid" />
            <input
              type="email"
              id="email"
              placeholder="Email"
              {...register('email', { required: true, maxLength: 80 })}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <br />
          <div css={[formStyle.containInput]}>
            <Icon icon="email" />
            <Icon icon="seperate" />
            <input
              type="password"
              id="password"
              placeholder="Password"
              {...register('password', { required: true, maxLength: 80 })}
            />
          </div>
        </div>
        <br />
        <SecondaryButton label="Login" />
      </form>
    </>
  );
};

export default LoginForm;
