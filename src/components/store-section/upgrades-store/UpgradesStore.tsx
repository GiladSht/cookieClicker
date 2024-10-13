import { upgradesDetails } from "../../../helpers/UpgradesHelper";
import { Upgrade } from "./upgrade/Upgrade";
import "./UpgradesStore.scss";

export function UpgradesStore() {
  return (
    <div className="upgrades-store">
      <Upgrade
        upgradeDetails={upgradesDetails["blueCurser"]}
        isAvailable={true}
        isAffordable={true}
      />
      <Upgrade
        upgradeDetails={upgradesDetails["pinkCurser"]}
        isAvailable={true}
        isAffordable={false}
      />
    </div>
  );
}
