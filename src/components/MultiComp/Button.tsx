import { ComponentMeta } from '@storybook/react';
import React from 'react';

type ButtonChops = {
  children?: React.ReactNode;
  title?: string;
  component?: ComponentMeta<typeof Button>
  primary?: boolean;
  label?: string;
};
const Button = ({ children, ...rest }: ButtonChops ) => {
  return (
    <button className="button" {...rest}>
      { children }
    </button>
  )
}

export default Button;