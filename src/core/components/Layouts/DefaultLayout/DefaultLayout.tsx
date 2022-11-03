import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <>
      <h6>Default Layout</h6>
      <Outlet />
    </>
  );
};

export default DefaultLayout;
