import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  gap: 1rem;
  width: 80%;
  margin: 1rem;
`;
export const Title = styled.div`
  margin-inline: 1rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
`;
export const InfoContainer = styled.div`
  margin-inline: 1rem;
  max-width: 80%;

  h1 {
    color: ${(props) => props.theme.Primary};
    margin-bottom: 0.5rem;
    font-size: 1.4rem;
  }
  p {
    color: ${(props) => props.theme.Primary};
    opacity: 0.7;
    margin-bottom: 0.5rem;
  }
`;
export const NavBar = styled.div`
  display: flex;

  gap: 0.5rem;
  margin-inline: 0.5rem;

  border-radius: 100px;
  justify-content: center;
  align-items: center;

  box-shadow: 0.5px 0.5px ${(props) => props.theme.Secondary};
  background-color: ${(props) => props.theme.Secondary};
  width: auto;
  padding: 4px 5px 4px 5px;
  transition: background-color 0.3s;
  span {
    font-weight: bold;
    color: ${(props) => props.theme.Primary};
  }
`;
export const NavButton = styled.button<{ selected: boolean }>`
  outline: none;
  border: none;
  padding: 6px 8px 6px 8px;
  background-color: ${(props) =>
    props.selected ? props.theme["Secondary-Button"] : props.theme.Secondary};
  opacity: ${(props) => (props.selected ? 1 : 0.8)};
  transform: ${(props) => (props.selected ? "scale(1)" : "scale(0.9)")};
  cursor: pointer;
  border-radius: 100px;
  transition:
    background-color 0.1s,
    opacity 0.2s,
    transform 0.2s;
  pointer-events: ${(props) => (props.selected ? "none" : "auto")};
  &:hover {
    opacity: 0.2;
  }
`;
