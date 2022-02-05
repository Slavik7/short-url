import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h2 {
    font-weight: 500;
  }
`;
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  box-shadow: 0px 0px 5px 5px #eee;
  border-radius: 1rem;
  span {
    font-size: 80%;
    margin-right: 1em;
  }
  p {
    align-self: flex-start;
    display: flex;
    align-items: center;
  }
`;

export const Copy = styled.span`
  font-size: 0.6rem;
  margin-left: 0.5rem;
  border: solid 1px #eee;
  color: #5e5e5e;
  border-radius: 5px;
  padding: 0.2em 0.2em;
  cursor: pointer;
`;
