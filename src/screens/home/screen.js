/* eslint-disable react/prop-types */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { IoMdExit } from "react-icons/io";
import Navbar from "../../components/navbar";
import { Container, Label, Card } from "../../ui";
import Programming from "./partial/programming";
import Gestion from "./partial/gestion";
import Profile from "./partial/profile";
import Role from "./partial/role";
import User from "./partial/user";

const Home = (props) => {
  const { logout, user } = props;
  const [isHide, setHide] = useState(false);

  const openSidebar = () => {
    setHide(!isHide);
  };

  return (
    <Router>
      <Container display="flex" bg="#F5F5F5">
        <Container backgroundImage="linear-gradient(#41AAED, #2456B9)">
          <Navbar hide={isHide} />
        </Container>
        <Container width="100%">
          <Card
            justifyContent="space-between"
            bg="white"
            height={70}
            width="100%"
            display="flex"
            flexDirection="row"
            p={30}
          >
            <Container height="100%" display="flex" alignItems="center">
              <FiMenu size={30} onClick={openSidebar} />
              <Label ml={10} fontSize={18}>
                Prueba Frontend
              </Label>
            </Container>
            <Container height="100%" display="flex" alignItems="center">
              <FaUserCircle size={30} />
              <Label ml={20} mr={20} fontSize={16}>
                {user.name}
              </Label>
              <IoMdExit onClick={logout} size={30} />
            </Container>
          </Card>
          <Route exact path="/" component={User} />
          <Route exact path="/olsoftware" component={User} />
          <Route path="/programacion" component={Programming} />
          <Route path="/gestion" component={Gestion} />
          <Route path="/perfiles" component={Profile} />
          <Route path="/roles" component={Role} />
          <Route path="/usuarios" component={User} />
        </Container>
      </Container>
    </Router>
  );
};

Home.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Home;
