import Header from "./component/header/header";
import "./App.css";
import Sidebar from "./component/categories/categories";
import Carousel from "./component/carousel/carousel";
import { Container } from "@mui/material";
import Items from "./component/categories/gridBox";
import "@fontsource/roboto";
import Flashsale from "./component/container/flashSale";
import JustForYou from "./component/container/justForYou";
import Footer from "./component/Footer/footer";
function App() {
  return (
    <>
      <Header></Header>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "20rem",
        }}
      >
        <Sidebar></Sidebar>
        <Carousel />
      </Container>
      <Items />
      <Flashsale></Flashsale>
      <JustForYou></JustForYou>
      <Footer />
    </>
  );
}

export default App;
