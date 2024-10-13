import "./App.scss";
import "./BaseStyle.scss";
import { CookieSection } from "./components/cookie-section/CookieSection";
import { useCookieState } from "./common/hooks/useCookiesState";
import { MainSection } from "./components/main-section/MainSection";
import { VerticalSeparator } from "./components/general-components/separators/vertical-separators/VerticalSeparator";
import { StoreSection } from "./components/store-section/StoreSection";

function App() {
  const { cookiesPerSecond, cookies, handleClick } = useCookieState();

  return (
    <div className="app">
      <CookieSection
        cookiesPerSecond={cookiesPerSecond}
        currentCookies={cookies}
        bakeryName="KinGilad"
        clickHandler={handleClick}
      />
      <VerticalSeparator />
      <MainSection />
      <VerticalSeparator />
      <StoreSection />
    </div>
  );
}

export default App;
