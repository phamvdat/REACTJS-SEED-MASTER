/** @jsxImportSource @emotion/react */
import { socialType } from 'core/types/base-ui';
import React from 'react';
import Icon from '../../Icon';
import { SocialButtonStyle } from './SocialButtonStyle';
interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  social: socialType;
  icon: string;
  onClick?: (params: any) => void;
}
export default function SocialButton(props: BtnProps) {
  const { label, icon, social, ...rest } = props;

  return (
    <button {...rest} css={[SocialButtonStyle.self, SocialButtonStyle.social[social]]}>
      <Icon icon={icon} size={20} />
      {label}
    </button>
  );
}
