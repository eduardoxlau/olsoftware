import React, { useState } from "react";
import { Spinner, Alert } from "react-bootstrap";
import PropTypes from "prop-types";
import { FiUser, FiSearch } from "react-icons/fi";
import { CgUnavailable } from "react-icons/cg";
import { Input, Container, Button, Label, Card } from "../../../ui";

const Programming = (props) => {
  const { handleSubmit, submitting } = props;
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
            <Input name="dateStart" type="date" placeholder="Fecha inicio" />
          </Container>
          <Container position="relative" mb={10}>
            <Input type="date" name="dateEnd" placeholder="Fecha fin" />
          </Container>
          <Container position="relative" mb={10}>
            <Container position="absolute" right={20} top="5px">
              <FiUser />
            </Container>
            <Input name="user" placeholder="Usuario" />
          </Container>
          <Container position="relative" mb={10}>
            <Container position="absolute" right={20} top="5px">
              <CgUnavailable />
            </Container>
            <Input name="isActive" placeholder="Activo" />
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
            className="btn btn-success btn-lg btn-block"
            mt={20}
            fontSize={14}
            type="submit"
            disabled={submitting}
          >
            {submitting ? <Spinner animation="border" size="sm" /> : "Filtrar"}
          </Button>
        </Container>
      </form>
    </Card>
  );
};

Programming.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default Programming;
