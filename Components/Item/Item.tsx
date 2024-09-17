import React, { useState } from "react";
import styles from "./styles.module.css";
import Button from "../Button/Button";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import axios from "axios";
import Modal from "../Modal/Modal";

type ItemProps = {
  id: string;
  recipientName: string;
  deliveryAddress: string;
  weight: number;
  status: string;
};

const Item = ({
  id,
  recipientName,
  deliveryAddress,
  weight,
  status,
}: ItemProps) => {
  const router = useRouter();
  const jwt = cookie.get(process.env.JWT_KEY as string);

  const [isModalOpen, setModalOpen] = useState(false);
  const [packageToDelete, setPackageToDelete] = useState<string | null>(null);

  const deletePackage = async (packageId: string) => {
    try {
      const headers = {
        authorization: jwt,
      };

      const response = await axios.delete(
        `${process.env.SERVER_URL}/packages/${packageId}`,
        {
          headers,
        }
      );

      if (response.status === 200) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const confirmDelete = () => {
    setModalOpen(true);
    setPackageToDelete(id);
  };

  const deleteConfirmation = () => {
    if (packageToDelete) {
      deletePackage(packageToDelete);
      setModalOpen(false);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.itemInfo}>
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
        <Button
          title="Delete Package"
          onClick={confirmDelete}
          isLoading={false}
          type="DANGER"
        />
      </div>

      {isModalOpen && (
        <Modal
          title={"Delete Package?"}
          subtitle={"Are you sure you want to delete this package?"}
          onConfirm={deleteConfirmation}
          onModalClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Item;
