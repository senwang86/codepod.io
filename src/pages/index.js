import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

import Admonition from "@theme/Admonition";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          {siteConfig.title}
          {/* CodePod */}
        </h1>
        <p className="hero__subtitle">
          {/* {siteConfig.tagline} */}A{" "}
          <span
            style={{
              color: "black",
              background: "greenyellow",
              borderRadius: "5px",
            }}
          >
            Hierarchical Jupyter
          </span>{" "}
          for{" "}
          <span
            style={{
              marginRight: "2px",
              color: "black",
              background: "yellow",
              borderRadius: "5px",
            }}
          >
            Scalable
          </span>
          <span
            style={{
              color: "black",
              background: "cyan",
              borderRadius: "5px",
            }}
          >
            Interactive Development
          </span>
        </p>
        <Admonition type="caution">
          <p>Site Under Construction. Expected release March 2022</p>
        </Admonition>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
