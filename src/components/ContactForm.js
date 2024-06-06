import React from 'react';
import { Form, Button } from 'react-bootstrap';

function ContactForm() {
  return (
    <div className="contact-form">
      <h2>Contattami</h2>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Inserisci il tuo nome" />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Inserisci la tua email" />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>Messaggio</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="success" type="submit">
          Invia
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
