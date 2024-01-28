import { Component, ChangeEvent, FormEvent } from 'react';
import ConfirmPayment from './ConfirmPayment';
import { range } from '../utils/array';
import { PaymentOption } from '../types/utils';

type State = {
    cardNumber : number,
    nameOnCard : string,
    monthValue : number,
    yearValue : number,
    CVVNumber : number,
    showComponent : boolean
}

class DebitCard extends Component<{}, State> {
    static initialState = {
        cardNumber : 0,
        nameOnCard : "",
        monthValue : 0,
        yearValue : 0,
        CVVNumber : 0,
        showComponent: false
    };

    constructor(props : {}) {
        super(props)
        
        this.state = { ...DebitCard.initialState };
    }

    payHandler = (event : ChangeEvent<HTMLInputElement>) =>{
        const name = event.target.name;
        const value = event.target.value

        this.setState({
            [name]: value
        } as unknown as Pick<State, keyof State> )
    }

    monthValueChange = (e : ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            monthValue :  parseInt(e.target.value)
        });
    }

    yearValueChange = (e : ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            yearValue :  parseInt(e.target.value)
        });
    }

    onCancel = () =>{
        this.setState({
            showComponent : false
        });
    }

    submitHandler = ( event : FormEvent<HTMLFormElement> ) =>{
        event.preventDefault()
        console.log(this.state)
        this.setState({
            showComponent: true
        });
    }

    reset = () => {
        this.setState({ ...DebitCard.initialState });
    }

    render() {
        const {cardNumber, nameOnCard, CVVNumber} = this.state

        return(
            <>
                <form onSubmit={this.submitHandler}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="cnum">Credit Card Number: <br />(12 Digit number)</label>
                                </td>
                                <td>
                                    <input type="number" 
                                        id="cnum" 
                                        min="100000000000"
                                        max="999999999999"
                                        placeholder="XXXX-XXXX-XXXX"
                                        name='cardNumber'
                                        value={cardNumber} 
                                        onChange={this.payHandler}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="name">Name:</label>
                                </td>
                                <td>
                                    <input type="text" 
                                        id="name" 
                                        placeholder="As on Card" 
                                        name='nameOnCard'
                                        value={nameOnCard}
                                        onChange={this.payHandler}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="Expdate">Expiry Date:</label>
                                </td>
                                <td>
                                    <select name="Month" id="month" value={this.state.monthValue} onChange={this.monthValueChange} required>
                                        <option value="">mm</option>
                                        {
                                            range( 1, 12 ).map( 
                                                val => (
                                                    <option value={val} key={val}>
                                                        {( '' + val ).padStart( 2, '0' )}
                                                    </option>
                                                )
                                            )
                                        }
                                    </select>
                                    <select name="year" id="year" value={this.state.yearValue} onChange={this.yearValueChange} required>
                                        <option value="">yyyy</option>
                                        {
                                            range( 2022, 2033 ).map( 
                                                val => (
                                                    <option value={val} key={val}>
                                                        {val}
                                                    </option>
                                                )
                                            )
                                        }
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="cvvum">CVV Number:</label>
                                </td>
                                <td>
                                    <input type="number" 
                                        placeholder="123" 
                                        id="cvvnum" 
                                        min="100" 
                                        max="999" 
                                        name='CVVNumber' 
                                        value={CVVNumber} 
                                        onChange={this.payHandler}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button className="btn btn-pay" value="Submit">Pay</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                {
                    this.state.showComponent && (
                        <ConfirmPayment
                            onYes={this.reset}
                            onNo={this.onCancel}
                            paymentOption={PaymentOption.CARD}
                        />
                    )
                }
            </>
        )
    }
}

export default DebitCard;