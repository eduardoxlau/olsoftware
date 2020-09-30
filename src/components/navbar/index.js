import React from "react";
import { Nav } from "react-bootstrap";
import { BsCircleFill } from "react-icons/bs";
import PropTypes from "prop-types";
import { Sidebar, Label, Container } from "../../ui";
import { MenuSidebar } from "../../utils/menu";

const Navbar = ({ hide }) => {
  return (
    <>
      <Sidebar hide={hide}>
        <Container
          display="flex"
          alignItems="center"
          paddingBottom={20}
          marginBottom={20}
          borderBottom="2px white solid"
        >
          <BsCircleFill size={40} color="white" />
          <Label
            marginLeft={20}
            color="white"
            display={hide ? "none" : "inline-block"}
            fontSize={22}
          >
            OLSoftware
          </Label>
        </Container>

        {MenuSidebar.map((item) => {
          return (
            <Container
              display="flex"
              key={item.id}
              alignItems="center"
              marginLeft={-10}
            >
              <Nav.Item>
                <Nav.Link href="/home">
                  {item.icon}
                  <Label
                    marginLeft={25}
                    display={hide ? "none" : "inline-block"}
                    color="white"
                  >
                    {item.title}
                  </Label>
                </Nav.Link>
              </Nav.Item>
            </Container>
          );
        })}
      </Sidebar>
    </>
  );
};

Navbar.propTypes = {
  hide: PropTypes.bool,
};

Navbar.defaultProps = {
  hide: false,
};
export default Navbar;
