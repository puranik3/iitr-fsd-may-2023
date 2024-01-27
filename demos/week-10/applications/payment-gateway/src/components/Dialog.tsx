import { ReactNode } from 'react';
import './Dialog.css';

type Props = {
    children: ReactNode,
    show: boolean
};

const Dialog = ( props : Props ) => {
    // console.log( props );
    const { show, children } = props;

    return (
        <>
            {
                
                    <div className="dialog-overlay">
                        <div className="dialog">
                            {children}
                        </div>
                    </div>
                
            }
        </>
    );
}
 
export default Dialog;