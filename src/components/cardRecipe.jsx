import PropTypes from 'prop-types';

function CardRecipe(props) {
  return (
    <div>
      <img
        src={props.image}
        alt=""
      />
      <h4>{props.label}</h4>
      <span>{props.mealType}</span>
      <span>{props.calories.toFixed(0)}</span>
    </div>
  );
}

CardRecipe.propTypes = {
    image: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    mealType: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
  };

export default CardRecipe;
