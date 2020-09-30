import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import Navbar from "../../components/navbar";
import { Container, Label, Card } from "../../ui";
import Programming from "./partial/programming";

const Home = () => {
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
            justifyContent="center"
            bg="white"
            height={70}
            width="100%"
            display="flex"
            p={30}
          >
            <Container height="100%" display="flex" alignItems="center">
              <FiMenu size={30} onClick={openSidebar} />
              <Label ml={20} fontSize={18}>
                Prueba Frontend
              </Label>
            </Container>
          </Card>
          <Route exact path="/home" component={Programming} />
          <Route path="/topics" component={Programming} />
        </Container>
      </Container>
    </Router>
  );
};
export default Home;
