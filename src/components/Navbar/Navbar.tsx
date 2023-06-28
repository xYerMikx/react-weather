import { Link } from "react-router-dom";
import { Button } from "../../ui/Button/Button";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  const bgColor =
    "linear-gradient(180deg, rgb(57.79, 93.96, 113.69) 0%, rgb(91.68, 147.17, 177.44) 100%)";
  return (
    <nav className={styles.nav}>
      <Link className={styles.logo} to="/">
        Dark Weather
      </Link>
      <ul className={styles.links}>
        <li>
          <Link className={styles.link} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/download">
            Download app
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/contact">
            Contact us
          </Link>
        </li>
      </ul>
      <Button text="Sign Up" bg={bgColor} />
    </nav>
  );
};
