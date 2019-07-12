import React, {useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

const CreateForm = () => {
  const [ currentSelection, setCurrentSelection ] = useState('Create Options');


  const handleSelect = (eventKey) =>{
    setCurrentSelection(eventKey.toUpperCase());
  }

  const handleSumbit= (event) =>{
    event.preventDefault();
    event.stopPropagation();
    console.log(currentSelection)
  }


  return (
    <Form onSubmit={handleSumbit}>
      <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {currentSelection}
      </Dropdown.Toggle>
      <Dropdown.Menu >
        <Dropdown.Item  eventKey='bucket' > Bucket </Dropdown.Item>
        <Dropdown.Item  eventKey='fruit' > Fruit </Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
      
      <Form.Group controlId="formBasicInput">
        <Form.Label> Description </Form.Label>
        <Form.Control type="text" placeholder="Description" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default CreateForm;