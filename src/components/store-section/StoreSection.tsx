import { HorizontalSeparator } from "../general-components/separators/horizontal-separators/HorizontalSeparator";
import { BuildingStore } from "./store-header/buildings-store/BuildingStore";
import { StoreHeader } from "./store-header/StoreHeader";
import "./StoreSection.scss";
import { UpgradesStore } from "./upgrades-store/UpgradesStore";

export function StoreSection() {
  return (
    <div className="store-container">
      <StoreHeader />
      <HorizontalSeparator />
      <UpgradesStore />
      <HorizontalSeparator />
      <BuildingStore />
    </div>
  );
}
