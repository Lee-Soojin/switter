import styled from "styled-components";

export const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 70px;
  padding: 0 40px;
  position: fixed;
  top: 0;
  left: 0%;
  gap: 20px;
  background-color: #ffffff;

  > button {
    justify-content: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin-left: auto;
  }

  > a,
  > button {
    display: flex;
    align-items: center;
    height: 100%;
    text-decoration: none;
    font-family: var(--main-font-family), sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    color: #212121;
  }

  > a:nth-child(1) {
    color: #eb4463;
    font-size: 2rem;
    letter-spacing: 0.1rem;
  }

  > a:last-child {
    margin-left: auto;
  }
`;
