import type { NextPage } from "next";
import Head from "next/head";
import { Prices } from "../components/Services/Prices";
import styles from "../styles/Service.module.scss";
import { AboutHeader } from "../components/About/header";
import { ServicesHeader } from "../components/Services/header";
import { useState } from "react";
const Home: NextPage = () => {
  const [showPics, setShowPics] = useState(false);
  return (
    <>
      <Head>
        <title>Bimba | Usluge</title>
        <link rel="shortcut icon" href="/bimba.svg" />
      </Head>
      <ServicesHeader />
      <Prices
        openBasket={() => {
          setShowPics((prev) => !prev);
        }}
      />
      <Prices
        openBasket={() => {
          setShowPics((prev) => !prev);
        }}
      />
      <Prices
        openBasket={() => {
          setShowPics((prev) => !prev);
        }}
      />
      <Prices
        openBasket={() => {
          setShowPics((prev) => !prev);
        }}
      />

      <div className={styles.Drawer} style={showPics ? { transform: "translateX(0)" } : {}}>
        add to box
      </div>
    </>
  );
};

export default Home;
