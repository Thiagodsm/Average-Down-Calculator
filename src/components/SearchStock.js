import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function SearchStock() {
    return (
        <Form className="d-flex mb-3">
            <Form.Control
            type="search"
            placeholder="Pesquisar"
            className="me-2"
            aria-label="Search"
            />
            <Button variant="outline-success">Pesquisar</Button>
        </Form>
      );
}
