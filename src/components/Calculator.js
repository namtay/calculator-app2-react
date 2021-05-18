import React,{useState} from 'react'
import Button from './Button';
import EqualsButton from "./EqualsButton"
import ClearButton from "./ClearButton"

function Calculator() {
    const [input, setInput] = useState('');

    const clickButton=()=>{

    }
    const operation_Func=()=>{

    }
   
    const addZeroToInput=()=>{

    }
    const addDecimalToInput=()=>{

    }
    const solve =()=>{

    }

    const handleClear=()=>{

    }
    return (
        <>
        <main className="main">
    <div className="card calc-body">
        <div className="card-body">
        
        <span className="card-title logo">re<span className="big-A">A</span>ct</span>
        <div className="screen mx-auto">
            <div className="screen__inner">
              <input type="text" readOnly className="output" value={input} placeholder="0"/>
            </div>
          </div>
          <div className="power-btns">
            <div className="left">
              <div className="label"></div>
            </div>
            <div className="right">
              <div className="label"></div>
            </div>
          </div>
        </div>
        <div className="card-body buttons-grid">
                <div className="row">
                   <Button handleClick={clickButton}></Button>
                   <Button handleClick={clickButton}>7</Button>
                    <Button handleClick={clickButton}>8</Button>
                   <Button handleClick={clickButton}>9</Button>  
                   <Button handleClick={operation_Func}>/</Button>
                </div> 
                <div className="row">
                  <Button handleClick={clickButton}></Button>
                    <Button handleClick={clickButton}>4</Button>
                    <Button handleClick={clickButton}>5</Button>
                    <Button handleClick={clickButton}>6</Button>
                    <Button handleClick={operation_Func}>*</Button>
                </div>
                <div className="row">
                   <Button handleClick={clickButton}>%</Button>
                   <Button handleClick={clickButton}>3</Button>
                   <Button handleClick={clickButton}>2</Button>
                   <Button handleClick={clickButton}>1</Button>
                   <Button handleClick={operation_Func}>-</Button>
                </div>
                <div className="row">
                    <ClearButton handleClear={handleClear}>CE</ClearButton>
                   <Button handleClick={addZeroToInput}>0</Button>
                   <Button handleClick={addDecimalToInput}>.</Button>
                   <EqualsButton handleSolve={solve}>=</EqualsButton>
                   <Button handleClick={operation_Func}>+</Button>
                </div>  
        </div>
        </div>
        </main>
        </>
    )
}

export default Calculator
