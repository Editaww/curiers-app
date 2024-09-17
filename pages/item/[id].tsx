import React, { useEffect, useState } from "react";
import axios from "axios";
import { Package } from "@/types/packages";
import { useRouter } from "next/router";
import Item from "../../Components/Item/Item";
import PageTemplate from "@/Components/PageTemplate/PageTemplate";

const ItemPage = () => {
  const [ispackage, setPackage] = useState<Package | null>(null);

  const router = useRouter();

  const fetchPackage = async () => {
    const fetchedPackage = await axios.get(
      `${process.env.SERVER_URL}/packages/${router.query.id}`
    );

    console.log(fetchedPackage.data.package);

    setPackage(fetchedPackage.data.package);
  };

  useEffect(() => {
    router.query.id && fetchPackage();
  }, [router.query.id]);

  return (
    <PageTemplate>
      <div>
        {ispackage && (
          <Item
            id={ispackage.id}
            recipientName={ispackage.recipientName}
            deliveryAddress={ispackage.deliveryAddress}
            weight={ispackage.weight}
            status={ispackage.status}
          />
        )}
      </div>
    </PageTemplate>
  );
};

export default ItemPage;
