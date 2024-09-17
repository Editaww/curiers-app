import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

type CardProps = {
  id: string;
  recipientName: string;
  deliveryAddress: string;
  weight: number;
  status: string;
};

const Card = ({
  id,
  recipientName,
  deliveryAddress,
  weight,
  status,
}: CardProps) => {
  return (
    <Link href={`/item/${id}`} className={styles.main}>
      <div className={styles.itemLine}>
        <p>Recipient Name:</p>
        <h3>{recipientName}</h3>
      </div>
      <div className={styles.itemLine}>
        <p>Delivery Address:</p>
        <h3>{deliveryAddress}</h3>
      </div>
      <div className={styles.itemLine}>
        <p>Weight kg.</p>
        <h4>{weight}</h4>
      </div>
      <div className={styles.itemLine}>
        <p>Status:</p>
        <h4>{status}</h4>
      </div>
    </Link>
  );
};

export default Card;
