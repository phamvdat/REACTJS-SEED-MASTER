/** @jsxImportSource @emotion/react */
import { yupResolver } from '@hookform/resolvers/yup';
import LongButton from 'core/components/BaseUI/Button/LongButton/LongButton';
import Icon from 'core/components/BaseUI/Icon';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { formStyle } from './form-styles';
export type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  retypepassword: string;
};

const validationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required('The account is Incomplete or incorrect . Make sure you entered it correctly.'),
  email: yup
    .string()
    .email()
    .required('The account is Incomplete or incorrect . Make sure you entered it correctly.'),
  phone: yup.string().min(6).max(12),
  password: yup.string().min(8).max(32).required(),
  retypepassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required(),
});

const RegisterForm = ({ onSubmit }: { onSubmit: (data: FormValues) => void }) => {
  const [showpPw, setShowPw] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'all',
    resolver: yupResolver(validationSchema),
  });
  onSubmit = data => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} css={[formStyle.self]}>
        <div css={formStyle.fieldContainer}>
          <label htmlFor="fulname" css={[formStyle.labelInput]}>
            Full name <span>(*)</span>:
          </label>
          <br />
          <div
            css={[
              formStyle.containInput,
              errors.fullName && formStyle.containInputError,
              getValues().fullName && !errors.fullName && formStyle.containInputSuccess,
            ]}
          >
            <Icon icon="user-solid" size={20} />
            <Icon icon="rectangle" size={20} />
            <input type="text" id="fulname" placeholder="Full name" {...register('fullName')} />
            {getValues().fullName &&
              (!errors.fullName ? (
                <Icon icon="success" size={20} />
              ) : (
                <Icon icon="error" size={20} />
              ))}
            {errors.fullName && <Icon icon="error" size={20} />}
          </div>
          {errors.fullName && <h6>{errors.fullName?.message}</h6>}
        </div>

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
            <Icon icon="mail-solid" size={20} />
            <Icon icon="rectangle" size={20} />
            <input type="text" id="email" placeholder="Email" {...register('email')} />
            {getValues().email &&
              (!errors.email ? <Icon icon="success" size={20} /> : <Icon icon="error" size={20} />)}
            {errors.email && <Icon icon="error" size={20} />}
          </div>
          {errors.email && <h6>{errors.email?.message}</h6>}
        </div>

        <div css={formStyle.fieldContainer}>
          <label htmlFor="phone" css={[formStyle.labelInput]}>
            Phone
          </label>
          <br />
          <div
            css={[
              formStyle.containInput,
              errors.phone && formStyle.containInputError,
              getValues().phone && !errors.phone && formStyle.containInputSuccess,
            ]}
          >
            <Icon icon="vietnam" size={20} />
            <Icon icon="rectangle" size={20} />
            <input type="text" id="phone" placeholder="+84" {...register('phone')} />
            {getValues().phone &&
              (!errors.phone ? <Icon icon="success" size={20} /> : <Icon icon="error" size={20} />)}
            {errors.phone && <Icon icon="error" size={20} />}
          </div>
          {errors.phone && <h6>{errors.phone?.message}</h6>}
        </div>

        <div css={formStyle.passFieldContainer}>
          <div>
            <label htmlFor="password" css={[formStyle.labelInput]}>
              Password <span>(*)</span>:
            </label>
            <br />
            <div
              css={[
                formStyle.containInput,
                formStyle.passField,
                errors.password && formStyle.containInputError,
                getValues().password && !errors.password && formStyle.containInputSuccess,
              ]}
            >
              <Icon icon="password-solid" size={20} />
              <Icon icon="rectangle" size={20} />
              <input
                type={showpPw ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                {...register('password')}
              />
              {getValues().password &&
                (!errors.password ? (
                  showpPw ? (
                    <Icon size={20} icon="eye-solid" onClick={() => setShowPw(false)} />
                  ) : (
                    <Icon size={20} icon="eye-slash-solid" onClick={() => setShowPw(true)} />
                  )
                ) : (
                  <Icon icon="error" size={20} />
                ))}
            </div>
          </div>

          <div>
            <label htmlFor="retypepassword" css={[formStyle.labelInput]}>
              Retype password <span>(*)</span>:
            </label>
            <br />
            <div
              css={[
                formStyle.containInput,
                formStyle.passField,
                errors.retypepassword && formStyle.containInputError,
                getValues().retypepassword &&
                  !errors.retypepassword &&
                  formStyle.containInputSuccess,
              ]}
            >
              <Icon icon="password-solid" size={20} />
              <Icon icon="rectangle" size={20} />
              <input
                type="password"
                id="retypepassword"
                placeholder="Password"
                {...register('retypepassword')}
              />
              {getValues().retypepassword &&
                (!errors.retypepassword ? (
                  showpPw ? (
                    <Icon size={20} icon="eye-solid" onClick={() => setShowPw(false)} />
                  ) : (
                    <Icon size={20} icon="eye-slash-solid" onClick={() => setShowPw(true)} />
                  )
                ) : (
                  <Icon icon="error" size={20} />
                ))}
            </div>
          </div>
        </div>

        <div css={formStyle.contentTerm}>
          <input type="checkbox" id="term" name="term" value="Bike" />
          <label htmlFor="term">I agree to terms and conditions.</label>
        </div>
        <LongButton label="Login" type="submit" icon="register-solid" />
      </form>
    </>
  );
};

export default RegisterForm;
