import "./Cookie.scss";

interface CookieProps extends React.ComponentPropsWithoutRef<"button"> {
  clickHandler: () => void;
}

export function Cookie({ clickHandler, ...props }: CookieProps) {
  return (
    <div className="cookie-container">
      <div className="cookie-background">
      </div>
        <button
          type="button"
          onClick={clickHandler}
          className="cookie"
        ></button>
    </div>
  );
}
