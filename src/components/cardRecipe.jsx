import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

function CardRecipe(props) {
  return (
    <div
      id={props.uri.split("_")[1]}
      className="card-recipe"
    >
      <img
        src={props.image}
        alt=""
      />
      <h4>{props.label}</h4>
      <div className="recipe-info">
        <span>{`Category: ${props.mealType}`}</span>
        <div className="calories">
          <FontAwesomeIcon icon={faFire} />
          <span>{props.calories.toFixed(0)}</span>
        </div>
      </div>
    </div>
  );
}

CardRecipe.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  mealType: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  uri: PropTypes.string.isRequired,
};

export default CardRecipe;
