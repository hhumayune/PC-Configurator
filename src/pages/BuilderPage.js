import React from 'react'
import './BuilderPage.css'
import { useState } from 'react'

import TabLink from '../components/TabLink'
import DBContent from '../components/DBContent'
import InfoContainer from '../components/InfoContainer'


function BuilderPage() {

    // on change of tabs
    const [A, changeA] = useState(true)
    const [Windowname, changeWindowname] = useState('Tab to begin!')

    const onSelect = (a, selected) => {
        console.log('i switched tab ', a)
        changeA(a)
        changeWindowname(selected)
    }

    //update subtext for after part select
    const [CPU, updateCPU] = useState('')
    const [CLR, updateCLR] = useState('')
    const [MB, updateMB] =   useState('')
    const [MEM, updateMEM] = useState('')
    const [STO, updateSTO] = useState('')
    const [GPU, updateGPU] = useState('')
    const [CSE, updateCSE] = useState('')
    const [PSU, updatePSU] = useState('')


    function switchPart(category, part){
        console.log(category);
        switch(category) {
            case 'CPU':     
                updateCPU(part);
                break;
            case 'Cooler':     
                updateCLR(part);
                break;
            case 'Motherboard': 
                updateMB(part);
                break;
            case 'Memory':      
                updateMEM(part);
                break;
            case 'Storage':     
                updateSTO(part);
                break;
            case 'Video Card':     
                updateGPU(part);
                break;
            case 'Casing':
                updateCSE(part);
                break;
            case 'PSU':
                updatePSU(part);
                break;
            default:
                console.log('invalid part type or operation')
        }
    }

    
    return (
        <div className="BuilderPageContent">
            <div className="sidenav">
                <div className="info-container">
                    <InfoContainer parts={[CPU, CLR, MB, MEM, STO, GPU, CSE, PSU]}/>
                </div>
                <TabLink main="CPU"         a={true}    part={CPU}      onSelect={onSelect}/>
                <TabLink main="Cooler"      a={true}    part={CLR}      onSelect={onSelect}/>
                <TabLink main="Motherboard" a={true}    part={MB}       onSelect={onSelect}/>
                <TabLink main="Memory"      a={false}   part={MEM}      onSelect={onSelect}/>
                <TabLink main="Storage"     a={false}   part={STO}      onSelect={onSelect}/>
                <TabLink main="Video Card"  a={true}    part={GPU}      onSelect={onSelect}/>
                <TabLink main="Casing"      a={true}    part={CSE}      onSelect={onSelect}/>
                <TabLink main="PSU"         a={false}   part={PSU}      onSelect={onSelect}/>
            </div>
            <div className="dbcontent">
                <DBContent optn={Windowname} a={A} updatePart={switchPart}/>
            </div>
        </div>
    )
}

export default BuilderPage