import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ILibrary from "../../../models/ILibrary";
import Rating from '../../utils/Rating/Rating';

const baseUrl = process.env.REACT_APP_BASE_URL;

interface Props {
    library: ILibrary;
}

const LibrariesListItem = ({ library }: Props) => {
    return (
        <Card className="w-100">
            <Card.Img
                variant="top"
                src={`${baseUrl}${library.imageUrl}`}
                alt={library.name}
            />
            <Card.Body>
                <Card.Title className="d-flex justify-content-between">
                    <div>
                        <div>{library.name}</div>
                        <div>
                            <Rating
                                rating={library.rating}
                                numRatings={library.noOfRatings}
                            />
                        </div>
                    </div>
                    <div><Link className="btn btn-primary btn-sm" to={`/libraries/${library.id}`}>More</Link></div>
                </Card.Title>
                <Card.Text>
                    {library.location}
                </Card.Text>
                
            </Card.Body>
        </Card>
    );
};

export default LibrariesListItem;
