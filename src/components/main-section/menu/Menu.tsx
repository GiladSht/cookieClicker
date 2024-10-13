import { MenuOption } from "./menu-option/MenuOption";

import "./Menu.scss";

export function Menu() {
  return (
    <div className="panel">
      <div className="options-section">
        <MenuOption optionText="Options"></MenuOption>
        <MenuOption optionText="Stats"></MenuOption>
      </div>
      <div>
        <span className="random-line">some random sentence</span>
      </div>
      <div className="options-section">
        <MenuOption optionText="Info"></MenuOption>
        <MenuOption optionText="Legacy"></MenuOption>
      </div>
    </div>
  );
}
