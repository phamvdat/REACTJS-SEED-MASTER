/** @jsxImportSource @emotion/react */
import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'core/components/BaseUI/Button';
import Icon from 'core/components/BaseUI/Icon';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { registerFormStyle } from '../RegisterForm/RegisterFormStyle';

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
      <form onSubmit={handleSubmit(onSubmit)} css={[registerFormStyle.self]}>
        <div css={registerFormStyle.fieldContainer}>
          <label htmlFor="email" css={[registerFormStyle.labelInput]}>
            Email: <span>(*)</span>:
          </label>
          <br />
          <div
            css={[
              registerFormStyle.containInput,
              errors.email && registerFormStyle.containInputError,
              getValues().email && !errors.email && registerFormStyle.containInputSuccess,
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

        <div css={registerFormStyle.fieldContainer}>
          <label htmlFor="password" css={[registerFormStyle.labelInput]}>
            Password <span>(*)</span>:
          </label>
          <br />
          <div
            css={[
              registerFormStyle.containInput,
              errors.password && registerFormStyle.containInputError,
              getValues().password && !errors.password && registerFormStyle.containInputSuccess,
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
        <div css={registerFormStyle.forgotPw}>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
        <Button
          css={registerFormStyle.btnRegister}
          label="Login"
          type="submit"
          size="md"
          prefixIcon={<Icon icon="register-solid" />}
          // disabled={!isDirty || !isValid}
        ></Button>
      </form>
    </>
  );
};

export default LoginForm;
