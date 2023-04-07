import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://raw.githubusercontent.com/Shashank290798/react-complete-guide-code/17-practice-food-order-http-forms/code/01-starting-project/src/assets/meals.jpg"
          alt="Meals"
        ></img>
      </div>
    </Fragment>
  );
};

export default Header;
