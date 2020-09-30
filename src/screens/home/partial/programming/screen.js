/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Table, Button, Modal, Spinner, Row, Col } from "react-bootstrap";
import { AiOutlineWallet, AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import { Card, Container, Label } from "../../../../ui";
import ProgrammingModal from "../../../../components/forms/programming";
import Filter from "../../../../components/forms/filterProgramming";

const Programming = (props) => {
  const { programmings, remove, loading } = props;
  const [showModal, closeModal] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    closeModal(false);
  }, [programmings]);

  const handleModal = () => {
    closeModal(!showModal);
  };

  const openModal = (item) => {
    setUser(item);
    handleModal();
  };

  const removeElement = (item) => {
    setUser(item);
    remove(item);
  };

  return (
    <Container m={15}>
      <Row>
        <Col xs={12} md={9}>
          <Card bg="white" p={20}>
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
                <Button
                  backgroundColor="#1D43AD"
                  onClick={() => openModal(null)}
                >
                  Crear
                </Button>
                <Modal show={showModal} onHide={handleModal}>
                  <ProgrammingModal user={user} initialValues={user} />
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
                        <AiOutlineEdit
                          color={loading ? "#cecece" : "#1D43AD"}
                          onClick={() => openModal(item)}
                          size={22}
                        />
                      </td>
                      <td>
                        {loading && user == item ? (
                          <Spinner animation="border" size="sm" />
                        ) : (
                          <AiFillDelete
                            color="#1D43AD"
                            onClick={() => removeElement(item)}
                            size={22}
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Container>
          </Card>
        </Col>
        <Col xs={6} md={3}>
          <Filter />
        </Col>
      </Row>
    </Container>
  );
};

Programming.propTypes = {
  programmings: PropTypes.array,
  loading: PropTypes.bool,
  remove: PropTypes.func.isRequired,
};

Programming.defaultProps = {
  programmings: [],
  loading: false,
};

export default Programming;
