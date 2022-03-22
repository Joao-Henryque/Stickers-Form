import styled from 'styled-components';

export const OverLay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0, 0, 0.6);
  backdrop-filter: blur(3px);
  display: ${(({ showModal }) => (showModal ? 'flex' : 'none'))};
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background: #FFFFFF;
  border-radius: 10px;
  padding: 25px;
  max-width: 450px;
  width: 100%;

  h1 {
    color: ${(({ theme }) => theme.colors.text.main)};
    font-size: 18px;
    letter-spacing: 2px;
    margin-bottom: 24px;
    text-align: center;

    span {
      color: #70E000;
      text-transform: uppercase;
    }
  }

  .order-data-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;

    strong {
      letter-spacing: 1px;
      margin-bottom: 4px;
      color: ${(({ theme }) => theme.colors.text.main)};
    }

    ul {
      li {
        background: ${(({ theme }) => theme.colors.primary.main)};
        display: inline-block;
        color: ${(({ theme }) => theme.colors.text.light)};
        padding: 2px 6px;
        border-radius: 3px;
        letter-spacing: 1px;

        &:nth-child(2) {
          margin: 0 8px;
        }
      }
    }

    span {
      font-size: 18px;
      font-weight: 700;
      color: ${(({ theme }) => theme.colors.text.main)};
      letter-spacing: 2px;
    }

    p {
      letter-spacing: 1px;
      color: ${(({ theme }) => theme.colors.text.main)};
    }
  }
`;

export const Footer = styled.footer`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;

  button {
    width: 130px;
    height: 35px;
    border-radius: 3px;
    background: transparent;
    border: 1px solid ${(({ theme }) => theme.colors.gray.dark)};
    color: ${(({ theme }) => theme.colors.text.main)};
    letter-spacing: 2px;
    transition: border-color 0.3s ease-in;
    font-weight: 700;
    color: ${(({ theme }) => theme.colors.text.main)};

    &:hover {
      border-color: ${(({ theme }) => theme.colors.text.light)};
    }
  }
`;
