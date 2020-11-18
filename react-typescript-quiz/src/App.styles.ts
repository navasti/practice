import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/background.jpg";

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  html{
    height: 100%;
    font-size: 10px;
    color: #fff;
  }
  body{
    background-image: url(${BGImage});
    background-size: cover;
    padding: 0 2rem;
    display: flex;
    justify-content: center;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .App {
    display: flex;
    flex-direction: column;
  }

  .score {
    font-size: 2.6rem;
    margin: 0.5rem 0;
  }

  h1 {
    background-image: linear-gradient(180deg, #fb891e, #5bc4e0);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    font-size: 7rem;
    font-weight: 400;
    text-align: center;
    margin: 2rem;
  }

  .start,
  .next {
    cursor: pointer;
    align-self: center;
    color: #fff;
    font-size: 1.8rem;
    letter-spacing: 1px;
    background: #333;
    border: 0.1rem solid #fff;
    box-shadow: 0rem 0.5rem 1rem rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
    height: 4rem;
    margin: 2rem 0;
    padding: 0 4rem;
    text-transform: uppercase;
  }

  .start {
    max-width: 20rem;
  }
`;
