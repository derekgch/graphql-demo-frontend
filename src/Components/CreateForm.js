import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { postFruitAction, patchFruitAction, emptyEditFruit } from '../Actions';

const CreateForm = (props) => {
  const editFruit = props.selectedFruit? props.selectedFruit.description : "";
  const [ currentSelection, setCurrentSelection ] = useState('Create');
  const [ description, setDescription ] = useState(editFruit);
  const [ currentBucket, setCurrentBucket ] = useState();

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

  const handleMoveFruit = (eventKey, event) =>{
    console.log("eventKey", eventKey)
    console.log("event",event)

    console.log("handlemovefruit")
  }

  const handleSumbit= (event) =>{
    event.preventDefault();
    event.stopPropagation();
    console.log(currentSelection, description);
    if(props.selectedFruit){
      const { _id } = props.selectedFruit;
      props.updateAction({_id, description});
    }else
      props.submitAction({bucketID: props.selected.id, description})
    props.emptySelectedFruit();
    emptyFruit();
  }
  const emptyFruit = () =>{
    setDescription('');
    setCurrentSelection("Create");
  }

  useEffect( ()=>{
    if(props.selectedFruit){
      setDescription(props.selectedFruit.description);
      setCurrentSelection("EDIT");
      setCurrentBucket("")
    }else{
      emptyFruit();
    }
  }, [props.selectedFruit])

  return (
    <Form onSubmit={handleSumbit}>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {currentSelection}
        </Dropdown.Toggle>
        <Dropdown.Menu >
          <Dropdown.Item  eventKey='Create' > Create </Dropdown.Item>
          <Dropdown.Item  eventKey='Edit' > Edit </Dropdown.Item>
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

      <Dropdown onSelect={handleMoveFruit}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {props.selected? props.selected.title: "Buckets"}
        </Dropdown.Toggle>
        <Dropdown.Menu >
          {props.buckets.map(e => {
            return <Dropdown.Item  eventKey={e._id} > {e.title} </Dropdown.Item>
          })}
          {/* <Dropdown.Item  eventKey='Create' > Create </Dropdown.Item>
          <Dropdown.Item  eventKey='Edit' > Edit </Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>


      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

const mapStateToProps = (state) =>{
  return {
    selected: state.selected,
    selectedFruit: state.editFruit,
    buckets: state.buckets,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    submitAction: data => dispatch(postFruitAction(data)),
    updateAction: data => dispatch(patchFruitAction(data)),
    emptySelectedFruit: () => dispatch(emptyEditFruit())
  }
}


export default connect(mapStateToProps, mapDispatchToProps )(CreateForm);