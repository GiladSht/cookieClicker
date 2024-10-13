import { Menu } from "./menu/Menu";
import "./MainSection.scss";
import { HorizontalSeparator } from "../general-components/separators/horizontal-separators/HorizontalSeparator";
import { BuildingsSection } from "./buildings-section/BuildingsSection";
export function MainSection() {
  return (
    <div className="main-section">
      <Menu />
      <HorizontalSeparator />
      <BuildingsSection />
    </div>
  );
}
