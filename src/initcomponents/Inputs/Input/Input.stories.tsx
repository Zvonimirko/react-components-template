import { useForm } from 'react-hook-form';
import { Input as BaseInput } from './Input';

export const Input = () => {
  const { control, watch } = useForm();
  // eslint-disable-next-line no-console
  console.log(watch('input'));

  return <BaseInput control={control} name="input" label="My Input" />;
};
