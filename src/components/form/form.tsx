import React from 'react';
import { FormBack, StyledForm, FormLabel, FormInput, FormButton, FormTextArea, FormCenter } from './style.ts'




const Form: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e);
    const emailConfig = {
      SecureToken: '********************', // Secure Token Ex: 44ab77csd-451a-4a8s-a90b-51e00000000
      To: '*****************', // Substitua pelo endereço de e-mail do destinatário
      From: `************************`,
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
