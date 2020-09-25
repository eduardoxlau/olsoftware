import React from "react";
import { Spinner } from "react-bootstrap";
import { Container, Label } from "../../ui";

const Loading = () => {
  return (
    <Container position="absolute" width={1} height="100%">
      <Container position="absolute" zIndex={2} width="100%" height="100%">
        <Container
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          width="100%"
          height="100%"
        >
          <Label fontSize="2em" color="white">
            Estamos preparando todo para tí
          </Label>
          <Container display="flex" flexDirection="row">
            <Container padding={10}>
              <Spinner animation="grow" variant="light" />
            </Container>
            <Container padding={10}>
              <Spinner animation="grow" variant="light" />
            </Container>
            <Container padding={10}>
              <Spinner animation="grow" variant="light" />
            </Container>
          </Container>
        </Container>
      </Container>
      <Container
        position="absolute"
        bg="black"
        width={1}
        height="100%"
        opacity={0.8}
        zIndex={1}
      />
    </Container>
  );
};

export default Loading;
