import styled from "styled-components";

export const TimelineBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 540px;
  height: 500px;
  border-radius: 20px;
  background-color: #ffffff;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: thin;
`;

export const TweetItemBox = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 12px 16px;
  width: 100%;
  height: fit-content;
  gap: 8px;
  border-bottom: 1px solid #d3d3d3;
  background-color: inherit;
  cursor: pointer;
  &:hover {
    > div:nth-child(3) {
      display: flex;
    }
  }
  > div:nth-child(1) {
    > img {
      border-radius: 50%;
    }
  }
  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: auto;
    height: fit-content;
    > p {
      margin: 0;
    }
    > p:nth-child(1) {
      font-size: 15px;
      font-weight: 700;
      line-height: 150%;
    }
    > p:nth-child(2) {
      font-size: 15px;
      font-weight: 500;
      line-height: 150%;
    }
  }
  > div:nth-child(3) {
    display: none;
    align-items: center;
    width: fit-content;
    height: fit-content;
    > button {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: 500;
      white-space: nowrap;
      padding: 0;
      padding: 0 12px;
      border: none;
      cursor: pointer;
      background-color: transparent;
    }
    > button:nth-child(1) {
      position: relative;
      &::after {
        content: "";
        display: flex;
        width: 1px;
        height: 14px;
        background-color: lightgray;
        position: absolute;
        top: 0;
        right: 0;
      }
    }
    > button:nth-child(2) {
      color: red;
    }
  }
`;
