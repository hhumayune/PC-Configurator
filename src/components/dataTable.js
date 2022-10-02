import React from 'react'
import './DBContent.css'

const dataTable = ( {data, Selected} ) => {

    function getKeys() {
        return Object.keys(data[0])
    }

    function getHeader() {
        var keys = getKeys();
        return keys.map((key, index)=>{
        return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    function getRowsData() {
        var items = data;
        var headers = getKeys();
        return items.map((row, index)=>{
        return <tr key={index}><RenderRow key={index} data={row} headers={headers} /></tr>
        })
    }

    const RenderRow = (props) =>{
        return props.headers.map((key, index)=>{
        return <td key={index} onClick={e => Selected(props.data)}>{props.data[key]}</td>
        })
    }


  return (
    <div>
        <div className="clearselection" onClick={e => Selected('')}>Clear Selection</div>
        <table id="listtable">
            <thead>
                <tr key="0">{getHeader()}</tr>
            </thead>
            <tbody>
                {getRowsData()}
            </tbody>
        </table>
    </div>
  )
}

export default dataTable