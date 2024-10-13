import React, { useState } from "react";
import "./Upgrade.scss";
import { UpgradeDetails } from "../../../../models/UpgradeModel";
import { ItemMainDetails } from "../../../general-components/upgrade-details/item-main-details/ItemMainDetails";

interface UpgradeProps extends React.ComponentPropsWithoutRef<"div"> {
  upgradeDetails: UpgradeDetails;
  isAvailable: boolean;
  isAffordable: boolean;
}

export function Upgrade({
  upgradeDetails,
  isAvailable,
  isAffordable,
}: UpgradeProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div>
      <div
        className={`${isAvailable ? "upgrade-container" : " "} 
      ${isAffordable ? "" : "unaffordable"}`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <img
          className="upgrade"
          alt="cant load"
          src={upgradeDetails.background}
        ></img>
      </div>
      {showTooltip && (
        <div className="tooltip">
          <ItemMainDetails
            isAffordable={isAffordable}
            extraInfo="upgrade"
            mainUpgradeDetails={upgradeDetails}
          ></ItemMainDetails>
        </div>
      )}
    </div>
  );
}
