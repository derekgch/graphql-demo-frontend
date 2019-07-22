import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { deleteFruitAction } from '../Actions';

const FruitsContainer = (props) => {
  const handleDelete = (id) =>{
    props.deleteFruit(id);
  }

  const generateRows = () =>{
    if(!Array.isArray(props.fruits)) return null;

    return props.fruits.map( element => {
      const {_id, description } = element;
      return (
        <tr key={_id}>
          <td>{_id}</td>
          <td>{description}</td>
          <td><Button onClick={() => handleDelete(_id)}>Delete</Button></td>
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
	}
}

const mapDispatchToProps = dispatch =>{
  return {
    deleteFruit: id => dispatch(deleteFruitAction(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(FruitsContainer);