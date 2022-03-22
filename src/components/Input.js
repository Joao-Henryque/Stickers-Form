import styled from 'styled-components';

export const CheckBox = styled.input`
  cursor: pointer;
  width: 15px;
  height: 15px;
  margin-right: 4px;

  & + label {
    cursor: pointer;
    letter-spacing: 1px;
  }
`;

export const InputAddMinus = styled.input`
  width: 100px;
  height: 30px;
  margin: 0 8px;
  background: ${(({ theme }) => theme.colors.gray.light)};
  border-radius: 3px;
  font-size: 16px;
  font-weight: 700;
  color: ${(({ theme }) => theme.colors.text.main)};
  text-align: center;
`;
