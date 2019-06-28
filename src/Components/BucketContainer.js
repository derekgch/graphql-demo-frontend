import React from 'react';
import { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const BucketContainer = (props) => {
  const generateMenu = () =>{
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
      <Dropdown onSelect={ props.handleSelect }>
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

export default BucketContainer;