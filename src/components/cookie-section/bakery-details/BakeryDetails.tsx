import "./BakeryDetails.scss";

interface BakeryDetailsProps extends React.ComponentPropsWithoutRef<'div'> {
    bakeryName: string,
    currentCookies: number,
    cookiesPerSecond: number
}

export function BakeryDetails({bakeryName, currentCookies, cookiesPerSecond} : BakeryDetailsProps) {
  return (
    <div className="container">
      <h1 className="bakery-name bakery-details">{bakeryName}'s bakery</h1>
      <div className="cookies-details bakery-details">
        <span className="current-cookies">{currentCookies} cookies</span>
        <span className="cookies-per-second">
          per second: {cookiesPerSecond}
        </span>
      </div>
    </div>
  );
}
