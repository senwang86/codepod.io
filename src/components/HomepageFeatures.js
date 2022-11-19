import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList1 = [
  {
    title: "Jupyter-like interactive, exploratory coding",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        {/* Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly. */}
        CodePod keep the interative, exploratory REPL experience of Jupyter. 
        <br />
        You can create and try out a small code snippet each time, and 
        incrementally build up your project. 
      </>
    ),
  },
  {
    title: "For large projects",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        {/* Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go */}
        {/* ahead and move your docs into the <code>docs</code> directory. */}
        Jupyter notebooks get messy easily. 
        But Codepod canvas won't. 
        <br /> 
        You can place a code cell anywhere on a 2D canvas 
        so you can cluster code cells as sorting files. 
      </>
    ),
  },
  {
    title: "Production-ready",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        {/* Extend or customize your website layout by reusing React. Docusaurus can */}
        {/* be extended while reusing the same header and footer. */}
        A Jupyter notebook always contain many small test-out code 
        all over the place. Cleaning them up before production is a pain. 
        Codepod allows you to sort/create cells under different groups. 
        When generating production code, simply select the groups to export. 
      </>
    ),
  },
];

const FeatureList2 = [
  {
    title: "Open-source",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Like you, we believe in open-source. You can find our{" "}
        <a href="https://github.com/codepod-io/codepod" target="_blank">
          source code
        </a>{" "}
        on GitHub. We'd like your contribution to make it better!
      </>
    ),
  },
  {
    title: "Zoom in and out your code",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        {/* Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go */}
        {/* ahead and move your docs into the <code>docs</code> directory. */}
        In CodePod, you can zoom out to see the big picture,
        as well as zoom in to a line. Just a swipe or scroll. 
        No more going up and down the folder hierarchy and close and open a series of files or tabs.         
      </>
    ),
  },
  {
    title: "Any language, and any domain",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        {/* Extend or customize your website layout by reusing React. Docusaurus can */}
        {/* be extended while reusing the same header and footer. */}
        Codepod's dream is to expand REPL or the interactive or exploratory coding 
        experience from Data Science and Machine Learning (dominated by Python), 
        to any domain and any programming language. 
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div> */}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
          {FeatureList1.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row">
          {FeatureList2.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
