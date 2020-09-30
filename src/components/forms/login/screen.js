import React, { useState } from "react";
import { Spinner, Alert } from "react-bootstrap";
import { required } from "redux-form-validators";
import { useHistory } from "react-router-dom";

import {
  Input,
  Container,
  Card,
  Label,
  Button,
  SvgPerson,
  SvgKey,
} from "../../../ui";

const Login = (props) => {
  const { handleSubmit, submitting, invalid } = props;
  const history = useHistory();
  const [error, isError] = useState(false);

  const handle = (data) => {
    handleSubmit(data)
      .then(() => history.push("/home"))
      .catch(() => {
        isError(true);
      });
  };
  return (
    <Container p={50}>
      <Label textAlign="center" pb={25} fontSize={22}>
        Inicio de sesion
      </Label>
      <form onSubmit={handle}>
        <Card boxShadow="7px 7px 5px -5px rgba(0,0,0,0.11)">
          <Container position="relative">
            <SvgPerson position="absolute" right={10} top={10} />
            <Input name="user" validate={[required()]} placeholder="User" />
          </Container>
          <Container position="relative">
            <SvgKey position="absolute" right={10} top={10} />
            <Input
              name="password"
              validate={[required()]}
              placeholder="Password"
              type="password"
            />
          </Container>
        </Card>
        {error && (
          <Alert onClose={() => isError(false)} dismissible variant="danger">
            <Label fontSize={14}>Credenciales Incorrectos</Label>
          </Alert>
        )}
        <Button
          className="btn btn-primary btn-lg btn-block"
          mt={20}
          fontSize={14}
          type="submit"
          disabled={submitting || invalid}
        >
          {submitting ? (
            <Spinner animation="border" size="sm" />
          ) : (
            "Iniciar Sesion"
          )}
        </Button>
      </form>
    </Container>
  );
};

export default Login;
