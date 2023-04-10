import { Container } from "@chakra-ui/react";
import AppBar from "components/AppBar/AppBar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
return(
  <Container>
    <AppBar/>
    <main>
      <Suspense fallback={"almost done..."}>
        <Outlet/>
      </Suspense>
    </main>
    <footer>
      <p>
        Develop whith LOVE
      </p>
    </footer>
  </Container>
)
};
