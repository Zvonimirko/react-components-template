import React from 'react';

interface ButtonProps {
  label: string;
}

export const Button = (props: ButtonProps) => {
  return <div>{props.label}</div>;
};
