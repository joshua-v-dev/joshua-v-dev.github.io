import { ComponentMeta } from '@storybook/react';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  title?: string;
  component?: ComponentMeta<typeof Button>
  primary?: boolean;
  label?: string;
};
const Button = ({ children, ...rest }: ButtonProps ) => {
  return (
    <button className="button" {...rest}>
      { children }
    </button>
  )
}

export default Button;