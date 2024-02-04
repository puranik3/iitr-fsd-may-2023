import { Row, Col, Image } from 'react-bootstrap';
import IGenre from "../../../../models/IGenre";

const baseUrl = process.env.REACT_APP_BASE_URL;

interface Props {
    genre: IGenre;
}

const GenresListItem = ({ genre }: Props) => {
    return (
        <div className="w-100">
            <Row>
                <Col xs={6} lg={3}>
                    <Image
                        src={`${baseUrl}${genre.imageUrl}`}
                        alt={genre.name}
                        fluid
                        className="w-100"
                    />
                </Col>
                <Col xs={6} lg={9}>
                    <h3 className="h4">{genre.name}</h3>
                    <div>{genre.description}</div>
                </Col>
            </Row>
        </div>
    );
};

export default GenresListItem;
