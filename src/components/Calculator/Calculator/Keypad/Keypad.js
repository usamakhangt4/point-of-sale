import React, { useEffect, useRef, Component } from 'react';
import KeypadRow from './KeypadRow/KeypadRow';
import Button from '../../CalculatorComponents/Button/Button';
import LargeButton from '../../CalculatorComponents/Button/LargeButton/LargeButton'

export default class Keypad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myRef: null
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.simulateButtonClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.simulateButtonClick, false);
    }

    simulateButtonClick = (event) => {
        this.props.onButtonPress(event.key);
    }

    render() {
        return (
            <section className="keypad">
                {/* row #1 */}
                <KeypadRow>
                    <Button type="primary" onButtonPress={() => this.props.onButtonPress('C')}>C</Button>
                    <Button type="primary" onButtonPress={() => this.props.onButtonPress('Backspace')}>&larr;</Button>
                    <Button type="operator" onButtonPress={() => this.props.onButtonPress('%')}>%</Button>
                    <Button type="operator" onButtonPress={() => this.props.onButtonPress('/')}>/</Button>
                </KeypadRow>

                {/* row #2 */}
                <KeypadRow>
                    <Button onButtonPress={() => this.props.onButtonPress(7)}>7</Button>
                    <Button onButtonPress={() => this.props.onButtonPress(8)}>8</Button>
                    <Button onButtonPress={() => this.props.onButtonPress(9)}>9</Button>
                    <Button type="operator" onButtonPress={() => this.props.onButtonPress('*')}>*</Button>
                </KeypadRow>

                {/* row #3 */}
                <KeypadRow>
                    <Button onButtonPress={() => this.props.onButtonPress(4)}>4</Button>
                    <Button onButtonPress={() => this.props.onButtonPress(5)}>5</Button>
                    <Button onButtonPress={() => this.props.onButtonPress(6)}>6</Button>
                    <Button type="operator" onButtonPress={() => this.props.onButtonPress('-')}>-</Button>
                </KeypadRow>

                {/* row #4 */}
                <KeypadRow>
                    <Button onButtonPress={() => this.props.onButtonPress(1)}>1</Button>
                    <Button onButtonPress={() => this.props.onButtonPress(2)}>2</Button>
                    <Button onButtonPress={() => this.props.onButtonPress(3)}>3</Button>
                    <Button type="operator" onButtonPress={() => this.props.onButtonPress('+')}>+</Button>
                </KeypadRow>

                {/* row #5 */}
                <KeypadRow>
                    <Button onButtonPress={() => this.props.onButtonPress(0)}>0</Button>
                    <Button onButtonPress={() => this.props.onButtonPress('.')}>.</Button>
                    <LargeButton onButtonPress={() => this.props.onButtonPress('Enter')}>=</LargeButton>
                </KeypadRow>
            </section>
        )
    }
}

