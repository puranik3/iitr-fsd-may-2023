import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

interface Props {
    rating: number,
    numRatings: number,
    color: string
}

const Rating = ( { rating, numRatings, color } : Props ) => {
    const numFullStars = Math.floor( rating );
    const numHalfStars = ( rating - numFullStars >= 0.5 ) ? 1 : 0;
    const numEmptyStars = 5 - ( numFullStars + numHalfStars );

    const style = {
        // color: color
        color,
        fontSize: '0.7em'
    };

    return (
        <span>
            {
                Array(numFullStars).fill(1).map(
                    ( item, idx ) => <FontAwesomeIcon icon={faStar} key={idx} style={style} />
                )
            }
            {
                numHalfStars !== 0 && <FontAwesomeIcon icon={faStarHalfAlt} style={style} />
            }
            {
                Array(numEmptyStars).fill(1).map(
                    ( item, idx ) => <FontAwesomeIcon icon={faStarEmpty} key={idx} style={style} />
                )
            }
            <span style={{ fontSize: '0.7em' }} className="ms-2">({numRatings} rated)</span>
        </span>
    );
};

Rating.defaultProps = {
    color: 'goldenrod'
};
 
export default Rating;