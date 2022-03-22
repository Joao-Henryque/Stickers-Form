import styled from 'styled-components';

export const ButtonAddMinus = styled.button`
  background: transparent;
  background: ${(({ theme }) => theme.colors.primary.gradient)};
  color: ${(({ theme }) => theme.colors.text.light)};
  font-size: 22px;
  width: 40px;
  height: 30px;
  border-radius: 3px;
`;
