import { ProductsAmount } from "enums/BuyingAmount";
import "./StoreSettings.scss";

interface StoreSettingsProps extends React.ComponentPropsWithoutRef<"div"> {
  isBuying: boolean;
  selectedFactor: ProductsAmount;
  changeStorePurpose: () => void;
  changeSelectedFactor: (selectedFactor: ProductsAmount) => void;
}

export function StoreSettings({
  selectedFactor,
  isBuying,
  changeStorePurpose,
  changeSelectedFactor,
}: StoreSettingsProps) {
  return (
    <div className="settings-container">
      <div className="store-purpose">
        <button
          onClick={changeStorePurpose}
          className={`factor ${isBuying ? "highlighted" : ""}`}
        >
          BUY
        </button>
        <button
          onClick={changeStorePurpose}
          className={`factor ${!isBuying ? "highlighted" : ""}`}
        >
          SELL
        </button>
      </div>

      <div className="factors-container">
        <div
          className={`factor ${
            selectedFactor === ProductsAmount.X1 ? "highlighted" : ""
          }`}
          onClick={() => changeSelectedFactor(ProductsAmount.X1)}
        >
          1
        </div>
        <div
          className={`factor ${
            selectedFactor === ProductsAmount.X10 ? "highlighted" : ""
          }`}          onClick={() => changeSelectedFactor(ProductsAmount.X10)}
        >
          10
        </div>
        <div
          className={`factor ${
            selectedFactor === ProductsAmount.X100 ? "highlighted" : ""
          }`}
          onClick={() => changeSelectedFactor(ProductsAmount.X100)}
        >
          100
        </div>
        {!isBuying && (
          <div
          className={`factor ${
            selectedFactor === ProductsAmount.ALL ? "highlighted" : ""
          }`}
            onClick={() => changeSelectedFactor(ProductsAmount.ALL)}
          >
            ALL
          </div>
        )}
      </div>
    </div>
  );
}
