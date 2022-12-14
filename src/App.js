import { Container } from "./components/styled/Container.styled";
import { Products, Home, Footer, Card, Header, Hero } from "./components";
import GlobalStyles from "./components/styled/Global";

import content from "./content";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Home />
      {/* <Hero /> */}

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
