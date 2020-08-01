import { FunctionComponent } from "react";
import styles from "./nav.module.css";

const Nav: FunctionComponent = ({ children }) => (
  <nav className={styles.main}>
    {children}
    {/* {props.pathname === "/articles/" ? (
      <Link to='/'>Home</Link>
    ) : (
      <Link to='/articles/'>Articles</Link>
    )} */}
  </nav>
);

export default Nav;
