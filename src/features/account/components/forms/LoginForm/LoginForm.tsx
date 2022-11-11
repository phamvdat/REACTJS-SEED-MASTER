/** @jsxImportSource @emotion/react */
import { yupResolver } from '@hookform/resolvers/yup';
import LongButton from 'core/components/BaseUI/Button/long-button/long-button';
import Icon from 'core/components/BaseUI/Icon';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { formStyle } from '../RegisterForm/RegisterFormStyles';

export type FormValues = {
  email: string;
  password: string;
};
const validationSchema = yup.object().shape({
  email: yup.string().email().required('Please fill out this field !'),
  password: yup.string().min(8).max(32).required(),
});
const LoginForm = ({ onSubmit }: { onSubmit: (data: FormValues) => void }) => {
  const [showPw, setShowPw] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors, isDirty, isValid },
  } = useForm<FormValues>({
    mode: 'all',
    resolver: yupResolver(validationSchema),
  });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} css={[formStyle.self]}>
        <div css={formStyle.fieldContainer}>
          <label htmlFor="email" css={[formStyle.labelInput]}>
            Email: <span>(*)</span>:
          </label>
          <br />
          <div
            css={[
              formStyle.containInput,
              errors.email && formStyle.containInputError,
              getValues().email && !errors.email && formStyle.containInputSuccess,
            ]}
          >
            <span>
              <Icon icon="mail-solid" size={20} />
            </span>
            <input type="text" id="email" placeholder="Email" {...register('email')} />
            {getValues().email &&
              (!errors.email ? <Icon icon="success" size={20} /> : <Icon icon="error" size={20} />)}
          </div>
          {errors.email && <h6>{errors.email?.message}</h6>}
        </div>

        <div css={formStyle.fieldContainer}>
          <label htmlFor="password" css={[formStyle.labelInput]}>
            Password <span>(*)</span>:
          </label>
          <br />
          <div
            css={[
              formStyle.containInput,
              errors.password && formStyle.containInputError,
              getValues().password && !errors.password && formStyle.containInputSuccess,
            ]}
          >
            <span>
              <Icon icon="password-solid" size={20} />
            </span>
            <input
              type={showPw ? 'text' : 'password'}
              id="password"
              placeholder="Password"
              {...register('password')}
            />
            <Icon
              size={20}
              icon={showPw ? 'eye-solid' : 'eye-slash-solid'}
              onClick={() => setShowPw(!showPw)}
            />
            {errors.password && <Icon icon="error" size={20} />}
          </div>

          {errors.password && <h6>{errors.password?.message}</h6>}
        </div>
        <div css={formStyle.forgotPw}>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
        <LongButton
          label="Login"
          type="submit"
          icon="register-solid"
          disabled={!isDirty || !isValid}
        ></LongButton>
      </form>
    </>
  );
};

export default LoginForm;
