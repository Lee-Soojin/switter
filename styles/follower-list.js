import styled from "styled-components";

export const FollowerListBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  border-radius: 20px;
  background-color: #f1f1f1;
  padding: 12px 16px;
  overflow: hidden;
  > p {
    font-size: 20px;
    color: #0f1419;
    font-weight: 700;
  }
  > ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0;
    margin: 0;
    flex: 1;
    height: auto;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #d9d9d9;
  }
`;

export const FollowerListItemBox = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    > img {
      border-radius: 50%;
    }
    > p {
      font-size: 15px;
      font-weight: 700;
      white-space: nowrap;
      color: #000000;
    }
  }
  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 0 16px;
    height: 36px;
    border: none;
    cursor: pointer;
    margin-left: auto;
    border-radius: 20px;
    background-color: ${({ $isInFavorites }) =>
      $isInFavorites ? "#EB4463" : "#000000"};
    font-size: 14px;
    font-weight: 700;
    line-height: 150%;
    color: white;
  }
`;
