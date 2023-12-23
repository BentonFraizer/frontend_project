import React, { useState, useCallback } from 'react';
import s from './form.module.css';
import FormInput from '../FormInput/FormInput';
import { Button } from 'antd';

export const Form = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState('');
  const [isValidateError, setIsValidateError] = useState(false);

  const handleLoginInputChange = useCallback((e) => {
    const value = e.target.value;
    setLogin(value);
  }, []);

  const handlePasswordInputChange = useCallback((e) => {
    const value = e.target.value;
    setPassword(value);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const loginValue = e.target.Login.value;
    const passwordValue = e.target.Password.value;
    console.log(loginValue === '');
    console.log(passwordValue === '');
    if (loginValue === '' || passwordValue === '') {
      setErrorText('Запоните все поля');
      setIsValidateError(true);
    } else if (loginValue !== '' && passwordValue.length < 5) {
      setErrorText('Пароль должен быть более четырёх символов');
      setIsValidateError(true);
    } else {
      setErrorText('Вход выполнен успешно');
      setIsValidateError(false);
    }
  };

  const errorStyle = isValidateError ? { border: '1px solid red' } : { border: '1px solid skyblue' };
  const infoTextStyle = isValidateError ? { color: 'orange' } : { color: 'green' };

  return (
    <div className={s.form__wrapper}>
      <div className={s.error} style={infoTextStyle}>
        {errorText}
      </div>
      <form className={s.form} style={errorStyle} onSubmit={(e) => handleFormSubmit(e)}>
        <FormInput name={'Login'} type={'text'} id={'Login'} value={login} setValue={handleLoginInputChange} />
        <FormInput name={'Password'} type={'password'} id={'Password'} value={password} setValue={handlePasswordInputChange} />
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </form>
    </div>
  );
};
