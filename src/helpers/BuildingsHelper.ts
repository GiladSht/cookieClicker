import { UpgradeDetails } from "models/UpgradeModel";

export const buildingsDetails: { [key: string]: UpgradeDetails } = {
  curser: {
    name: "Curser",
    price: 15,
    description: "",
    quote: '"autoclicks every 10 seconds."',
    background: "assets/curserBuilding.png",
  },
  grandma: {
    name: "Grandma",
    price: 100,
    description: "",
    quote: '"A nice grandma to bake more cookies."',
    background: "assets/grandmaBuilding.png",
  },
};
