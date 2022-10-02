import React, { useState , useEffect } from 'react'
import './TabLink.css'

const TabLink = (props) => {

  const [Part, setPart] = useState('');

  const getTdata=() => {
    fetch(`/api/${props.main}/${props.part["pid"]}`)
    .then(function(response) {
        console.log(response, 'this is response');
        return response.json();
    })
    .then(function(newJson) {
        console.log('new', newJson[0]);
        setPart(newJson[0]);
    });
  }

  useEffect(() => {
    if (props.part !== ''){
      getTdata();
    }
    else {
      setPart('')
    }
  }, [props.part])


  return (
    <div className="tile" onClick={e => props.onSelect(props.a, props.main)}>
        <div className="subtile-2">
            <h2 className="definition">{props.main}</h2>
            <p className="selection">{[Part !== '' ? Part["pvendor"] : '']} - {[Part !== '' ? Part["pname"] : 'None Selected']}</p>
            <p className="price">Rs. {[Part !== '' ? Part["pprice"] : 0]}</p>
        </div>
    </div>
  )
}

export default TabLink