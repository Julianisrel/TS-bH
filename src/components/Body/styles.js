import styled from "styled-components";

const BodyContainer = styled.div`
  width: 100vw;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};
`;
export { BodyContainer };
