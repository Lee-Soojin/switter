import styled from "styled-components";

export const StartPageLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  gap: 40px;
  background-image: url("/images/gradient_bg.jpg");
  background-size: cover;
  > h1 {
    margin: 0;
    color: #ffffff;
    font-size: 3.2rem;
    line-height: 150%;
    white-space: pre;
    text-align: left;
    font-weight: 700;
    text-shadow: 2px 2px 4px gray;
  }
  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    transition: all ease 0.2s;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 16px;
    text-decoration: none;
    color: #ffffff;
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 100%;
    &:hover {
      transform: scale(1.1);
    }
  }
`;
