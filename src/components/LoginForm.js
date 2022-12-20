import styles from "./LoginForm.module.scss";

const LoginForm = () => {
  return (
    <form className={styles.form}>
      <label htmlFor="username" className={styles.label}>
        Username
      </label>
      <input type="text" name="username" id="name" className={styles.input} />
      <label htmlFor="password" className={styles.label}>
        Password
      </label>
      <input
        type="password"
        name="password"
        id="password"
        className={styles.input}
      />
      <input type="button" value="Submit" className={styles.submit} />
    </form>
  );
};

export default LoginForm;
