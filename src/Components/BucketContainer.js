import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBucketAction, fetchFruitsAction } from '../Actions';
import Dropdown from 'react-bootstrap/Dropdown';

const BucketContainer = (props) => {
  useEffect(
    props.fetchBucketAction
  , [])
  const generateMenu = () =>{
    if(!Array.isArray(props.buckets)) return null;
    return props.buckets.map(element => {
      const { _id, title } = element;
      if( _id === props.selectedBucket)
        return <Dropdown.Item  eventKey= {_id} key={_id} active> {title}</Dropdown.Item>
      else
        return <Dropdown.Item  eventKey= {_id} key={_id} > {title}</Dropdown.Item>
    })
  }

   const handleSelect = (eventKey, event) =>{
    props.fetchFruitsAction(eventKey);
  }

  return (
    <div>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {props.selected? props.selected.title : "Bucket List"}
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
      selected:state.selected,
	}
}
	
const mapDispatchToProps = (dispatch) => {
	return {
    fetchBucketAction: () => dispatch(fetchBucketAction()),
    fetchFruitsAction: bucketID => dispatch(fetchFruitsAction(bucketID))
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(BucketContainer);