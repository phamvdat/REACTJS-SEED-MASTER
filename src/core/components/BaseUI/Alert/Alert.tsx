/** @jsxImportSource @emotion/react */
import React from 'react';
import { alertCss } from './AlertStyle';

export type AlerType = 'success' | 'warning' | 'error' | 'infor';
export interface AlerProps {
  title: string;
  type: AlerType;
}

const Alert = ({ type = 'success', title = 'Alert Component' }: Partial<AlerProps>) => {
  return (
    <div className="alert" role="alert" css={[alertCss.self, alertCss[type]]}>
      <span className="alert-title" data-testid="alert-title">
        {title}
      </span>
    </div>
  );
};

export default React.memo(Alert);
