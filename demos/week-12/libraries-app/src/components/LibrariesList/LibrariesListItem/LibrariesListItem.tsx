import { Card, Button } from 'react-bootstrap';
import ILibrary from "../../../models/ILibrary";

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
                <Card.Title>{library.name}</Card.Title>
                <Card.Text>
                    {library.location}
                </Card.Text>
                <Button variant="primary">More</Button>
            </Card.Body>
        </Card>
    );
};

export default LibrariesListItem;
