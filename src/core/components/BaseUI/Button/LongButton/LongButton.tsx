/** @jsxImportSource @emotion/react */
import React from 'react';
import Icon from '../../Icon';
import { LongButtonStyle } from './LongButtoStyle';

interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: string;
  onClick?: (params: any) => void;
}
export default function LongButton(props: BtnProps) {
  const { label, icon, ...rest } = props;
  return (
    <button {...rest} css={LongButtonStyle.self}>
      <Icon icon={icon} size={20} />
      {label}
    </button>
  );
}
