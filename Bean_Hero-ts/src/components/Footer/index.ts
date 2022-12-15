import { StyledFooter } from "./styles";
// import { Flex } from "./re-styles";
const Footer = () => {
  return (
    <StyledFooter>
      {/* <Container> */}
      <img src="./imgaes/white_logo.png" alt="" />
      {/* <Flex> */}
      <ul>
        <li>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </li>
        <li>+1-543-123-4567</li>
        <li>BeanHero@gmail.com.com</li>
      </ul>
      <ul>
        <li>About Us</li>
        <li>What We Do</li>
        <li>FAQ</li>
      </ul>
      <ul>
        <li>Coffee Blogs</li>
        <li>Contact Us</li>
      </ul>
      {/* </Flex> */}
      <p>&copy; 2022 Bean Hero. All rights reserved</p>
      {/* </Container> */}
    </StyledFooter>
  );
};
export default Footer;
