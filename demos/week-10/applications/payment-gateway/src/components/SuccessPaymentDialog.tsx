import PaymentOptions from '../models/PaymentOptions';
import Dialog from './Dialog';

import './SuccessPaymentDialog.css';

type Props = {
    modeOfPayment: PaymentOptions,
    closeConfirmationDialog: () => void
}

const SuccessPaymentDialog = ( props : Props ) => {
    const { modeOfPayment, closeConfirmationDialog } = props;

    return (
        <Dialog show={true}>
            <div>You have successfully made the payment through {modeOfPayment}</div>
            <button className="btn btn-close" onClick={closeConfirmationDialog}>Close</button>
        </Dialog>
    );
}
 
export default SuccessPaymentDialog;