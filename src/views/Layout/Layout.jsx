import AppBar from "components/AppBar/AppBar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Main, Footer } from "./Layout.styled";
import { Container, Grid } from "@chakra-ui/react";
export default function Layout() {
return(
  <Grid templateRows={'59px 1fr 59px'} h={'100vh'}>
    <AppBar/>
    <Main>
      <Container bg={"#f3e6b5b3"} h={'100%'}>
        <Suspense fallback={"almost done..."}>
          <Outlet/>
        </Suspense>
      </Container>
    </Main>
    <Footer>
      <Container>
        <p>Developed by Irchik512</p> 
      </Container>
    </Footer>
  </Grid>
)
};
