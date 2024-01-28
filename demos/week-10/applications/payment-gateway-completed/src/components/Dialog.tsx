import { ReactNode } from 'react';

import "./Dialog.css"

type Props = {
    show: boolean,
    children: ReactNode
};

const Dialog = ( { show, children } : Props ) => {
    return (
        <>
            {
                show ? (
                    <div className="dialog-overlay">
                        <div className="dialog">{children}</div>
                    </div>
                ) : (
                    null
                )
            }
        </>
    )
}

Dialog.defaultProps = {
    show: true
};

export default Dialog;