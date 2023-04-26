import styled from '@emotion/styled'

export const Form = styled.form`
  width: 400px;
  border: 2px solid #337088e8;
  padding: 15px;
  & button{
    margin-top: 20px;
  };
  & input{
    margin-bottom: 20px;
    border-color: #337088e8;
    &:hover{
      border-color: #55b7c3;
    };
  };
`;

