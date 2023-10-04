import { useForm } from 'react-hook-form';
import { CurrencyInput as BaseCurrencyInput } from './CurrencyInput';
import React from 'react';

export const CurrencyInput = () => {
  const { control, watch } = useForm();
  // eslint-disable-next-line no-console
  console.log(watch('input'));

  return <BaseCurrencyInput control={control} name="input" />;
};
