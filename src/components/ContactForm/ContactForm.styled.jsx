import styled from '@emotion/styled'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  border: 2px solid teal;
  margin 0 auto;
  padding: 15px;
  & input{
    background-color:#c1dbdbba;
    border-color: #337088e8;
    &:hover{
      border-color: #55b7c3;
    };
  };

`;

export const Label = styled.label`
  width: 100%;
  margin-bottom: 20px;
`;
