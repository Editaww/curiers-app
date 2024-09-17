import React, { useEffect, useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import CardWrapper from "@/Components/CardWrapper/CardWrapper";
import { Package } from "@/types/packages";
import { useRouter } from "next/router";
import PageTemplate from "@/Components/PageTemplate/PageTemplate";

const Home = () => {
  const [packages, setPackages] = useState<Package[]>([]);

  const router = useRouter();

  const curierId = cookie.get("curier_id");
  const jwt = cookie.get(process.env.JWT_KEY as string);

  const fetchPackages = async () => {
    try {
      const response = await axios.get(
        `${process.env.SERVER_URL}/packages/curier/${curierId}`
      );
      setPackages(response.data.packages);
      console.log(response.data.packages);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!jwt) {
      router.push("/login");
    }

    fetchPackages();
  }, []);

  return (
    <>
      <PageTemplate>
        <CardWrapper packages={packages} />
      </PageTemplate>
    </>
  );
};

export default Home;
