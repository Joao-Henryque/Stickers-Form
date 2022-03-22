import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .checkBox-container {
    display: flex;
    align-items: center;

    &:nth-child(4) {
      margin-bottom: 24px;
    }
  }

  h1 {
    color: ${(({ theme }) => theme.colors.text.main)};
    font-size: 16px;
    letter-spacing: 2px;
    margin-bottom: 8px;
  }

  .stickerQuantity-container {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
  }
`;
