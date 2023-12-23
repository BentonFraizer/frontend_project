import React, { memo } from 'react';
import s from './forn-input.module.css';

const FormInput = ({ name, type, id, value, setValue }) => {
  return (
    <div className={s.input__wrapper}>
      <label htmlFor={name}>{name}: </label>
      <input name={name} type={type} id={id} value={value} onChange={(e) => setValue(e)}></input>
    </div>
  );
};

export default memo(FormInput);
