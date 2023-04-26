import styled from '@emotion/styled'

export const Form = styled.form`
  width: 400px;
  border: 2px solid #337088e8;
  border-radius: 16px;
  padding: 15px;
 
  & input{
    margin-bottom: 20px;
    border-color: #337088e8;
    &:hover{
      border-color: #55b7c3;
    };
  };
`;