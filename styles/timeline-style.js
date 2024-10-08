import styled from "styled-components";

export const TimelineBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 500px;
  border-radius: 20px;
  background-color: #ffffff;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: lightgray transparent;
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
    p.tweetItem__date {
      display: ${({ $isOwner }) => $isOwner && "none"};
    }
    div.tweetItem__actions {
      display: ${({ $isOwner }) => $isOwner && "flex"};
    }
  }
  > a:nth-child(1) {
    > img {
      border-radius: 50%;
      object-fit: cover;
    }
  }

  > form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: auto;
    flex: 1;
    gap: 12px;
    > textarea {
      width: 100%;
      height: auto;
      border: none;
      text-align: start;
      resize: none;
      color: #212121;
      font-size: 16px;
      font-weight: 500;
      line-height: 120%;
      padding: 8px;
      &::placeholder {
        color: #aaaaaa;
        font-size: 16px;
        font-weight: 500;
        line-height: 120%;
      }
    }
    > button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: auto;
      height: 36px;
      min-height: 36px;
      padding: 0 16px;
      border: none;
      cursor: pointer;
      background-color: #f46dfe;
      border-radius: 20px;
      font-size: 16px;
      font-weight: 700;
      color: #ffffff;
    }
  }
  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: auto;
    height: fit-content;
    position: relative;
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
    > p:nth-child(3) {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }

  p.tweetItem__date {
    display: inline;
    align-items: center;
    width: fit-content;
    height: fit-content;
    margin: 0;
    font-size: 15px;
    font-weight: 700;
    color: #a9a9a9;
  }

  div.tweetItem__actions {
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
