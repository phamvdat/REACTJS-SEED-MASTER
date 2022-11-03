import Button from 'core/components/BaseUI/Button/Button';
import { useForm } from 'react-hook-form';

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            placeholder="Email"
            {...register('email', { required: true, maxLength: 80 })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password"
            id="password"
            placeholder="Password"
            {...register('password', { required: true, maxLength: 80 })}
          />
        </div>
        <br />
        <Button label="Login" type="submit" color="red" />
      </form>
    </>
  );
};

export default LoginForm;
