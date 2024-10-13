import "./BuildingProduct.scss";
import { ItemMainDetails } from "components/general-components/upgrade-details/item-main-details/ItemMainDetails";
import { useState } from "react";
import { UpgradeDetails } from "models/UpgradeModel";

interface BuildingProductProps extends React.ComponentPropsWithoutRef<"div"> {
  buildingDetails: UpgradeDetails;
  isAffordable: boolean;
}

export function BuildingProduct({
  buildingDetails,
  isAffordable,
}: BuildingProductProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="container">
      <div
        className="product-container"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <img src={buildingDetails.background} alt=""></img>
        <div className="product-details">
          <span className="product-name highlighted">
            {buildingDetails.name}
          </span>
          <span style={{ color: isAffordable ? "lightgreen" : "red" }}>
            <img
              className="price-icon"
              src="/assets/perfectCookie.png"
              alt="cant load"
            />
            {buildingDetails.price}
          </span>
        </div>
      </div>
      {showTooltip && (
        <div className="tooltip">
          <ItemMainDetails
            isAffordable={isAffordable}
            extraInfo="owned: 0"
            mainUpgradeDetails={buildingDetails}
          ></ItemMainDetails>
        </div>
      )}
    </div>
  );
}
