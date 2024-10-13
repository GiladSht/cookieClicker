import React from "react";
import './MenuOption.scss'

interface MenuOptionProps extends React.ComponentPropsWithoutRef<"div"> {
  optionText: string;
}

export function MenuOption({ optionText }: MenuOptionProps) {
  return (
    <div className="option-container">
      <button className="option">{optionText}</button>
     </div>
  );
}
