import React from 'react';
import { IconProps } from '../type';

const CloseOutlined: React.FC<IconProps> = props => {
  const { className } = props;

  return (
    <svg className={className} fill='currentColor' viewBox='0 0 24 25' width='1em' height='1em'>
      <path
        fill-rule='evenodd'
        d='M7.909 4.856A2.314 2.314 0 1 0 4.636 8.13l4.091 4.091-4.09 4.09a2.314 2.314 0 0 0 3.272 3.274L12 15.493l4.092 4.09a2.314 2.314 0 0 0 3.272-3.272l-4.09-4.09 4.09-4.092a2.314 2.314 0 0 0-3.272-3.273L12 8.947l-4.091-4.09Z'
        clip-rule='evenodd'
      ></path>
    </svg>
  );
};

export default CloseOutlined;
