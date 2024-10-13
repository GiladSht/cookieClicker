import { UpgradeDetails } from "../../../../models/UpgradeModel";
import "./ItemMainDetails.scss";

interface ItemMainDetailsProps extends React.ComponentPropsWithoutRef<"div"> {
  mainUpgradeDetails: UpgradeDetails;
  extraInfo: string;
  isAffordable: boolean;
}

export function ItemMainDetails({
  mainUpgradeDetails,
  extraInfo,
  isAffordable,
}: ItemMainDetailsProps) {
  return (
    <div className="item-container">
      <div className="main-details">
        <img
          alt="cant load"
          src={mainUpgradeDetails.background}
          className="picture"
        />
        <div className="details">
          <span className="item-name highlighted">
            {mainUpgradeDetails.name}
          </span>
          <span className="extra-info">{extraInfo}</span>
        </div>
        <div>
          <span style={{ color: isAffordable ? "lightgreen" : "red" }}>
            <img
              className="price-icon"
              src="/assets/perfectCookie.png"
              alt="cant load"
            ></img>
            {mainUpgradeDetails.price}
          </span>
        </div>
      </div>
      <div className="description-container">
        <span className="description">{mainUpgradeDetails.description}</span>
        <span className="quote">{mainUpgradeDetails.quote}</span>
      </div>
    </div>
  );
}
