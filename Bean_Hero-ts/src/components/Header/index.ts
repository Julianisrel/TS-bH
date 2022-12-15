import { useState } from "react";


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