import { useForm } from 'react-hook-form';
import { RadioGroup as BaseRadioGroup } from './RadioGroup';
import { RadioButton } from './RadioButton';
import React from 'react';

export const RadioGroup = () => {
  const { control, watch } = useForm();
  // eslint-disable-next-line no-console
  console.log(watch());

  return (
    <div className="flex flex-col gap-2">
      <BaseRadioGroup name="radioGroup" control={control}>
        <RadioButton value="Button1" label="Test 1" />
        <RadioButton value="Button2" label="Test 2" />
      </BaseRadioGroup>

      <BaseRadioGroup name="radioGroup2" control={control}>
        <RadioButton value="Button1" label="Test 1" />
        <RadioButton value="Button2" label="Test 2" />
      </BaseRadioGroup>
    </div>
  );
};
