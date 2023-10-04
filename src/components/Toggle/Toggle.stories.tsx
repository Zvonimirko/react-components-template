import { useForm } from 'react-hook-form';
import { Toggle as BaseToggle } from './Toggle';
import React from 'react';

export default {
  title: 'Toggle',
};

export const Toggle = () => {
  const { control } = useForm({ defaultValues: { toggle: false } });

  return (
    <BaseToggle control={control} name="toggle" activeBgClass="bg-indigo-600" />
  );
};
