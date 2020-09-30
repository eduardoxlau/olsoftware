/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Table, Button, Modal } from "react-bootstrap";
import { AiOutlineWallet, AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import { Card, Container, Label } from "../../../../ui";
import ProgrammingModal from "../../../../components/forms/programming";

const Programming = (props) => {
  const { programmings } = props;
  const [showModal, closeModal] = useState(false);

  useEffect(() => {
    closeModal(false);
  }, [programmings]);

  const handleModal = () => {
    closeModal(!showModal);
  };

  return (
    <Card m={15} bg="white" p={20}>
      <Container
        display="flex"
        alignItems="center"
        mb={20}
        mt={10}
        justifyContent="space-between"
      >
        <Container display="flex" alignItems="center">
          <AiOutlineWallet size={25} color="#2046AE" />
          <Label ml={10} color="#2046AE" fontSize={18}>
            Programación
          </Label>
        </Container>
        <Container>
          <Button backgroundColor="#1D43AD" onClick={handleModal}>
            Crear
          </Button>
          <Modal show={showModal} onHide={handleModal}>
            <ProgrammingModal />
          </Modal>
        </Container>
      </Container>

      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Fecha Inicio</th>
              <th>Fecha Fin</th>
              <th>Usuario</th>
              <th>Activo</th>
              <th colSpan="2">Acción</th>
            </tr>
          </thead>
          <tbody>
            {programmings.map((item) => (
              <tr>
                <td>{item.dateStart}</td>
                <td>{item.dateEnd}</td>
                <td>{item.user}</td>
                <td>{item.isActive}</td>
                <td>
                  <AiOutlineEdit size={22} />
                </td>
                <td>
                  <AiFillDelete size={22} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Card>
  );
};

Programming.propTypes = {
  programmings: PropTypes.array,
};

Programming.defaultProps = {
  programmings: [],
};

export default Programming;
