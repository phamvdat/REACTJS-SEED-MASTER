import iconSet from 'assets/fonts/Icomoon/selection_v3.json';
import IcoMoon, { IconProps } from 'react-icomoon';

const Icon = ({ size = 20, ...props }: IconProps) => (
  <IcoMoon iconSet={iconSet} size={size} {...props} style={{ verticalAlign: 'middle' }} />
);

export default Icon;
