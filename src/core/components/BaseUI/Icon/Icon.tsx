import iconSet from 'assets/fonts/Icomoon/selection_v1.json';
import IcoMoon, { IconProps } from 'react-icomoon';

const Icon = ({ size = 16, ...props }: IconProps) => (
  <IcoMoon iconSet={iconSet} size={size} {...props} style={{ verticalAlign: 'middle' }} />
);

export default Icon;
