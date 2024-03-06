import PropTypes from "prop-types";

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
        <span>{props.calories.toFixed(0)}</span>
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
