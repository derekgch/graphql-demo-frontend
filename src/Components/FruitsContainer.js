import React from 'react';
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';


const FruitsContainer = (props) => {
  const generateRows = () =>{
    if(!Array.isArray(props.fruits)) return null;

    return props.fruits.map( element => {
      const {_id, description } = element;
      return (
        <tr key={_id}>
          <td>{_id}</td>
          <td>{description}</td>
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

export default connect(mapStateToProps)(FruitsContainer);