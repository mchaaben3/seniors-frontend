import styled from 'styled-components';
import bgC from './img/landing.jpg';
export const MainContainer = styled.div.attrs({
  className: 'flex justify-center h-screen',
})``;

export const BgContainer = styled.div`
  background-image: url(${bgC});
  background-size: cover;
  background-position: center;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
