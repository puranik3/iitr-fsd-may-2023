import { ChangeEvent, Component, FormEvent } from 'react';
import ConfirmPayment from './ConfirmPayment';
import { PaymentOption } from '../types/utils';

type State = {
    ID : string,
    showComponent : boolean
}

class UPI extends Component<{}, State> {
    state = {
        ID : '',
        showComponent : false
    }

    onButtonClick = () => {
        this.setState({ showComponent: true });
    }

    onCancelButton = () =>{
        this.setState({ showComponent : false });
    }

    submitHandler = ( event : FormEvent<HTMLFormElement> ) =>{
        event.preventDefault();
        this.onButtonClick();
    }
    
    payHandler = (event : ChangeEvent<HTMLInputElement>) =>{
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        } as unknown as Pick<State, keyof State>);
    }  

    reset = () => {
        this.setState({
            ID : '',
            showComponent : false
        });
    }
    
    render() {
        const { ID } =  this.state;

        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <table>
                        <tbody>
                            <tr>
                                <td><label htmlFor="upiId">Enter UPI ID: </label></td>
                                <td>
                                    <input type="text" 
                                        name="ID" 
                                        value={ID}
                                        minLength = {10}
                                        onChange={this.payHandler}
                                        id="upiId" 
                                        placeholder="Enter your id here"
                                        required
                                    />
                                </td>
                            </tr>
                            <tr><td>
                                <button className="btn btn-pay" value="Submit">Pay</button>
                            </td></tr>
                        </tbody>
                    </table>
                </form>
                {
                    this.state.showComponent && (
                        <ConfirmPayment
                            onYes={this.reset}
                            onNo={this.onCancelButton}
                            paymentOption={PaymentOption.UPI}
                        />
                    )
                }
            </>
        )
    }
}

export default UPI