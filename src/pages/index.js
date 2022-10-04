import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

import Admonition from "@theme/Admonition";

// import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          {siteConfig.title}
          {/* CodePod */}
        </h1>
        <p className="hero__subtitle">Coding on a canvas, more organized.</p>
        <Admonition type="info">
          <p>
            (new, 09/19/2022) We are open for internal testing. The v1 of the
            app:{" "}
            <Link
              to="https://relay.codepod.io"
              className="button button--secondary button--lg"
            >
              relay.codepod.io
            </Link>
          </p>
          <p>
            Please refer to the{" "}
            <Link to="https://youtu.be/3puYJ-rM46g">
              3 min tutorial video (in Chinese)
            </Link>{" "}
            for how to use it.
          </p>
        </Admonition>
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
        <hr />
        <div>
          <Box sx={{ flexGrow: 1, width: "80%", mx: "auto" }}>
            <Grid container spacing={2}>
              <Grid xs={6}>
                <Box>v1: Tree-based design</Box>
                <Item
                // sx={{
                //   width: "100px",
                // }}
                >
                  <img src="/img/tree-based.png" alt="an image" />
                </Item>
              </Grid>
              <Grid xs={6}>
                <Box>V2: Graph-based design</Box>
                <Item>
                  <img src="/img/graph-based.png" alt="an image" />
                </Item>
              </Grid>
              {/* <Grid xs={4}>
                <Item>xs=4</Item>
              </Grid>
              <Grid xs={8}>
                <Item>xs=8</Item>
              </Grid> */}
            </Grid>
          </Box>
        </div>
      </main>
    </Layout>
  );
}
