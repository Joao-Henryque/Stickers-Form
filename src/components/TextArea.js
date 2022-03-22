import styled from 'styled-components';

export const TextArea = styled.textarea`
  font-size: 14px;
  outline: none;
  border: 1px solid #CED4DA;
  border-radius: 10px;
  padding: 10px;
  color: ${(({ theme }) => theme.colors.text.main)};
  letter-spacing: 1px;

  &::placeholder {
    font-size: 14px;
  }
`;
