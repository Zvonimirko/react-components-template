import { useForm } from 'react-hook-form';
import { PhoneInput as BasePhoneInput } from './PhoneInput';
import React from 'react';

export const PhoneInput = () => {
  const { control, watch } = useForm();
  // eslint-disable-next-line no-console
  console.log(watch('input'));

  return <BasePhoneInput control={control} name="input" />;
};
