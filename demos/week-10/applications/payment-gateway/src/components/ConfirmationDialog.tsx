import { useState } from 'react';
import Dialog from './Dialog';
import SuccessPaymentDialog from './SuccessPaymentDialog';
import PaymentOptions from '../models/PaymentOptions';

type Props = {
    modeOfPayment: PaymentOptions,
    closeConfirmationDialog: () => void
}

const ConfirmationDialog = ( props : any ) => {
    console.log( props );
    const { closeConfirmationDialog, modeOfPayment } = props;
    // const { show } = props;
    const [ showSuccessDialog, setShowSuccessDialog ] = useState( false );

    const onClickOfYesButton = () => setShowSuccessDialog( true );

    return (
        <>
            {
                showSuccessDialog === false && (
                    <Dialog
                        show={true}
                    >
                        <div style={{ textAlign: 'center' }}>You are about to make a payment. Do you want to proceed?</div>
                        <button className="btn btn-cancel" onClick={closeConfirmationDialog}>No</button>
                        <button className="btn btn-confirm" onClick={onClickOfYesButton}>Yes</button>
                    </Dialog>
                )
            }
            {
                showSuccessDialog === true && (
                    <SuccessPaymentDialog
                        modeOfPayment={modeOfPayment}
                        closeConfirmationDialog={closeConfirmationDialog}
                    />
                )
            }
        </>
    );
}
 
export default ConfirmationDialog;