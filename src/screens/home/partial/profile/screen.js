/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Table, Button, Modal, Spinner, Row, Col } from "react-bootstrap";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import { Card, Container, Label } from "../../../../ui";
import ModalSubmit from "../../../../components/forms/profile";
import Filter from "../../../../components/forms/filterProfile";

const Programming = (props) => {
  const { profiles, remove, loading, isFilter } = props;
  const [showModal, closeModal] = useState(false);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    closeModal(false);
  }, [profiles]);

  const handleModal = () => {
    closeModal(!showModal);
  };

  const openModal = (item) => {
    setProfile(item);
    handleModal();
  };

  const removeElement = (item) => {
    setProfile(item);
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
                  {isFilter ? "Resultado de la Busqueda..." : "Perfiles"}
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
                  <ModalSubmit profile={profile} initialValues={profile} />
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
                  {profiles.map((item) => (
                    <tr key={item.id}>
                      <td>{item.campo1}</td>
                      <td>{item.campo1}</td>
                      <td>{item.campo1}</td>
                      <td>{item.campo1}</td>
                      <td>
                        <AiOutlineEdit
                          color={loading ? "#cecece" : "#1D43AD"}
                          onClick={() => openModal(item)}
                          size={22}
                        />
                      </td>
                      <td>
                        {loading && profile === item ? (
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
  profiles: PropTypes.array,
  isFilter: PropTypes.bool,
  loading: PropTypes.bool,
  remove: PropTypes.func.isRequired,
};

Programming.defaultProps = {
  profiles: [],
  loading: false,
  isFilter: false,
};

export default Programming;
