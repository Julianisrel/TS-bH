import { routing } from "common/config";
import { SplashContainer } from "common";

import { Route, Routes as DRoutes } from "react-router-dom";

const Routes = () => {
  return (
    <DRoutes>
      <Route path="*" element={<Home />} />
    </DRoutes>
  );
};

export default Routes;

//eed to set thios to connect to the navBar component
