import React from 'react';

const FormItem = props => {
  const { name, text, changeFn } = props;

  return (
    <div>
      <label htmlFor={name}>{text}</label>
      <input 
        className='form-control' name={name} onChange={changeFn}
        {...(props.id && {id: props.id})}
        type={props.type? props.type : 'text'}
      />
    </div>
  );
}

export default FormItem