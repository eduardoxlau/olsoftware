import React from "react";
import { Container, Card, Label } from "../../ui";
import bgLogin from "../../assets/images/loginBackGround.jpg";
import Login from "../../components/forms/login";
import Loading from "../../components/loading";

const App = (props) => {
  const { loading } = props;

  return (
    <Container width={1} height="100%">
      {loading ? <Loading /> : null}
      <Container
        position="absolute"
        zIndex="1"
        left="30%"
        top="60%"
        textAlign="center"
      >
        <Label fontSize={22} color="white">
          Aplicacion OLSoftware
        </Label>
        <Label fontSize={14} color="white">
          Prueba Tecnica
        </Label>
      </Container>

      <Container
        width="80%"
        height="90%"
        bg="#4f4703"
        borderBottomLeftRadius="90% 140%"
        borderBottomRightRadius="100% 196%"
      >
        <Container
          borderBottomLeftRadius="90% 140%"
          borderBottomRightRadius="100% 196%"
          opacity="0.7"
          width={1}
          height="100%"
          backgroundImage={`url(${bgLogin})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="repeat-x"
        >
          {" "}
        </Container>
      </Container>
      <Card
        width={360}
        height={330}
        position="absolute"
        top="30%"
        right="100px"
        borderRadius={40}
        boxShadow="4px 9px 24px 0px rgba(0,0,0,0.27)"
      >
        <Login />
      </Card>
      <Container textAlign="center" mt={20}>
        Created by Rafael sanchez
      </Container>
    </Container>
  );
};

export default App;
