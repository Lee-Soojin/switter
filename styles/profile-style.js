import styled from "styled-components";

export const ProfilePageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: var(--header-height);
  background-color: #f6f6f6;
  gap: 20px;
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  > div:nth-child(1) {
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    min-height: 60px;
    padding: 0 20px;
    gap: 12px;
    background-color: white;
    border: 1px solid;
    border-color: rgb(239, 243, 244);

    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
      > p:nth-child(1) {
        color: var(--text-black-color);
        font-size: 2rem;
        font-weight: 700;
      }
      > p {
        margin: 0;
        color: var(--text-gray-color);
        font-size: 1.3rem;
        font-weight: 500;
      }
    }
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: fit-content;
    padding: 20px 0;
    gap: 12px;
    background-color: white;
    border-bottom: 1px solid rgb(239, 243, 244);

    > img {
      border-radius: 50%;
      border: 4px solid var(--main-color);
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      > p {
        margin: 0;
      }
      > p:nth-child(1) {
        color: var(--text-black-color);
        font-size: 2rem;
        font-weight: 700;
      }
      > p:nth-child(2) {
        color: var(--text-gray-color);
        font-size: 1.5rem;
        font-weight: 500;
      }
    }
  }
`;
