/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Table, Button, Modal, Spinner, Row, Col } from "react-bootstrap";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import { Card, Container, Label } from "../../../../ui";
import ModalSubmit from "../../../../components/forms/user";
import Filter from "../../../../components/forms/filterUser";

const Programming = (props) => {
  const { users, remove, loading, isFilter } = props;
  const [showModal, closeModal] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    closeModal(false);
  }, [users]);

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
                <AiOutlineEdit size={25} color="#2046AE" />
                <Label ml={10} color="#2046AE" fontSize={18}>
                  {isFilter ? "Resultado de la Busqueda..." : "Usuarios"}
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
                  <ModalSubmit user={user} initialValues={user} />
                </Modal>
              </Container>
            </Container>
            <Container>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Identificacion</th>
                    <th>Email</th>
                    <th colSpan="2">Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((item) => (
                    <tr key={item.id}>
                      <td>{item.nombres}</td>
                      <td>{item.apellidos}</td>
                      <td>{item.identificacion}</td>
                      <td>{item.email}</td>
                      <td>
                        <AiOutlineEdit
                          color={loading ? "#cecece" : "#1D43AD"}
                          onClick={() => openModal(item)}
                          size={22}
                        />
                      </td>
                      <td>
                        {loading && user === item ? (
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
  users: PropTypes.array,
  isFilter: PropTypes.bool,
  loading: PropTypes.bool,
  remove: PropTypes.func.isRequired,
};

Programming.defaultProps = {
  users: [],
  loading: false,
  isFilter: false,
};

export default Programming;
