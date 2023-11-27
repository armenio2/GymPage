import styled from 'styled-components';
import backgroundImage from '../../assets/background3.avif'


export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background: black;
  color: white;
  border-radius: 8px;
`;

export const FormCenter = styled.div`
padding: 100px;

@media (max-width: 800px) {
  padding: 40px 0px;
}
`

export const FormLabel = styled.label`
  margin-bottom: 8px;

  @media (max-width: 800px) {
    text-align: center;
  }
`;

export const FormInput = styled.input`
  margin-bottom: 16px;
  padding: 8px;
`;

export const FormButton = styled.button`
  background-color: white;
  color: black;
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
`;

export const FormTextArea = styled.textarea`
  margin-bottom: 16px;
  padding: 8px;
`;


export const FormBack = styled.div`
  margin: 0;
  padding: 0;
  background-color: black;
  font-family: 'Poppins', sans-serif;
  background-image: url('${backgroundImage}'); 
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
`;