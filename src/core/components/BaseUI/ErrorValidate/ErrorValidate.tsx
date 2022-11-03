/** @jsxImportSource @emotion/react */
import { css, Theme } from '@emotion/react';

interface ErrorValidateProps {
  message: string;
}

const errorStyle = ({ colors, fontSize }: Theme) =>
  css({
    color: colors?.red[500],
    fontSize: fontSize?.['sm'],
  });

const ErrorValidate = ({ message }: ErrorValidateProps) => {
  return (
    <>
      <span role="alert" css={errorStyle}>
        {message}
      </span>
    </>
  );
};

export default ErrorValidate;
