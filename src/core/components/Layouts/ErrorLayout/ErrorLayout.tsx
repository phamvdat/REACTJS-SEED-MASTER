import { Outlet } from 'react-router-dom';

const ErrorLayout = () => {
  return (
    <>
      <h6>Error Layout</h6>
      <Outlet />
    </>
  );
};

export default ErrorLayout;
