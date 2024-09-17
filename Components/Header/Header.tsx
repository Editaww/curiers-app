import React, { useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import Button from "../Button/Button";

type HeaderProps = {
  logo: string;
  isUserLoggedIn: boolean;
};

const Header = ({ logo, isUserLoggedIn }: HeaderProps) => {
  const [isButtonLoading, setButtonLoading] = useState(false);

  const router = useRouter();

  const singOutUser = () => {
    setButtonLoading(true);
    cookie.remove(process.env.JWT_KEY as string);

    router.push("/login");
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>{logo}</div>
      {isUserLoggedIn && (
        <div className={styles.linkWrapper}>
          <ul>
            <li>
              <Link href="/createItem">Create Package</Link>
              <Button
                onClick={singOutUser}
                title="Sign Out"
                isLoading={isButtonLoading}
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
