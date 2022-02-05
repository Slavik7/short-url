import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0rem 1.5rem;
  gap: 2rem;
  box-shadow: 0 1px 5px 5px #eee;
  height: 6vh;
  margin-bottom: 1rem;
  a {
    color: #000;
    text-decoration: none;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  height: 100%;
  li {
    padding: 0 1rem;
    font-size: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background: #eee;
    }
  }
`;

export const Logo = styled.div`
  font-weight: 600;
  font-size: 1.4rem;
  cursor: pointer;
`;
