import styled from "styled-components";

export const LoginPageLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 32px;
  padding: 100px 0 70px 0;
  width: 100vw;
  min-width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background-color: #f6f6f6;
`;

export const LoginFormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  > div:nth-child(1) {
    display: flex;
    align-items: center;
    width: 100%;
    height: fit-content;
    gap: 8px;
    > button {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: none;
      background-color: #ffffff;
      border-radius: 8px 8px 0 0;
      padding: 14px 40px;
      font-family: var(--main-font-family), sans-serif;
      font-weight: 700;
      font-size: 1.2rem;
      color: #212121;
    }
    > button:nth-child(1) {
      color: ${(props) => (props.mode === "log in" ? "#212121" : "gray")};
      background-color: ${(props) =>
        props.mode === "log in" ? "#ffffff" : "#f1f1f1"};
    }
    > button:nth-child(2) {
      color: ${(props) => (props.mode === "sign up" ? "#212121" : "gray")};
      background-color: ${(props) =>
        props.mode === "sign up" ? "#ffffff" : "#f1f1f1"};
    }
  }
  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    width: 600px;
    height: fit-content;
    border-radius: 0 10px 10px 10px;
    padding: 40px 60px;
    gap: 40px;
    > p {
      text-transform: uppercase;
      font-family: var(--main-font-family), sans-serif;
      font-weight: 700;
      font-size: 2rem;
      color: #212121;
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      gap: 20px;
      > input {
        display: flex;
        align-items: center;
        padding: 0 12px;
        width: 100%;
        height: 54px;
        min-height: 48px;
        border-radius: 8px;
        border: none;
        background-color: #f1f1f1;
        font-family: var(--main-font-family), sans-serif;
        font-weight: 500;
        font-size: 1.2rem;
        color: #212121;
        &:focus {
          background-color: #ffffff;
          border: 1px solid lightgray;
        }
        &::placeholder {
          font-family: var(--main-font-family), sans-serif;
          font-weight: 500;
          font-size: 1.2rem;
          color: #a8a8a8;
        }
      }
    }
    > button {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: 100%;
      height: 54px;
      margin-top: 32px;
      border-radius: 8px;
      border: none;
      background-color: #eb4463;
      font-family: var(--main-font-family), sans-serif;
      font-weight: 500;
      font-size: 1.2rem;
      color: #ffffff;
    }
  }
`;

