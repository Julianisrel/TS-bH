import styled from "styled-components";
import { Link, Routes, Route } from "react-router-dom";
import Home from "../Home";

const Ul = styled.div`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #547600;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        {" "}
        <Link to="/">Home</Link>
      </li>
      <li>
        {" "}
        <Link to="/About Us">About Us</Link>
      </li>
      <li>
        {" "}
        <Link to="/products">products</Link>
      </li>
      <li>
        {" "}
        <Link to="/Cart">Cart</Link>
      </li>
    </Ul>
  );
};

export default RightNav;
// #3c3c3c
