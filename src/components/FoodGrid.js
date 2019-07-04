import styled from 'styled-components';
import { Title } from './../styles/title';

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

export const FoodLabel = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 5px;
`;

export const Food = styled(Title)`
  height: 200px;
  padding: 10px;
  font-size: 20px;
  background: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  filter: contrast(75%);
  border-radius: 7px;
  box-shadow: 0px 0px 12px 0px grey;
  transition: all 0.3s ease-in;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
