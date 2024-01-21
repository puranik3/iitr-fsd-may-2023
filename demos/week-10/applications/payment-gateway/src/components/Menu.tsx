import { useState } from 'react';
import CreditDebitCard from './CreditDebitCard';
import './Menu.css';
import PaymentOptions from '../models/PaymentOptions';
import NetBanking from './NetBanking';
import UPI from './UPI';

const paymentOptions = [
    PaymentOptions.DebitCreditCard,
    PaymentOptions.NetBanking,
    PaymentOptions.UPI
];

console.log( paymentOptions );
// we create an array of React Button Elements (an array of objects)
console.log(
    paymentOptions.map( item => <button className="payment-option">Credit / Debit Card</button> )
);

// similar to a normal array of objects
// const persons = [
//     {
//         name: 'John',
//         age: 32
//     },
//     {
//         name: 'Jane',
//         age: 28
//     }
// ]

// sfc
const Menu = () => {
    // initial value is returned only on first render. Subsequent renders return the latest state value
    let [ option, setOption ] = useState( paymentOptions[0] );

    const onClick = ( item : PaymentOptions, id : number ) => {
        // alert( 'clicked' );
        // option = item;
        setOption( item );
        console.log( option );
    }

    // switch( option ) {
    //     case paymentOptions[0]:
    //         formToShow = <CreditDebitCard />
    //         break;
    //     case paymentOptions[1]:
    //         formToShow = <NetBanking />;
    //         break;
    //     case paymentOptions[2]:
    //         formToShow = <UPI />;
    // }

    return (
        <div className="menu">
            <div className="payment-options">
                {
                    paymentOptions.map(
                        ( item, idx ) => (
                            <button
                                className={`payment-option ${option === item ? 'payment-option-selected' : ''}`}
                                key={item}
                                onClick={() => onClick( item, idx )}
                            >
                                {item}
                            </button>
                        )
                    )
                }
            </div>

            <div className="payment-details">
                {option === paymentOptions[0] && <CreditDebitCard />}
                {option === paymentOptions[1] && <NetBanking />}
                {option === paymentOptions[2] && <UPI />}
                {/* formToShow */}
            </div>
        </div>
    );
}
 
export default Menu;