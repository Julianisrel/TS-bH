import React from "react";
import { BodyContainer } from "./styles";

const Body: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <BodyContainer>{children}</BodyContainer>;
};

export default Body;
