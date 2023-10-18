import "./Raiting.scss";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function Raiting({ value, onChange, name, onBlur, error, ...props }) {
  const startProps = {
    name,
    onBlur,
    error,
    ...props,
  };
  const numericValue = +value;
  return (
    <Rating
      {...startProps}
      value={numericValue}
      onChange={(event) => {
        onChange(event.target.value);
      }}
      precision={0.25}
      icon={<FavoriteIcon />}
      emptyIcon={<FavoriteBorderIcon />}
    />
  );
}

export default Raiting;
