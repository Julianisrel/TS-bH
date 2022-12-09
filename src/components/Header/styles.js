import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px, 0;
  /* border: 5px red solid; */
`;
// const Nav = styled.nav`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 40px;
//   @media (max-width: ${({ theme }) => theme.moblie}) {
//     flex-direction: column;
//   }
// `;

const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`;

const Image = styled.img`
  width: 375px;
  margin-left: 40px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`;

const Menu = styled.menu`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  transition: all 200ms ease;
  :hover {
    color: ${({ theme }) => theme.colors.header};
  }
`;

export { StyledHeader, Logo, Image, Menu };
