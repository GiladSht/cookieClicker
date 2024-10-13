import { UpgradeDetails } from "../models/UpgradeModel";

export const upgradesDetails: { [key: string]: UpgradeDetails } = {
  blueCurser: {
    name: "blue curser",
    price: 100,
    background: "assets/blueCurser.png",
    description: "the mouse and cursers are twice as efficient",
    quote: '"prod prod"',
  },
  pinkCurser: {
    name: "pink curser",
    price: 200,
    background: "assets/pinkCurser.png",
    description: "the mouse and cursers are twice as efficient",
    quote: '"it... it hurts to click"',
  },
};
