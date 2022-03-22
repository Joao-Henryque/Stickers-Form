import styled, { keyframes } from 'styled-components';

const spinnerLoad = keyframes`
to {
  transform: rotate(360deg);
}
`;

export const Container = styled.footer`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    position: relative;
    width: 130px;
    height: 35px;
    background: ${(({ theme }) => theme.colors.primary.gradient)};
    color: ${(({ theme }) => theme.colors.text.light)};
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 2px;
    border-radius: 3px;
    transition: opacity 0.3s ease-in;

    &:hover {
      opacity: 0.9;
    }

    &:disabled {
      background: ${(({ theme }) => theme.colors.gray.main)};
      color: ${(({ theme }) => theme.colors.gray.dark)};
      transform: none;
      cursor: default;
    }

    .loader-icon {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      animation: ${spinnerLoad} 1.5s linear infinite;
    }
  }
`;
