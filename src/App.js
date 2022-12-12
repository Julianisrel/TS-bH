// import { Link, Routes, Route } from "react-router-dom";
import { productData, productDataTwo } from './components/Products/data';

import { Container } from "./components/styled/Container.styled";
import {Products , Footer, Card, Header, Nav, Hero } from "./components";
import GlobalStyles from "./components/styled/Global";

import content from "./content";

function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      {/* <nav>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">products</Link>
        </div>
      </nav> */}
      <Header />

      <Hero />
      <Container>
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
        <Footer />
      </Container>
    </>
  );
}
export default App;

// <Link to="/">Home</Link>
// <Link to="/movies">Movies</Link>
// <nav>
//   <Route exact path="/" component={Home} />
//   <Route exact path="/movies/" component={MovieList} />
//   <Route path="/movies/:id" Movies={Movie} />
