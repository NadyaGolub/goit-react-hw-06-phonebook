import styled from 'styled-components';

export const Item = styled.li`
  min-width: 300px;
  display: flex;
  gap: 20px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ButtonDel = styled.button`
  font-weight: 400;

  line-height: 1.2;
  text-align: center;
  cursor: pointer;
  margin-left: auto;
`;
