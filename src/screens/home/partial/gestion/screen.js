/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Table, Button, Modal, Spinner, Row, Col } from "react-bootstrap";
import { AiOutlineWallet, AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import { Card, Container, Label } from "../../../../ui";
import ModalSubmit from "../../../../components/forms/gestion";
import Filter from "../../../../components/forms/filterGestion";

const Programming = (props) => {
  const { gestiones, remove, loading, isFilter } = props;
  const [showModal, closeModal] = useState(false);
  const [gestion, setGestion] = useState({});

  useEffect(() => {
    closeModal(false);
  }, [gestiones]);

  const handleModal = () => {
    closeModal(!showModal);
  };

  const openModal = (item) => {
    setGestion(item);
    handleModal();
  };

  const removeElement = (item) => {
    setGestion(item);
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
                  {isFilter ? "Resultado de la Busqueda..." : "Gestion"}
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
                  <ModalSubmit gestion={gestion} initialValues={gestion} />
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
                  {gestiones.map((item) => (
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
                        {loading && gestion === item ? (
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
  gestiones: PropTypes.array,
  isFilter: PropTypes.bool,
  loading: PropTypes.bool,
  remove: PropTypes.func.isRequired,
};

Programming.defaultProps = {
  gestiones: [],
  loading: false,
  isFilter: false,
};

export default Programming;
