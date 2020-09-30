import React, { useState } from "react";
import { Modal, Spinner, Alert } from "react-bootstrap";
import { required } from "redux-form-validators";
import { FiUser } from "react-icons/fi";
import { CgUnavailable } from "react-icons/cg";
import { Input, Container, Button, Label } from "../../../ui";

const Programming = (props) => {
  const { handleSubmit, submitting, invalid } = props;
  const [error, isError] = useState(false);

  return (
    <form onSubmit={handleSubmit}>
      <Modal.Header closeButton>
        <Modal.Title>Programacion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Container position="relative" mb={10}>
            <Input
              name="dateStart"
              type="date"
              validate={[required()]}
              placeholder="Fecha inicio"
            />
          </Container>
          <Container position="relative" mb={10}>
            <Input
              type="date"
              name="dateEnd"
              validate={[required()]}
              placeholder="Fecha fin"
            />
          </Container>
          <Container position="relative" mb={10}>
            <Container position="absolute" right={20} top="5px">
              <FiUser />
            </Container>
            <Input name="user" validate={[required()]} placeholder="Usuario" />
          </Container>
          <Container position="relative" mb={10}>
            <Container position="absolute" right={20} top="5px">
              <CgUnavailable />
            </Container>
            <Input
              name="isActive"
              validate={[required()]}
              placeholder="Activo"
            />
          </Container>
        </Container>
      </Modal.Body>
      <Modal.Footer>
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
          {submitting ? <Spinner animation="border" size="sm" /> : "Guardar"}
        </Button>
      </Modal.Footer>
    </form>
  );
};

export default Programming;
