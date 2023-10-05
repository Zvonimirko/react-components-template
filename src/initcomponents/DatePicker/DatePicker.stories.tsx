import { useForm } from 'react-hook-form';
import { DatePicker as BaseDatePicker } from './DatePicker';

export const DatePicker = () => {
  const { control, watch } = useForm();
  // eslint-disable-next-line no-console
  console.log(watch('input'));

  return <BaseDatePicker control={control} name="input" />;
};
