import Icon from 'core/components/BaseUI/Icon';
import { Outlet } from 'react-router-dom';

const BlankLayout = () => {
  return (
    <>
      <header>
        <Icon icon="logo-solid" />
      </header>
      <Outlet />
    </>
  );
};

export default BlankLayout;
