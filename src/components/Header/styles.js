import styled from "styled-components";
import { AiOutlineMenu } from 'react-icons/ai';
// import { IoPersonOutline } from 'react-icons/io';

// import { NavLink } from 'react-router-dom';

const Header = styled.nav`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndexes.white};
  top: 0;
  left: 0;
  width: 100vw;
  height: ${({ theme }) => theme.headerHeight};
  background: rgba(96, 103, 84, 0.46);
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
`;

const Menu = styled(AiOutlineMenu)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.red};
  width: 2rem;
  height: 2rem;
  transition: all 200ms ease;
  :hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;

// const Login = styled(IoPersonOutline)`
//   cursor: pointer;
//   color: ${({ theme }) => theme.colors.green};
//   width: 2rem;
//   height: 2rem;
//   transition: all 200ms ease;
//   :hover {
//     color: ${({ theme }) => theme.colors.green};
//   }
// `;
// const MobileMenuContainer = styled.div<{ display: boolean }>`
//   position: fixed;
//   z-index: ${({ theme }) => theme.zIndexes.header};
//   left: ${({ display }) => (display ? '0' : '-5000px')};
//   transition: all 500ms ease;
//   top: ${({ theme }) => theme.headerHeight};
//   color: ${({ theme }) => theme.colors.primary};
//   background: rgba(0, 0, 0, 0.7);
//   width: 100%;
//   height: calc(100vh - ${({ theme }) => theme.headerHeight});
// `;

// const MobileMenuItem = styled(NavLink)`
//   text-decoration: none;
//   display: block;
//   color: ${({ theme }) => theme.colors.primary};
//   padding: 1rem;
//   border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
//   cursor: pointer;
//   transition: all 200ms ease;
//   :hover {
//     font-weight: bold;
//     background: ${({ theme }) => theme.colors.primary};
//     color: ${({ theme }) => theme.colors.black};
//   }
// `;

export { Header, Menu}