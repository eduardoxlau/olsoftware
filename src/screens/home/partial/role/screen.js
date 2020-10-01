/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Table, Button, Modal, Spinner, Row, Col } from "react-bootstrap";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import { Card, Container, Label } from "../../../../ui";
import ModalSubmit from "../../../../components/forms/role";
import Filter from "../../../../components/forms/filterRole";

const Programming = (props) => {
  const { roles, remove, loading, isFilter } = props;
  const [showModal, closeModal] = useState(false);
  const [role, setRole] = useState({});

  useEffect(() => {
    closeModal(false);
  }, [roles]);

  const handleModal = () => {
    closeModal(!showModal);
  };

  const openModal = (item) => {
    setRole(item);
    handleModal();
  };

  const removeElement = (item) => {
    setRole(item);
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
                  {isFilter ? "Resultado de la Busqueda..." : "Roles"}
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
                  <ModalSubmit role={role} initialValues={role} />
                </Modal>
              </Container>
            </Container>
            <Container>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Campo 1</th>
                    <th>Campo 2</th>
                    <th>Campo 3</th>
                    <th>Campo 4</th>
                    <th colSpan="2">Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {roles.map((item) => (
                    <tr key={item.id}>
                      <td>{item.campo1}</td>
                      <td>{item.campo2}</td>
                      <td>{item.campo3}</td>
                      <td>{item.campo4}</td>
                      <td>
                        <AiOutlineEdit
                          color={loading ? "#cecece" : "#1D43AD"}
                          onClick={() => openModal(item)}
                          size={22}
                        />
                      </td>
                      <td>
                        {loading && role === item ? (
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
  roles: PropTypes.array,
  isFilter: PropTypes.bool,
  loading: PropTypes.bool,
  remove: PropTypes.func.isRequired,
};

Programming.defaultProps = {
  roles: [],
  loading: false,
  isFilter: false,
};

export default Programming;
