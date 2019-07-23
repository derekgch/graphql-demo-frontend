import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { deleteFruitAction, storeEditFruit } from '../Actions';

const FruitsContainer = (props) => {
  const handleDelete = (event, id) =>{
    event.stopPropagation();
    event.preventDefault();
    props.deleteFruit(id);
  }

  const handleClick =(event, element) =>{
    event.stopPropagation();
    event.preventDefault();
    props.selectFruit(element);
  }

  const generateRows = () =>{
    if(!Array.isArray(props.fruits)) return null;

    return props.fruits.map( element => {
      const {_id, description } = element;
      return (
        <tr key={_id} onClick={event => handleClick(event, element)}>
          <td>{_id}</td>
          <td>{description}</td>
          <td><Button onClick={(event) => handleDelete(event, _id)}>Delete</Button></td>
        </tr>
      )
    })
  }

  return (
    <div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#ID</th>
          <th>Description</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {props.fruits ? generateRows() : null}
      </tbody>
    </Table>
      
    </div>
  );
};

const mapStateToProps = (state) => {	
	return {
      fruits:state.fruits,
      editFruit:state.editFruit,
	}
}

const mapDispatchToProps = dispatch =>{
  return {
    deleteFruit: id => dispatch(deleteFruitAction(id)),
    selectFruit: obj => dispatch(storeEditFruit(obj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(FruitsContainer);