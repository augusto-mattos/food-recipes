import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

function CardRecipe(props) {
  return (
    <Link
      to={`/recipe/${props.uri.split("_")[1]}`}
      id={props.uri.split("_")[1]}
      className="card-recipe"
    >
      <img
        src={props.image}
        alt=""
      />
      <h4 className="recipe-title">{props.label}</h4>
      <div className="recipe-info">
        <span>{`Category: ${props.mealType[0]}`}</span>
        <div className="calories">
          <FontAwesomeIcon icon={faFire} />
          <span>{`${props.calories.toFixed(0)} cals`}</span>
        </div>
      </div>
    </Link>
  );
}

CardRecipe.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  mealType: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
  calories: PropTypes.number.isRequired,
  uri: PropTypes.string.isRequired,
};

export default CardRecipe;
