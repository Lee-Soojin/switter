import styled from "styled-components";

export const StartPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  gap: 40px;
  background-image: url("/images/gradient_bg.jpg");
  background-size: cover;
  > h1 {
    margin: 0;
    font-size: 80px;
    line-height: 150%;
    white-space: pre;
    text-align: center;
    font-weight: 700;
  }
  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 40px;
    font-size: 48px;
    font-weight: 700;
    line-height: 100%;
    color: #fff;
    text-decoration: none;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 2px solid rgba(255, 255, 255, 0.3);
    transition: all ease 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
