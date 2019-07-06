import styled from 'styled-components';
import { Title } from './../styles/title';

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding-bottom: 40px;
`;

export const FoodLabel = styled(Title)`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 5px;
`;

export const Food = styled.div`
  height: 200px;
  padding: 10px;
  font-size: 20px;
  background: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  filter: contrast(75%);
  border-radius: 7px;
  marin-top: 5px;
  box-shadow: 0px 0px 2px 0px grey;
  transition: all 0.3s ease-in;
  &:hover {
    cursor: pointer;
    filter: contrast(100%);
    margin-top: 0px;
    margin-bottom: 5px;
    box-shadow: 0px 5px 12px 0px grey;
  }
`;
