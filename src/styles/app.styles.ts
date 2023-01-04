import styled from 'styled-components';

export const LayoutApp = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: ${({ theme }) => theme.foregroundColorUp};
  display: flex;
  justify-content: center;
`;
