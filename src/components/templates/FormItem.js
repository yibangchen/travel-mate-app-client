import React from 'react';

const FormItem = ({ text, name, type, id, fn }) => {
  return (
    <label htmlFor={name}>{text}</label>
    <input className='form-control' id={id} name={name} type={type} onChange={fn} />
  );
}

export default FormItem