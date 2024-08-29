import React from 'react';
import InputField from './InputField';

const EmailInput = ({ value, onChange, register, trigger }) => {
  return (
    <InputField
      type="email"
      placeholder="Email"
      ariaLabel="Email"
      value={value}
      onChange={onChange}
      {...register('email', {
        required: 'El correo electrónico es obligatorio.',
        pattern: {
          value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
          message: 'El formato del email es incorrecto'
        }
      })}
      onBlur={() => trigger('email')}
      className="peer block w-full appearance-none rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-700 placeholder-transparent focus:border-sky-500 focus:outline-none focus:ring-0"
    />
  );
};

export default EmailInput;
