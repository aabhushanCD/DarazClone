import Header from "./component/header/header";
import "./App.css";
import Sidebar from "./component/categories/categories";
import Carousel from "./component/carousel/carousel";
import { Container } from "@mui/material";
function App() {
  return (
    <>
      <Header></Header>
      <Container sx={{display:"flex",justifyContent:"space-between"}}>
        <Sidebar></Sidebar>
        <Carousel />
      </Container>
    </>
  );
}

export default App;
