import styled from "styled-components";

export const TweetFormBox = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 30px 32px;
  width: 540px;
  height: 220px;
  gap: 16px;
  border-radius: 20px;
  background-color: #ffffff;
  > div:nth-child(1) {
    display: flex;
    justify-content: flex-start;
    height: 100%;
    > img {
      border-radius: 50%;
      object-fit: cover;
    }
  }
  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: auto;
    height: 100%;
    > form {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      gap: 10px;
      > textarea {
        display: flex;
        width: 100%;
        height: 100%;
        border: none;
        text-align: start;
        resize: none;
        color: #212121;
        font-size: 18px;
        font-weight: 500;
        line-height: 120%;
        &::placeholder {
          color: #aaaaaa;
          font-size: 18px;
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
  }
`;
