import React, { useState } from "react";
import { Spinner, Alert } from "react-bootstrap";
import PropTypes from "prop-types";
import { FiUser, FiSearch } from "react-icons/fi";
import { CgUnavailable } from "react-icons/cg";
import { AiFillBulb, AiFillAppstore } from "react-icons/ai";
import { Input, Container, Button, Label, Card } from "../../../ui";

const Programming = (props) => {
  const { handleSubmit, submitting, reset } = props;
  const [error, isError] = useState(false);

  return (
    <Card bg="white" p={20}>
      <Container display="flex" alignItems="center" mb={10}>
        <FiSearch size={15} color="#2046AE" />
        <Label ml={10} color="#2046AE" fontSize={15}>
          Filtrar Busqueda
        </Label>
      </Container>
      <form onSubmit={handleSubmit}>
        <Container>
          <Container position="relative" mb={10}>
            <Container position="absolute" right={20} top="5px">
              <AiFillBulb />
            </Container>
            <Input name="campo1" placeholder="Campo 1" />
          </Container>
          <Container position="relative" mb={10}>
            <Container position="absolute" right={20} top="5px">
              <AiFillAppstore />
            </Container>
            <Input name="campo2" placeholder="Campo 2" />
          </Container>
          <Container position="relative" mb={10}>
            <Container position="absolute" right={20} top="5px">
              <FiUser />
            </Container>
            <Input name="campo3" placeholder="Campo 3" />
          </Container>
          <Container position="relative" mb={10}>
            <Container position="absolute" right={20} top="5px">
              <CgUnavailable />
            </Container>
            <Input name="campo4" placeholder="Campo 4" />
          </Container>
        </Container>
        <Container>
          {error && (
            <Alert onClose={() => isError(false)} dismissible variant="danger">
              <Label fontSize={14}>
                Ha ocurrido un error intente nuevamente
              </Label>
            </Alert>
          )}
          <Button
            variant="primary"
            mt={20}
            mr={10}
            fontSize={14}
            type="submit"
            disabled={submitting}
          >
            {submitting ? <Spinner animation="border" size="sm" /> : "Filtrar"}
          </Button>

          <Button
            variant="outline-success"
            mt={20}
            fontSize={14}
            onClick={reset}
          >
            Limpiar
          </Button>
        </Container>
      </form>
    </Card>
  );
};

Programming.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default Programming;
