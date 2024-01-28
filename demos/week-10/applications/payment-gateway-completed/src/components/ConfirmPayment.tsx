import { useState } from "react";
import Dialog from './Dialog';
import SuccessPayment from "./SuccessPayment";
import { PaymentOption } from '../types/utils';

type Props = {
    onYes: () => void,
    onNo: () => void,
    paymentOption: PaymentOption
};

const ConfirmPayment = ( { onYes, onNo, paymentOption }: Props ) => {
    const [showSuccess, setShowSuccess] = useState( false );
    
    return (
        <>
            {
                !showSuccess ? (
                    <Dialog>
                        <div style={{ textAlign: 'center' }}>
                            <h3>Proceed to complete the payment?</h3>
                            <button className='btn btn-cancel' onClick={onNo}>No</button>
                            <button className='btn btn-confirm' onClick={() => setShowSuccess( true )}>Yes</button>
                        </div>
                    </Dialog>
                ) : (
                    <SuccessPayment
                        onClose={onYes}
                        paymentOption={paymentOption}
                    />
                )
            }
        </>
    )
}

export default ConfirmPayment;