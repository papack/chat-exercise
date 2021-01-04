import React, { Component } from "react";

import styles from "./LoginRegister.module.css";

class LoginRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.signContainer}>
          <form className={styles.signForm}>
            <h1>Sign Up</h1>
            <label for="username">Username</label>
            <input id="username" type="text" placeholder="Username" />
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>

        <div className={styles.signContainer}>
          <form className={styles.signForm}>
            <h1>Sign In</h1>
            <label for="username">Username</label>
            <input id="username" type="text" placeholder="Username" />
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Password" />
            <button>Sign In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginRegister;
