import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Image, Spinner } from 'react-bootstrap';
import { getLibraryById } from '../../services/libraries';
import ILibrary from '../../models/ILibrary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import Rating from '../utils/Rating/Rating';
import GenresList from './GenresList/GenresList';

const baseUrl = process.env.REACT_APP_BASE_URL;

const LibraryDetails = () => {
    const [ library, setLibrary ] = useState<ILibrary | null>( null );
    const [ loading, setLoading ] = useState( true );
    const { id } = useParams<{ id: string }>();

    useEffect(
        () => {
            const helper = async () => {
                const library = await getLibraryById( id as string );
                setLibrary( library );
                setLoading( false );
            }

            helper();
        },
        []
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
                !loading && library !== null && (
                    <div>
                        <h1>{library.name}</h1>
                        <Row>
                            <Col xs={12} xl={4}>
                                <Image
                                    src={`${baseUrl}${library.imageUrl}`}
                                    alt={library.name}
                                    fluid
                                />
                            </Col>
                            <Col xs={12} lg={8}>
                                <div>{library.description}</div>
                                <Row className="my-3">
                                    <Col>
                                        <FontAwesomeIcon
                                            icon={faClock}
                                            className="me-2"
                                        />
                                        <span>{library.opens}</span>
                                        <span className="mx-1">-</span>
                                        <span>{library.closes}</span>
                                    </Col>
                                    <Col>
                                        <Rating
                                            rating={library.rating}
                                            numRatings={library.noOfRatings}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                )
            }
            <div className="mt-4">
                <GenresList />
            </div>
        </>
    );
}
 
export default LibraryDetails;