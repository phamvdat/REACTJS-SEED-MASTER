/** @jsxImportSource @emotion/react */
import SocialButton from 'core/components/BaseUI/Button/SocialButton/SocialButton';
import { socialType } from 'core/types/base-ui';
import { socialFormStyle } from './social-form-styles';
interface Social {
  label: string;
  social: socialType;
  icon: string;
}
export default function SocialForm() {
  const listSocial: Social[] = [
    {
      label: 'Log in with Google',
      social: 'google',
      icon: 'google',
    },
    {
      label: 'Log in with Facebook',
      social: 'facebook',
      icon: 'facebook',
    },
    {
      label: 'Log in with Instagram',
      social: 'instagram',
      icon: 'instagram',
    },
    {
      label: 'Log in with Twitter',
      social: 'twitter',
      icon: 'twitter',
    },
  ];
  return (
    <form>
      <ul css={socialFormStyle.self}>
        {listSocial.map((ele: Social, idx: number) => {
          return (
            <li key={idx}>
              <SocialButton label={ele.label} social={ele.social} icon={ele.icon} />
            </li>
          );
        })}
      </ul>
    </form>
  );
}
