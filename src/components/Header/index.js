import { Fragment, useState } from "react";

import { HeaderConatiner, Menu, MobileMenuContainer } from "./styles";

const Header = () => {
  const [displayMoblieMenu, setdisplayMoblieMenu] = useState(false)
  const hideMobileMenu = () => setDisplayMobileMenu(false);


  return (
    <Fragment>
      <HeaderConatiner>
        <Menu />
        <div>Login</div>
      </HeaderConatiner>
      {/* <MobileMenu hide={hideMobileMenu} display={displayMobileMenu} /> */}
    </Fragment>
  );
};


export default Header;
// 47:00