import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { postFruitAction } from '../Actions';

const CreateForm = (props) => {
  const [ currentSelection, setCurrentSelection ] = useState('Create Options');
  const [ description, setDescription ] = useState('');
  
  const handleSelect = (eventKey) =>{
    setCurrentSelection(eventKey.toUpperCase());
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'description':
        setDescription(value);
        break;
    
      default:
        break;
    }
    
  }

  const handleSumbit= (event) =>{
    event.preventDefault();
    event.stopPropagation();
    console.log(currentSelection, description);
    props.submitAction({bucketID: props.selected.id, description})
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
        <Form.Control type="text" 
          placeholder="Description" 
          name="description" 
          onChange={handleChange}
          value={description}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

const mapStateToProps = (state) =>{
  return {
    selected: state.selected,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    submitAction: data => dispatch(postFruitAction(data))
  }
}


export default connect(mapStateToProps, mapDispatchToProps )(CreateForm);