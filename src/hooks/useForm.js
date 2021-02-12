import { useState } from 'react';

const useForm = (key, initialValue) => {
  
  const [value, setStoredValue] = useState(() => {
    (localStorage.getItem(key)) ? JSON.parse(localStorage.getItem(key)) : localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  })

  const setValue = (newValue) => {
    setStoredValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue))
  };
  return [value, setValue];
}
const [values, setValues] = useLocalStorage(key, initialValue);

const handleChange = (event) => {
  setValues({
    ...values,
    [event.target.name]: event.target.value
  })
}

const newForm = () => {
  setValues(initialValue);
}

return [values, handleChange, newForm];

export default useForm