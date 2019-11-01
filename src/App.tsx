import React, {Component} from "react";
import {Container, Navbar, NavbarBrand} from "react-bootstrap";
import "./App.sass";

class App extends Component {
  render() {
    return (
      <div className={"app"}>
        <Navbar bg={"dark"} variant={"dark"} expand={"lg"}>
          <NavbarBrand href={"/networks/index.html"}>Сети и телекомуникации</NavbarBrand>
        </Navbar>

        <Container as={"main"}>

        </Container>
        <Container fluid className={"text-center bg-dark text-light"} as={"footer"}>
          <Container className={"py-3"}>
            <small>Copyright &copy; Михаил Кочетков ИУ5-51</small>
          </Container>
        </Container>
      </div>
    );
  }
}

export default App;
