import { BrowserRouter as Routes, Route, Link } from "react-router-dom";
import Products from "../Products";
import { Nav } from "./styles";
const Home = () => {
  return (
    <Nav>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/">Products</Link>
      </nav>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/Products" component={ />
      </Routes>
    </Nav>
  );
};

export default Home;
