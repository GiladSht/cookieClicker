import { useState } from "react";
import "./BuildingStore.scss";
import { StoreSettings } from "./store-settings/StoreSettings";
import { ProductsAmount } from "enums/BuyingAmount";
import { BuildingProduct } from "./building-product/BuildingProduct";
import { buildingsDetails } from "helpers/BuildingsHelper";

export function BuildingStore() {
  const [isBuying, setIsBuying] = useState<boolean>(true);
  const [selectedFactor, setSelectedFactor] = useState<ProductsAmount>(
    ProductsAmount.X1
  );

  const changeSelectedFactor = (productsAmount: ProductsAmount) => {
    setSelectedFactor(productsAmount);
  };

  function ChangeStorePurpose() {
    setIsBuying(!isBuying);
  }
  return (
    <div>
      <StoreSettings
        selectedFactor={selectedFactor}
        isBuying={isBuying}
        changeSelectedFactor={changeSelectedFactor}
        changeStorePurpose={ChangeStorePurpose}
      />
      <BuildingProduct
        isAffordable={true}
        buildingDetails={buildingsDetails["curser"]}
      />
      <BuildingProduct
        isAffordable={false}
        buildingDetails={buildingsDetails["grandma"]}
      />
    </div>
  );
}
