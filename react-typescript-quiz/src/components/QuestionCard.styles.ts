import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 110rem;
  background: #ebfeff;
  border-radius: 1rem;
  border: 0.2rem solid #0085a3;
  padding: 2rem;
  box-shadow: 0rem 0.5rem 1rem rgba(0, 0, 0, 0.25);
  text-align: center;
  color: #000;
  p {
    font-size: 2rem;
    margin: 0.5rem 0;
  }
  span {
    font-size: 1.8rem;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 1rem;
    width: 100%;
    height: 4rem;
    margin: 0.5rem 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? "linear-gradient(90deg, #0EA612, #046C07)"
        : !correct && userClicked
        ? "linear-gradient(90deg, #9E0508, #650305)"
        : "#555"};
    border: 0.3rem solid #fff;
    box-shadow: 0.1rem 0.2rem 0rem rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    color: #fff;
    text-shadow: 0rem 0.1rem 0rem rgba(0, 0, 0, 0.25);
  }
`;
