import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import tooTsai from "@site/static/img/tooTsaiIsLuv.jpeg";
import mountainClimbing from "@site/static/img/mountainClimbing.jpeg";
import realGang from "@site/static/img/engineerIsWhoIAm.JPG";
const FeatureList = [
  {
    title: "Loving and Family power",
    pic: tooTsai,
    description: (
      <>
        LinHeMa loves will always put his family and friends at No.1 place. And
        his dog TooTsai at No.0 place.
      </>
    ),
  },
  {
    title: "Outdoor",
    pic: mountainClimbing,
    description: (
      <>Apart from coding, LinHeMa also enjoys outdoor activities.</>
    ),
  },
  {
    title: "Solving Real World Problems",
    pic: realGang,
    description: (
      <>
        As a developer, Carpal Tunnel Syndrome needs to be dealt with.LinHeMa
        using his tech Brain with some basic welding technology, fixing his
        wrists.
      </>
    ),
  },
];

function Feature({ Svg, title, description, pic }) {
  return (
    <div className={`${clsx("col col--4")} justify-between space-y-4` }>
      <div
        className="text--center "
      >
        <img src={pic} />
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className="text-xl font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
