import React from 'react';
import { FormBack, StyledForm, FormLabel, FormInput, FormButton, FormTextArea, FormCenter } from './style.ts'




const Form: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Adicione a lógica para enviar o formulário por e-mail aqui
  };

  return (
    <FormBack>
      <FormCenter>
        <StyledForm onSubmit={handleSubmit}>
          <FormLabel htmlFor="name">Nome:</FormLabel>
          <FormInput type="text" id="name" required />

          <FormLabel htmlFor="email">E-mail:</FormLabel>
          <FormInput type="email" id="email" required />

          <FormLabel htmlFor="message">Mensagem:</FormLabel>
          <FormTextArea id="message" rows={4} required />

          <FormButton type="submit">Enviar</FormButton>
        </StyledForm>
      </FormCenter>
    </FormBack>
  );
};

export default Form;
