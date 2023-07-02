import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 20px;
  font-size: 20px;
  font-weight: 700;
  &:hover {
    color: red;
  }
  &.active {
    color: red;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 20px;
  list-style: none;
  box-shadow: 2px 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-bottom: 1px solid black;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
`;