import React from "react";
import { Cookie } from "./cookie/Cookie";
import "./CookieSection.scss";
import { BakeryDetails } from "./bakery-details/BakeryDetails";
import { MilkSection } from "./milk-section/MilkSection";

interface CookieSectionProps extends React.ComponentPropsWithoutRef<"div"> {
  clickHandler: () => void;
  bakeryName: string;
  currentCookies: number;
  cookiesPerSecond: number;
}

export function CookieSection({
  clickHandler,
  bakeryName,
  currentCookies,
  cookiesPerSecond,
  ...props
}: CookieSectionProps) {
  return (
    <div className="cookie-section">
      <BakeryDetails
        bakeryName={bakeryName}
        currentCookies={currentCookies}
        cookiesPerSecond={cookiesPerSecond}
      ></BakeryDetails>
      <Cookie clickHandler={clickHandler}></Cookie>
      <MilkSection />
    </div>
  );
}
