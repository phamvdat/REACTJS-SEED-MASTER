/** @jsxImportSource @emotion/react */
import { css, SerializedStyles, Theme } from '@emotion/react';
import { SizeType } from 'core/types/base-ui';
import { UseFormRegisterReturn } from 'react-hook-form';
import { radioStyle } from './RadioStyle';

export interface RadioProps extends Omit<React.HTMLProps<HTMLInputElement>, 'size'> {
  label: string;
  id?: string;
  registerField?: UseFormRegisterReturn;
  size?: Extract<SizeType, 'sm' | 'md'>;
  customSelf?: SerializedStyles;
  customLabel?: SerializedStyles;
  activeColorLabel?: boolean;
  disabled?: boolean;
}

const getSize = {
  sm: radioStyle.sm,
  md: radioStyle.md,
};

const CheckMark = ({ size = 'md' }: Omit<RadioProps, 'label'>) => {
  return (
    <span
      tabIndex={0}
      css={[radioStyle.checkmark, getSize[size]]}
      aria-labelledby={size}
      data-testid="checkmark"
    />
  );
};

const Label = ({ label, customLabel }: RadioProps) => {
  return (
    <span css={[radioStyle.label, customLabel]} data-testid="label">
      {label}
    </span>
  );
};

const Radio = (props: RadioProps) => {
  const {
    label,
    id,
    size,
    registerField,
    disabled,
    customSelf,
    customLabel,
    activeColorLabel = true,
    ...rest
  } = props;

  return (
    <label
      role="radio"
      css={[radioStyle.self, customSelf, customLabel]}
      htmlFor={id || label}
      aria-disabled={disabled}
    >
      <input
        hidden
        type="radio"
        disabled={disabled}
        aria-labelledby={label}
        placeholder={label}
        css={[
          radioStyle.input,
          ({ colors }: Theme) =>
            css({
              '&:checked ~ span:nth-of-type(2)': {
                color: activeColorLabel ? colors?.primary[100] : '',
              },
            }),
        ]}
        id={id || label}
        {...rest}
        {...registerField}
      />
      <CheckMark size={size} aria-labelledby={id} />
      <Label label={label} customLabel={customLabel} activeColorLabel={activeColorLabel} />
    </label>
  );
};

export default Radio;
