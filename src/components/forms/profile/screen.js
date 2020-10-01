import React, { useState } from "react";
import { Modal, Spinner, Alert } from "react-bootstrap";
import { required } from "redux-form-validators";
import PropTypes from "prop-types";
import { FiUser } from "react-icons/fi";
import { CgUnavailable } from "react-icons/cg";
import { AiFillBulb, AiFillAppstore } from "react-icons/ai";
import { Input, Container, Button, Label } from "../../../ui";

const Programming = (props) => {
  const { handleSubmit, submitting, invalid } = props;
  const [error, isError] = useState(false);

  return (
    <form onSubmit={handleSubmit}>
      <Modal.Header closeButton>
        <Modal.Title>Gestion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Container position="relative" mb={10}>
            <Container position="absolute" right={20} top="5px">
              <AiFillBulb />
            </Container>
            <Input
              name="campo1"
              validate={[required()]}
              placeholder="Campo 1"
            />
          </Container>
          <Container position="relative" mb={10}>
            <Container position="absolute" right={20} top="5px">
              <AiFillAppstore />
            </Container>
            <Input
              name="campo2"
              validate={[required()]}
              placeholder="Campo 2"
            />
          </Container>
          <Container position="relative" mb={10}>
            <Container position="absolute" right={20} top="5px">
              <FiUser />
            </Container>
            <Input
              name="campo3"
              validate={[required()]}
              placeholder="Campo 3"
            />
          </Container>
          <Container position="relative" mb={10}>
            <Container position="absolute" right={20} top="5px">
              <CgUnavailable />
            </Container>
            <Input
              name="campo4"
              validate={[required()]}
              placeholder="Campo 4"
            />
          </Container>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        {error && (
          <Alert onClose={() => isError(false)} dismissible variant="danger">
            <Label fontSize={14}>
              Ha ocurrido un error, intente nuevamente
            </Label>
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

Programming.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
};

export default Programming;
