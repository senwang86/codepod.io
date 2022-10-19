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

import Stack from "@mui/material/Stack";

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
        <Admonition type="info" title="What's new">
          <Stack spacing={2}>
            <Item
              sx={{
                textAlign: "start",
              }}
            >
              [coming soon] We're working on a new more intuitive
              namespace-aware runtime, auto-layout engine, and real-time
              collaboration.
            </Item>
            <Item
              sx={{
                textAlign: "start",
              }}
            >
              [10/17/2022]{" "}
              <Link
                to="/docs/codepod/v0.4.2.graph-based.tutorial"
                // className="button button--secondary button--lg"
              >
                v0.4.2 is online (blog post)
              </Link>{" "}
              , featuring <b>graph-based interface</b> and k8s deployment.
            </Item>
            <Item
              sx={{
                textAlign: "start",
              }}
            >
              [09/19/2022]{" "}
              <Link
                to="https://relay.codepod.io"
                // className="button button--secondary button--lg"
              >
                v0.3.0 is online.
              </Link>{" "}
              We are open for internal testing for{" "}
              <b>our first public release</b>. Please refer to the{" "}
              <Link to="https://youtu.be/3puYJ-rM46g">
                3 min tutorial video (in Chinese)
              </Link>{" "}
              for how to use it.
            </Item>
          </Stack>
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
