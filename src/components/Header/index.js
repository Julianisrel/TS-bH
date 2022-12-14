import { Fragment, useState } from "react";

import { HeaderConatiner, Menu, MobileMenuContainer } from "./styles";

const Header = () => {
  return (
    <Fragment>
      <HeaderConatiner>
        <Menu />
        <div>Login</div>
      </HeaderConatiner>
      <MobileMenu hide={hideMobileMenu} display={displayMobileMenu} />
    </Fragment>
  );
};

const MobileMenu = (_a) => {
  const display = _a.display,
    hide = _a.hide;
  const user = useUserContext().user;
  const logout = useLogout();
  return (
    <MobileMenuContainer display={display} onClick={hide}>
      {user && <div>Hello, {user.name}</div>}
      {user && (
        <MobileMenuItem to={routing.dashboard}>Dashboard</MobileMenuItem>
      )}
      <MobileMenuItem to={routing.home}>Home</MobileMenuItem>
      {user ? (
        <Button onClick={logout}>Logout</Button>
      ) : (
        <MobileMenuItem to={routing.login}>Login</MobileMenuItem>
      )}
    </MobileMenuContainer>
  );
};

export default Header;
