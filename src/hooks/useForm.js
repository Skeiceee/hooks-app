import { useState } from "react";

const useForm = ( initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onResetForm = () => {
    setFormState(initialForm)
  }

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  };
};

export default useForm;
