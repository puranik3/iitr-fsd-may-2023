import { ChangeEvent, Component, FormEvent } from 'react';
import { range } from '../utils/array';
import Dialog from './Dialog';

class CreditDebitCard extends Component {
    state = {
        cc: '',
        name: '',
        month: '1',
        year: (new Date()).getFullYear(),
        cvv: '',
        showConfirmationDialog: false
    };

    // constructor() {
    //     this.state = {

    //     }
    // }

    updateValue = ( event : ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }

    submitForm = ( event : FormEvent ) => {
        // the browser will not submit the form data (and not refresh)
        event.preventDefault();

        this.setState({
            showConfirmationDialog: true
        });
    }

    render() {
        const {
            cc,
            name,
            month,
            year,
            cvv,
            showConfirmationDialog
        } = this.state;

        const currentYear = (new Date()).getFullYear();

        return (
            <div>
                <strong>Credit / Debit Card</strong>
                <form onSubmit={this.submitForm}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="cc">Card number</label>
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        id="cc"
                                        name="cc"
                                        // defaultValue="123"
                                        value={cc}
                                        onChange={this.updateValue}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="name">Name</label>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={name}
                                        onChange={this.updateValue}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="month">Expiry</label>
                                </td>
                                <td>
                                    <select
                                        id="month"
                                        name="month"
                                        value={month}
                                        onChange={this.updateValue}
                                    >
                                        <option disabled>--</option>
                                        {
                                            range( 1, 12 ).map( item => (
                                                <option value={item} key={item}>{item}</option>
                                            ))
                                        }
                                    </select>
                                    <select
                                        id="year"
                                        name="year"
                                        value={year}
                                        onChange={this.updateValue}
                                    >
                                        <option disabled>--</option>
                                        {
                                            range( currentYear, currentYear + 10 ).map( item => (
                                                <option value={item} key={item}>{item}</option>
                                            ))
                                        }
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="cvv">CVV</label>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        id="cvv"
                                        name="cvv"
                                        value={cvv}
                                        onChange={this.updateValue}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button className="btn btn-pay">Pay</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                {
                    showConfirmationDialog && <Dialog />
                }
            </div>
        );
    }
}

export default CreditDebitCard;