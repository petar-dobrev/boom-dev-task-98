import styles from "./LoginForm.module.css";

const LoginForm = () => {
  return (
    <form className={styles.form} id="form">
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
      <button type="submit" form="form" className={styles.submit}>
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
