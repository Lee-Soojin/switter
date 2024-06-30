import styled from "styled-components";

export const HomePageLayout = styled.div`
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
  > div.home__mainPanel {
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: 100%;
    gap: 20px;
  }
  > div.home__menuPanel,
  > div.home__followerPanel {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 100%;
    gap: 20px;
  }
`;
