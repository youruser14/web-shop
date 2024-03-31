import React from "react";
import Products from "../components/Products";

const goods = [
  {
    categoryTitle: "Наушники",
    categoryGoods: [
      {
        id: 1,
        img: "Apple-byz.png",
        title: "Apple BYZ S852I",
        price: 2927,
        discount: 3527,
        rate: 4.7,
      },
      {
        id: 2,
        img: "Apple-earPods.png",
        title: "Apple EarPods",
        price: 2327,
        discount: 0,
        rate: 4.5,
      },
      {
        id: 3,
        img: "Apple-earPods-case.png",
        title: "Apple EarPods",
        price: 2327,
        discount: 0,
        rate: 4.5,
      },
      {
        id: 4,
        img: "Apple-byz.png",
        title: "Apple BYZ S852I",
        price: 2927,
        discount: 0,
        rate: 4.7,
      },
      {
        id: 5,
        img: "Apple-earPods.png",
        title: "Apple EarPods",
        price: 2327,
        discount: 0,
        rate: 4.5,
      },
      {
        id: 6,
        img: "Apple-earPods-case.png",
        title: "Apple EarPods",
        price: 2327,
        discount: 0,
        rate: 4.5,
      },
    ],
  },
  {
    categoryTitle: "Беспроводные наушники",
    categoryGoods: [
      {
        id: 7,
        img: "wirelessAirPods.png",
        title: "Apple AirPods",
        price: 9527,
        discount: 0,
        rate: 4.7,
      },
      {
        id: 8,
        img: "wireless-gerlax-gh-04.png",
        title: "GERLAX GH-04",
        price: 6257,
        discount: 0,
        rate: 4.7,
      },
      {
        id: 9,
        img: "Borofone-b04.png",
        title: "BOROFONE BO4",
        price: 7527,
        discount: 0,
        rate: 4.7,
      },
    ],
  },
];

const Main = () => {
  return (
    <div>
      <Products goods={goods} />
    </div>
  );
};

export default Main;
