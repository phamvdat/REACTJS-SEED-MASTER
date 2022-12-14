/** @jsxImportSource @emotion/react */
import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'core/components/BaseUI/Button';
import Icon from 'core/components/BaseUI/Icon';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { registerFormStyle } from './RegisterFormStyle';
export type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  retypepassword: string;
  termCondition: boolean;
};

const validationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required('Please fill out this field !')
    .max(20, 'Full name must be less than 20 characters'),
  email: yup.string().email().required('Please fill out this field !'),
  phone: yup
    .string()
    .max(12, 'Phone number must be less than 20 numbers')
    .matches(/^[0-9]*$/, 'Must be only digits'),
  password: yup
    .string()
    .required('Please fill out this field !')
    .matches(
      /^.*(?=.{8,16})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Your password must contain at least 8-16 characters, including special characters, numbers, upper and lowercase, and must not have space or Unicode.',
    ),
  retypepassword: yup
    .string()
    .required('Please fill out this field !')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  termCondition: yup.bool().oneOf([true], 'You must accept the terms and conditions'),
});
const RegisterForm = ({ onSubmit }: { onSubmit: (data: FormValues) => void }) => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [showRePass, setShowRePass] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isDirty, isValid },
  } = useForm<FormValues>({
    mode: 'all',
    resolver: yupResolver(validationSchema),
  });
  onSubmit = data => {
    console.log(data);
    alert('submit form');
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} css={[registerFormStyle.self]}>
        <div css={registerFormStyle.fieldContainer}>
          <label htmlFor="fulname" css={[registerFormStyle.labelInput]}>
            Full name <span>(*)</span>:
          </label>
          <br />
          <div
            css={[
              registerFormStyle.containInput,
              errors.fullName && registerFormStyle.containInputError,
              getValues().fullName && !errors.fullName && registerFormStyle.containInputSuccess,
            ]}
          >
            <span style={{ width: '20px' }}>
              <Icon icon="user-solid" size={20} />
            </span>
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
            <span style={{ width: '20px' }}>
              <Icon icon="mail-solid" size={20} />
            </span>

            <input type="text" id="email" placeholder="Email" {...register('email')} />
            {getValues().email &&
              (!errors.email ? <Icon icon="success" size={20} /> : <Icon icon="error" size={20} />)}
          </div>
          {errors.email && <h6>{errors.email?.message}</h6>}
        </div>

        <div css={registerFormStyle.fieldContainer}>
          <label htmlFor="phone" css={[registerFormStyle.labelInput]}>
            Phone
          </label>
          <br />
          <div
            css={[
              registerFormStyle.containInput,
              errors.phone && registerFormStyle.containInputError,
              getValues().phone && !errors.phone && registerFormStyle.containInputSuccess,
            ]}
          >
            <span style={{ width: '30px', marginRight: '22px' }}>
              <Icon icon="vietnam" size={20} />
              <Icon icon="down-arrow-solid" size={10} />
            </span>
            <input type="number" id="phone" placeholder="Phone number" {...register('phone')} />
            {getValues().phone &&
              (!errors.phone ? <Icon icon="success" size={20} /> : <Icon icon="error" size={20} />)}
          </div>
          {errors.phone && <h6>{errors.phone?.message}</h6>}
        </div>

        <div>
          <div css={registerFormStyle.passFieldContainer}>
            <div>
              <label htmlFor="password" css={[registerFormStyle.labelInput]}>
                Password <span>(*)</span>:
              </label>
              <br />
              <div
                css={[
                  registerFormStyle.containInput,
                  registerFormStyle.passField,
                  errors.password && registerFormStyle.containInputError,
                  getValues().password && !errors.password && registerFormStyle.containInputSuccess,
                ]}
              >
                <span style={{ width: '20px' }}>
                  <Icon icon="password-solid" size={20} />
                </span>
                <input
                  type={showPass ? 'text' : 'password'}
                  id="password"
                  placeholder="Password"
                  {...register('password')}
                />
                <Icon
                  size={20}
                  icon={showPass ? 'eye-solid' : 'eye-slash-solid'}
                  onClick={() => setShowPass(!showPass)}
                />
                {errors.password && <Icon icon="error" size={20} />}
              </div>
            </div>

            <div>
              <label htmlFor="retypepassword" css={[registerFormStyle.labelInput]}>
                Retype password <span>(*)</span>:
              </label>
              <br />
              <div
                css={[
                  registerFormStyle.containInput,
                  registerFormStyle.passField,
                  errors.retypepassword && registerFormStyle.containInputError,
                  getValues().retypepassword &&
                    !errors.retypepassword &&
                    registerFormStyle.containInputSuccess,
                ]}
              >
                <span style={{ width: '20px' }}>
                  <Icon icon="password-solid" size={20} />
                </span>
                <input
                  type={showRePass ? 'text' : 'password'}
                  id="retypepassword"
                  placeholder="Password"
                  {...register('retypepassword')}
                />
                <Icon
                  size={20}
                  icon={showRePass ? 'eye-solid' : 'eye-slash-solid'}
                  onClick={() => setShowRePass(!showRePass)}
                />
                {errors.retypepassword && <Icon icon="error" size={20} />}
              </div>
            </div>
          </div>
          {errors.password && <h6>{errors.password?.message}</h6>}
          {errors.retypepassword && <h6>{errors.retypepassword?.message}</h6>}
        </div>

        <div css={registerFormStyle.contentTerm}>
          <div>
            <input type="checkbox" id="term" {...register('termCondition')} />
            <label css={registerFormStyle.labelInput} htmlFor="term">
              I agree to terms and conditions.
            </label>
          </div>
          {errors.termCondition && (
            <h6 css={registerFormStyle.textError}>{errors.termCondition?.message}</h6>
          )}
        </div>
        <Button
          css={registerFormStyle.btnRegister}
          label="Login"
          type="submit"
          size="md"
          prefixIcon={<Icon icon="register-solid" />}
          // disabled={!isDirty || !isValid}
        />
      </form>
    </>
  );
};

export default RegisterForm;
