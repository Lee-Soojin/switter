import styled from "styled-components";

export const HomePageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0;
  width: 100vw;
  min-width: 100vw;
  height: 100vh;
  min-height: 100vh;
  background-color: #f6f6f6;
  > div {
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: 100%;
    gap: 20px;
  }
`;
