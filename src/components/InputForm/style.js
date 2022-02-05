import styled from "styled-components";

export const InputForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem;
  padding: 1rem;
`;

export const Input = styled.input`
  background: transparent;
  padding: 0.3em 1em;
  outline: none;
  border-radius: 5px;
  border: 1px solid #00000050;
  width: 30%;
  min-width: 40ch;
`;

export const Button = styled.button`
  background: #297fb9;
  border: solid 1px #00000050;
  border-radius: 5px;
  color: #fff;
  padding: 0.3em 1em;
  transition: background 0.3s ease;
  &:hover {
    cursor: pointer;
    background: #2980b9d9;
  }
`;
