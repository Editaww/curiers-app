import React, { useState } from "react";
import styles from "./styles.module.css";
import { login } from "../../apiCalls/user";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import Button from "../Button/Button";

const LoginForm = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPasswor] = useState("");
  const [isShowError, setShowError] = useState(false);
  const [isButtonLoading, setButtonLoading] = useState(false);

  const loginUser = async () => {
    try {
      setButtonLoading(true);

      const response = await login({ email, password });

      if (response.status === 200) {
        cookie.set(process.env.JWT_KEY as string, response.data.token);
        cookie.set("curier_id", response.data.curierId);
        router.push("/");
      }
      console.log(response);
    } catch (err) {
      console.log("err", err);
      setShowError(true);
      setButtonLoading(false);
    }
  };

  return (
    <div className={styles.main}>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        placeholder="email"
        type="text"
      ></input>
      <input
        onChange={(e) => {
          setPasswor(e.target.value);
        }}
        value={password}
        placeholder="password"
        type="password"
      ></input>

      {isShowError && <h5 className={styles.error}>Bad email or password</h5>}

      <Button onClick={loginUser} title="Login" isLoading={isButtonLoading} />
    </div>
  );
};

export default LoginForm;
