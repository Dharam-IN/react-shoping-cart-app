import React from "react";
import {
  Badge,
  Container,
  Dropdown,
  FormControl,
  Navbar,
} from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Dharam</Navbar.Brand>
          <Navbar.Text className="search">
            <FormControl
              style={{ width: 500 }}
              className="m-auto"
              placeholder="Search Products"
            />
          </Navbar.Text>
          <Dropdown alignRight>
            <Dropdown.Toggle style={{ position: "relative" }} variant="success" id="dropdown-basic">
              Cart

              <Badge
                bg="primary"
                style={{ position: "absolute", top: -10, right: -10 }}
              >
                5
              </Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{minWidth: 400, left: "auto", right:"0"}}>
              <span style={{padding: 10}}>Cart is Empty</span>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
