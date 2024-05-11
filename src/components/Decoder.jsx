import React, { Component } from 'react';
import BigNumber from 'bignumber.js';

BigNumber.config({ DECIMAL_PLACES: 100 });

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

        let input = new BigNumber(this.state.inputNumber);

        const alpha = new BigNumber('17.5203995226232298507635558971986343568269307913621255441024');
        const beta = new BigNumber('9.08940918396933145589411466653591006324970333003584952642362');
        const gamma = new BigNumber('1.26914313016882383167214704070060590497498698937501166713508');

        const wd = new BigNumber('12193').times(input)
            .plus(new BigNumber('11856').times(input.dividedBy(alpha).integerValue(BigNumber.ROUND_HALF_UP)))
            .plus(new BigNumber('1744').times(input.dividedBy(beta).integerValue(BigNumber.ROUND_HALF_UP)))
            .plus(new BigNumber('-16577').times(input.dividedBy(gamma).integerValue(BigNumber.ROUND_HALF_UP)));

        const xd = new BigNumber('-10449').times(input)
            .plus(new BigNumber('-7809').times(input.dividedBy(alpha).integerValue(BigNumber.ROUND_HALF_UP)))
            .plus(new BigNumber('-337').times(input.dividedBy(beta).integerValue(BigNumber.ROUND_HALF_UP)))
            .plus(new BigNumber('13874').times(input.dividedBy(gamma).integerValue(BigNumber.ROUND_HALF_UP)));

        const yd = new BigNumber('10112').times(input)
            .plus(new BigNumber('7024').times(input.dividedBy(alpha).integerValue(BigNumber.ROUND_HALF_UP)))
            .plus(new BigNumber('2640').times(input.dividedBy(beta).integerValue(BigNumber.ROUND_HALF_UP)))
            .plus(new BigNumber('-13711').times(input.dividedBy(gamma).integerValue(BigNumber.ROUND_HALF_UP)));

        const zd = new BigNumber('-7472').times(input)
            .plus(new BigNumber('-6513').times(input.dividedBy(alpha).integerValue(BigNumber.ROUND_HALF_UP)))
            .plus(new BigNumber('-3088').times(input.dividedBy(beta).integerValue(BigNumber.ROUND_HALF_UP)))
            .plus(new BigNumber('10386').times(input.dividedBy(gamma).integerValue(BigNumber.ROUND_HALF_UP)));


        this.setState({
            output: { w: wd.toString(), x: xd.toString(), y: yd.toString(), z: zd.toString() }
        });

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