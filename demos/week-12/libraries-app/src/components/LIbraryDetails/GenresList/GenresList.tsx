import { useState, useEffect } from 'react';
import { Row, Col, Spinner, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import GenresListItem from './GenresListItem/GenresListItem';
import { getGenresForLibrary } from '../../../services/genres';
import IGenre from '../../../models/IGenre';

const GenresList = () => {
    const [ loading, setLoading ] = useState( true );
    const [ genres, setGenres ] = useState<IGenre[]>( [] );
    
    const { id } = useParams<{ id: string }>();

    useEffect(
        () => { // "effect"
            const helper = async () => {
                const data = await getGenresForLibrary( id as string );
                setGenres( data );
                setLoading( false );
            };
            
            helper();
        },
        [] // dependencies array - if we pass an empty array, the "effect" executes (only once) AFTER the first render
    );

    return (
        <>
            <h2>Famous Genres in this Library</h2>
            {
                loading === true && (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                )
            }
            {
                <ListGroup>
                    {
                        ( !loading && genres.length !== 0 ) && (
                            genres.map(
                                genre => (
                                    <ListGroupItem key={genre.id}>
                                        <GenresListItem
                                            genre={genre}
                                        />
                                    </ListGroupItem>
                                )
                            )
                        )
                    }
                </ListGroup>
            }
        </>
    );
}
 
export default GenresList;