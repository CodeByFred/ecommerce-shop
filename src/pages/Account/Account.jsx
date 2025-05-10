import classes from "./Account.module.scss";
import cart from "../../assets/cart.svg";
import Button from "../../components/Button/Button";

const Account = () => {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <img className={classes.icon} src={cart} alt="cart" />
        <label htmlFor="usernameInput"></label>
        <input
          type="text"
          id="usernameInput"
          name="username"
          placeholder="Username"
          autoComplete="off"
        />
        <label htmlFor="passwordInput"></label>
        <input
          type="password"
          id="passwordInput"
          name="password"
          placeholder="Password"
          autoComplete="off"
        />
        <Button variant="action">Login</Button>
        <small>Forgot Password?</small>
      </form>
    </div>
  );
};
export default Account;
