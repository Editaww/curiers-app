// import React from "react";
import styles from "./styles.module.css";
import Spinner from "../Spinner/Spinner";

type ButtonProps = {
  onClick: () => void;
  title: string;
  isLoading: boolean;
  type?: string;
};
const Button = ({ onClick, title, isLoading, type }: ButtonProps) => {
  return (
    <button
      className={`${styles.main} ${type === "DANGER" && styles.danger}`}
      onClick={onClick}
    >
      {isLoading ? <Spinner /> : <> {title}</>}
    </button>
  );
};

export default Button;
