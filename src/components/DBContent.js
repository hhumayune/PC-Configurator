import React, { useState, useEffect } from 'react'
import './DBContent.css'
import DataTable from './dataTable.js'

const DBContent = (props) => {

  //retrieve all data
  const [Tdata, setTdata] = useState('');
    const getTdata=() => {
      fetch(`/api/${props.optn}`)
      .then(function(response) {
          console.log(response, 'this is response');
          return response.json();
      })
      .then(function(newJson) {
          console.log(newJson, ' This is DATA');
          setTdata(newJson);
      });
    }

    //update stuff
    useEffect(() => {
      if (props.optn !== 'Tab to begin!'){
        getTdata();
      }
    }, [props.optn]);


    function changeSelected (part) {
      props.updatePart(props.optn, part);
    }

  return (
    <div>
      <div className="banner">
        <h1 style={{color: 'white'}}>Select {[props.a ? 'a' : '']} {props.optn}</h1>
      </div>
      <div className="database">
        {[Tdata !== ''? <DataTable data={Tdata} Selected={changeSelected} /> : null]}
      </div>
    </div>
  )
}

export default DBContent