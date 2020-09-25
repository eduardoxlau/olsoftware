import React from "react";
import { Container, Card } from "../../ui";
import bgLogin from "../../assets/images/loginBackGround.jpg";
import Login from "../../components/forms/login";
import Loading from "../../components/loading";

const App = (props) => {
  const { loading } = props;

  return (
    <Container width={1} height="100%">
      {loading ? <Loading /> : null}
      <Container
        width="80%"
        height="90%"
        bg="#b5af4c"
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
    </Container>
  );
};

export default App;
