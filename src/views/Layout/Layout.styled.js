import styled from '@emotion/styled'
import img from '../../back-ground.jpg';
export const Footer = styled.footer`
  text-align: center;
  background-color: #f3e6b5b3;
  padding: 20px;
`;
export const Main = styled.main`
  min-width: 100vw;
  min-height: inherit;
  text-align: center;
  ${'' /*  linear-gradient(rgba(47, 48, 58, 0.4,), rgba(47, 48, 58, 0.4)), */}
  background-position: center;
    background-image: url(${img});
  background-repeat: no-repeat;
  background-attachment: fixed; 
  background-size: cover;
`;
