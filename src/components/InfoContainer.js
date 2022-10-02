import React, { useEffect, useState } from 'react'

import './InfoContainer.css'

const InfoContainer = ({parts}) => {

    const [buildprice, setBuildprice] = useState(0)
    const [buildwatts, setBuildwatts] = useState(0)
    const [buildname, setBuildname] = useState('ProgradeX')

    const acc = 1

    const [clist, Setclist] = useState([])


    function onPublish (acc, buildname, buildcost, buildwatts, parts) {
        const requestconfig = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "acc": acc,
                "buildname": buildname,
                "buildcost": buildcost,
                "buildwatts": buildwatts,
                "cpu": parts[0]? parts[0]["pid"] : 'NULL',
                "clr": parts[1]? parts[1]["pid"] : 'NULL',
                "mb":  parts[2]? parts[2]["pid"] : 'NULL',
                "ram": parts[3]? parts[3]["pid"] : 'NULL',
                "sto": parts[4]? parts[4]["pid"] : 'NULL',
                "gpu": parts[5]? parts[5]["pid"] : 'NULL',
                "cse": parts[6]? parts[6]["pid"] : 'NULL',
                "psu": parts[7]? parts[7]["pid"] : 'NULL',
            })
        };
        fetch('/api/builds/', requestconfig)
    }

    function changeName (name) {
        console.log(name);
        setBuildname(name);
    }

    function calculateTotalPrice(item) {
        var sum = 0
        for (let i = 0; i < 8; i++) {
            if (item[i]["pprice"])
            {
                sum += item[i]["pprice"]
            }
        }
        return sum;
    }

    function EstimatedWattage(item) {
        var wattage = 0
        // ITEMS [ 0:CPU 1:CLR 2:MB 3:RAM 4:STO 5:VIDEO 6:CASING 7:PSU ]
        for (let i = 0; i < 7; i++) {
            if (item[i]["pwatts"])
            {
                wattage += item[i]["pwatts"]
            }
        }
        return wattage;
    }

    function checkCompatibility(item) {
        var issues = []
        // ITEMS [ 0:CPU 1:CLR 2:MB 3:RAM 4:STO 5:VIDEO 6:CASING 7:PSU ]
        if ((item[0] && item[2]) && (item[0]["cpu_socket"] !== item[2]["mb_socket"])) {
            issues.push("CPU and Motherboard Incompatible Socket");
        }
        if ((item[2] && item[3]) && (item[2]["mb_ramslots"] < item[3]["ram_modules"])) {
            issues.push("More RAM modules than Motherboard supports");
        }
        if (item[7] && (item[7]["psu_wattage"] < buildwatts * 2)){
            issues.push("Weak Power Supply, May cause system crashes")
        }
        if ((item[2] && item[6]) && (item[2]["mb_ff"] !== item[6]["cse_ff"])) {
            issues.push("Motherboard Size Different from Case Size");
        }
        return (issues);
    }

    useEffect(() => {
        //update total price
        setBuildprice(calculateTotalPrice(parts))

        //update compatibility
        Setclist(checkCompatibility(parts))

        //Wattage calculation
        setBuildwatts(EstimatedWattage(parts))

    }, parts)

    const RenderIssues = ({issues}) =>{
        return issues.map((issue ,index) => {
        return (
            <li className="list" key={index}> {issue} {console.log(issue)} </li> 
        )
        })
    }

    

  return (
    <div className="infocontainer">
        <input type="text" placeholder="Enter Build Name" onChange={(e) => changeName(e.target.value)}/>
        <button className="buttonm" onClick={() => onPublish(acc, buildname, buildprice, buildwatts, parts)}>Publish</button>
        <p>Total Price Rs. <span className="price">{buildprice}</span> <br/> Wattage: <span className="watts">{buildwatts}</span></p>
        <RenderIssues issues={clist}/>
    </div>
  )
}

export default InfoContainer