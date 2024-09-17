import React, { useState } from "react";
import styles from "./styles.module.css";
import Button from "../Button/Button";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import axios from "axios";

const CreateItemForm = () => {
  const [recipientName, setRecipientName] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [weight, setWeight] = useState("");
  const [status, setStatus] = useState("");
  const [isShowError, setShowError] = useState(false);

  const router = useRouter();

  const jwt = cookie.get(process.env.JWT_KEY as string);

  const addPackage = async () => {
    try {
      const body = {
        recipientName: recipientName,
        deliveryAddress: deliveryAddress,
        weight: weight,
        status: status,
      };

      const headers = {
        authorization: jwt,
      };

      const response = await axios.post(
        `${process.env.SERVER_URL}/packages`,
        body,
        {
          headers,
        }
      );

      if (response.status === 201) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
      setShowError(true);
    }
    // console.log(response);
  };

  return (
    <div className={styles.main}>
      <input
        value={recipientName}
        placeholder="Recipient Name"
        type="text"
        onChange={(e) => {
          setRecipientName(e.target.value);
        }}
      />
      <input
        value={deliveryAddress}
        placeholder="Delivery Address"
        type="text"
        onChange={(e) => {
          setDeliveryAddress(e.target.value);
        }}
      />
      <input
        value={weight}
        placeholder="Weight kg."
        type="text"
        onChange={(e) => {
          setWeight(e.target.value);
        }}
      />
      <input
        value={status}
        placeholder="Status"
        type="text"
        onChange={(e) => {
          setStatus(e.target.value);
        }}
      />
      {isShowError && (
        <h5 className={styles.error}>All fields must be entered</h5>
      )}

      <Button
        isLoading={false}
        title="Add Package"
        onClick={() => {
          addPackage();
        }}
      />
    </div>
  );
};

export default CreateItemForm;
