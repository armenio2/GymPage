import React from 'react';
import { FormBack, StyledForm, FormLabel, FormInput, FormButton, FormTextArea, FormCenter } from './style.ts'




const Form: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e);
    const emailConfig = {
      SecureToken: 'deb5aea6-526c-4e2f-a90b-51e18327e800',
      To: 'acad1377@gmail.com', // Substitua pelo endereço de e-mail do destinatário
      From: `acad1377@gmail.com`,
      Subject: `Nova mensagem de ${e.target[0].value}, `,
      Body: `${e.target[1].value}, ${e.target[2].value}`,
    };

    try {
      // Envie o e-mail usando SMTPJS
      await window.Email.send(emailConfig);
      console.log('E-mail enviado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
    }

    window.Email.send(emailConfig).then(
      (message) => console.log(message)
    );

   };




  return (
    <FormBack>
      <FormCenter>
        <StyledForm onSubmit={handleSubmit}>
          <FormLabel htmlFor="name">Nome:</FormLabel>
          <FormInput type="text" id="name" placeholder="Seu nome." required />

          <FormLabel htmlFor="email">E-mail:</FormLabel>
          <FormInput type="email" id="email" placeholder="Seu E-mail." required />

          <FormLabel htmlFor="message">Mensagem:</FormLabel>
          <FormTextArea id="message" placeholder="Digite sua mensagem." rows={4} required />

          <FormButton type="submit">Enviar</FormButton>
        </StyledForm>
      </FormCenter>
    </FormBack>
  );
};

export default Form;
