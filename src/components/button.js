import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transfom: capatalize;
  font-size: 1.4rem;
  background-color: transparent;
  border: 0.05rem outset;
  border-color: ${props => props.cart ? "var(--mainYellow)" :
    "var(--lightBlue)"
  };
  color: ${props => props.cart ? "var(--mainYellow)" :
  "var(--lightBlue)"
};;
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transitions: all 0.5s ease-in-out;
  &:hover {
    background: ${props => props.cart ? "var(--mainYellow)" :
    "var(--lightBlue)"
  };
    color: white;
  }
  &:focus {
    outline: none;
  }
`

