import React, { Component } from 'react';

class Decoder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputNumber : 0,
            output: {
                w: null,
                x: null,
                y: null,
                z: null,
            },
            loading: false,
            setOutput: false
        }
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({inputNumber: value})
    }

    handleInputDecode = () => {

        const input = this.state.inputNumber;

        const alpha = 17.5203995226232298507635558971986343568269307913621255441024;
        const beta = 9.08940918396933145589411466653591006324970333003584952642362;
        const gamma = 1.26914313016882383167214704070060590497498698937501166713508;

        const wd = (12193 * input) + (11856 * Math.round(input/alpha)) + (1744 * Math.round(input/beta)) + (-16577 * Math.round(input/gamma));
        const xd = (-10449 * input) + (-7809 * Math.round(input/alpha)) + (-337 * Math.round(input/beta)) + (13874 * Math.round(input/gamma));
        const yd = (10112 * input) + (7024 * Math.round(input/alpha)) + (2640 * Math.round(input/beta)) + (-13711 * Math.round(input/gamma));
        const zd = (-7472 * input) + (-6513 * Math.round(input/alpha)) + (-3088 * Math.round(input/beta)) + (10386 * Math.round(input/gamma));


        this.setState({
            output: {w:wd, x:xd, y:yd, z:zd}
        })
    }
    
    render() {
        const {w, x, y, z} = this.state.output;
        return (
            <div className='right-decode'>
                <div className='grid-center'><span style={{ fontSize: "4vh" }}>Decode</span></div>
                <div className='grid-center'>
                    <input type='number' min="0" onChange={(event) => this.handleInputChange(event)} placeholder='input encoded number' />
                    <button onClick={()=> this.handleInputDecode()}>Decode</button>
                </div>
                <div className='grid-center'>
                    <ul>
                        <li>W: {w}</li>
                        <li>X: {x}</li>
                        <li>Y: {y}</li>
                        <li>X: {z}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Decoder;