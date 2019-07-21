import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBucketAction } from '../Actions';
import Dropdown from 'react-bootstrap/Dropdown';

const BucketContainer = (props) => {
  useEffect(
    props.fetchBucketAction
  , [])
  const generateMenu = () =>{
    console.log(props.buckets)
    if(!Array.isArray(props.buckets)) return null;
    return props.buckets.map(element => {
      const { _id, title } = element;
      if( _id === props.selectedBucket)
        return <Dropdown.Item  eventKey= {_id} key={_id} active> {title}</Dropdown.Item>
      else
        return <Dropdown.Item  eventKey= {_id} key={_id} > {title}</Dropdown.Item>
    })
  }

  return (
    <div>
      <Dropdown >
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Bucket List
        </Dropdown.Toggle>

        <Dropdown.Menu >
          {props.buckets? generateMenu() : null}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};


const mapStateToProps = (state) => {	
	return {
    	buckets:state.buckets,
	}
}
	
const mapDispatchToProps = (dispatch) => {
	return {
    fetchBucketAction: () => fetchBucketAction()(dispatch),
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(BucketContainer);