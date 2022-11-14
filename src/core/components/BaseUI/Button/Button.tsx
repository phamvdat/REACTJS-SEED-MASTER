/** @jsxImportSource @emotion/react */
import { ColorType, SizeType } from 'core/types/base-ui';
import React from 'react';
import { buttonStyle } from './ButtonStyle';

type VariantButton = 'fill' | 'outlined';
interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: VariantButton;
  size?: SizeType;
  prefixIcon?: React.ReactElement;
  suffixIcon?: React.ReactElement;

  onClick?: (params: any) => void;
}
export default function LongButton(props: BtnProps) {
  const { label, size = 'sm', variant = 'fill', prefixIcon, suffixIcon, ...rest } = props;
  return (
    <button
      {...rest}
      css={[buttonStyle.self, buttonStyle.size[size], buttonStyle.variant[variant]]}
    >
      {prefixIcon}
      {label}
      {suffixIcon}
    </button>
  );
}
