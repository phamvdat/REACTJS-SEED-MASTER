/** @jsxImportSource @emotion/react */

import { css, SerializedStyles, Theme } from '@emotion/react';
import { SizeType } from 'core/types/base-ui';
import React from 'react';
import Icon from '../Icon';
import { buttonStyle, loadingIcon } from './ButtonStyle';
export const paddingCircle = {
  sm: 6,
  md: 10,
  lg: 14,
};
type variantButton = 'fill' | 'outlined' | 'text';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  size?: SizeType;
  loading?: boolean;
  circleIcon?: React.ReactElement;
  variant?: variantButton;
  prefixIcon?: React.ReactElement;
  suffixIcon?: React.ReactElement;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (params: any) => void;
}

const ButtonLoading = ({ circleIcon }: Pick<ButtonProps, 'circleIcon'>) => {
  return (
    <>
      <Icon css={loadingIcon} icon="loading" />
      {!circleIcon && <span>Loading...</span>}
    </>
  );
};

const ButtonInner = (props: Omit<ButtonProps, 'size' | 'loading' | 'variant' | 'onClick'>) => {
  const { circleIcon, prefixIcon, label, suffixIcon } = props;
  return (
    <>
      {circleIcon ? (
        circleIcon
      ) : (
        <>
          {prefixIcon}
          {label && <span>{label}</span>}
          {suffixIcon}
        </>
      )}
    </>
  );
};

const Button = (props: ButtonProps) => {
  const {
    label,
    size = 'md',
    variant = 'fill',
    prefixIcon,
    suffixIcon,
    circleIcon,
    loading,
    ...rest
  } = props;

  const getButtonVariant = (): SerializedStyles | (({ colors }: Theme) => SerializedStyles) => {
    return buttonStyle[variant];
  };

  const getButtonStyle = (): SerializedStyles[] => {
    const style = [buttonStyle.self, buttonStyle.size[size], getButtonVariant()];
    if (circleIcon) {
      const circleStyle = css({
        padding: paddingCircle[size],
        borderRadius: '50%',
      });
      style.push(circleStyle);
    }
    if (loading) {
      style.push(buttonStyle.loading);
    }
    return style as SerializedStyles[];
  };

  return (
    <button {...rest} role="button" css={getButtonStyle()}>
      {loading ? (
        <ButtonLoading circleIcon={circleIcon} />
      ) : (
        <ButtonInner
          label={label}
          circleIcon={circleIcon}
          suffixIcon={suffixIcon}
          prefixIcon={prefixIcon}
        />
      )}
    </button>
  );
};

export default Button;
