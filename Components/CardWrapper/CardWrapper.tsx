import React from "react";
import styles from "./styles.module.css";
import Card from "../Card/Card";
import { Package } from "@/types/packages";

type CardWrapperProps = {
  packages: Package[];
};

const CardWrapper = ({ packages }: CardWrapperProps) => {
  return (
    <div className={styles.main}>
      {packages.map((p) => {
        return (
          <Card
            key={p.id}
            id={p.id}
            recipientName={p.recipientName}
            deliveryAddress={p.deliveryAddress}
            weight={p.weight}
            status={p.status}
          />
        );
      })}
    </div>
  );
};

export default CardWrapper;
