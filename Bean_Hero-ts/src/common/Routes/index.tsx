import { Route, Routes as HRoutes } from "react-router-dom";

const Routes = () => {
  return (
    <HRoutes>
      <Route path="/" element={<Home />} />
    </HRoutes>
  );
};

export default Routes;
