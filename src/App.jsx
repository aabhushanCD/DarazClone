import Header from "./component/header/header";
import "./App.css";
import Sidebar from "./component/categories/categories";
import Carousel from "./component/carousel/carousel";
import { Container } from "@mui/material";
import Items from "./component/categories/gridBox";
import "@fontsource/roboto";
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
    </>
  );
}

export default App;
