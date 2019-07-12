import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';



const CreateForm = () => {
  return (
    <Form>
      <Dropdown >
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Create Options
      </Dropdown.Toggle>
      <Dropdown.Menu >
        <Dropdown.Item  eventKey='bucket' > Bucket </Dropdown.Item>
        <Dropdown.Item  eventKey='fruit' > Fruit </Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
      
      <Form.Group controlId="formBasicInput">
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="Description" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default CreateForm;