import { useState, useEffect } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import LibrariesListItem from './LibrariesListItem/LibrariesListItem';
import { getLibraries } from '../../services/libraries';
import ILibrary from '../../models/ILibrary';

const LibrariesList = () => {
    const [ loading, setLoading ] = useState( true );
    const [ libraries, setLibraries ] = useState<ILibrary[]>( [] );

    useEffect(
        () => { // "effect"
            const helper = async () => {
                const data = await getLibraries();
                setLibraries( data );
                setLoading( false );
            };
            
            helper();
        },
        [] // dependencies array - if we pass an empty array, the "effect" executes (only once) AFTER the first render
    );

    return (
        <>
            {
                loading === true && (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )
            }
            {
                <Row xs={1} md={2} lg={3}>
                    {
                        ( !loading && libraries.length !== 0 ) && (
                            libraries.map(
                                library => (
                                    <Col key={library.id} className="d-flex mb-3">
                                        <LibrariesListItem
                                            library={library}
                                        />
                                    </Col>
                                )
                            )
                        )
                    }
                </Row>
            }
        </>
    );
}
 
export default LibrariesList;