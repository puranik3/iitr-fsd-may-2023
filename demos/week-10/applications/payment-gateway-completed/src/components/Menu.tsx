import { useState } from 'react'

import DebitCard from './DebitCard';
import NetBanking from './NetBanking';
import UPI from './UPI';
import { PaymentOption } from '../types/utils';

import './Menu.css';

const paymentOptions = [
    PaymentOption.CARD,
    PaymentOption.NET_BANKING,
    PaymentOption.UPI
];

function Menu() {
    const [ option, setOption ] = useState<PaymentOption | ''>( '' );

    return(
        <div className="menu">
            <div className="payment-options">
                {
                    paymentOptions.map(
                        opt => (
                            <button
                                key={opt}
                                className={`payment-option ${option === opt ? "payment-option-selected" : ""}`}
                                onClick={() => setOption(opt)}>
                                    {opt}
                            </button>
                        )
                    )
                }
            </div>

            <div className="payment-details">
                {option === PaymentOption.CARD && <DebitCard />}
                {option === PaymentOption.NET_BANKING && <NetBanking />}
                {option === PaymentOption.UPI && <UPI />}
            </div>
        </div>
    )
}

export default Menu;