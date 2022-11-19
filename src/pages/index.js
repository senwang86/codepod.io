import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import CodeBlock from "@theme/CodeBlock";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import WhyIn3 from "../components/WhyIn3";

import Admonition from "@theme/Admonition";

// import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from '@mui/material/Typography';

import Stack from "@mui/material/Stack";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


const FeatureTextContent = {
  introTitle: `
Jupyter-like but scable and production-ready.
  ` ,
  introText:   `
Codepod gives you the same interactive or exploratory coding experinence. 
  <br/>But your notebook will not get messy nor will you need to remove and 
  rearrange cells when moving to production. 
  `  , 
};

function WhatIsNew() {
  return (
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
        [11/06/2022] v0.4.3 is online,{" "}
        <Link
          to="https://app.codepod.io"
          // className="button button--secondary button--lg"
        >
          try it here
        </Link>{" "}
        , featuring <b>k8s runtime spawner</b>, better runtime management,
        http proxy, and various bug fixes.
      </Item>
      {/* <Item
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
      </Item> */}
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
  ) 
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          {siteConfig.title}
          {/* CodePod */}
        </h1>
        <p className="hero__subtitle">{`${siteConfig.tagline}`}</p>
        <Box sx={{ my: 3 }}>
          <div className="container">
            <Box
              sx={{
                mx: 3,
              }}
              component="span"
            >
              <Link
                className="button button--secondary button--lg"
                to="https://app.codepod.io"
              >
                Try coding on a canvas!
              </Link>
            </Box>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/codepod-io/codepod"
            >
              See the source code
            </Link>
          </div>
        </Box>

        {/* <WhatIsNew /> */}
      </div>
    </header>
  );
}

function TextColumn({title, text, moreContent}) {
  return (
    <>
      <h2 className="Heading">{title}</h2>
      {/* <Heading text={title} /> */}
      <div dangerouslySetInnerHTML={{__html: text}} />
      {moreContent}
    </>
  );
}


export function Section({
  element = 'section',
  children,
  className,
  background = 'light',
}) {
  const El = element;
  return (
    <El
      className={
        className
          ? `Section ${className} ${background}`
          : `Section ${background}`
      }>
      {children}
    </El>
  );
}


// From ReactNative 
function TwoColumns({columnOne, columnTwo, reverse}) {
  return (
    <div className={`TwoColumns ${reverse ? 'reverse' : ''}`}>
      <div className={`column first ${reverse ? 'right' : 'left'}`}>
        {columnOne}
      </div>
      <div className={`column last ${reverse ? 'left' : 'right'}`}>
        {columnTwo}
      </div>
    </div>
  );
}

function Feature1() {
  return (
    <Section className="Feature1" background="light">
      <TwoColumns
        columnOne={
          <TextColumn
            title={FeatureTextContent.introTitle}
            // text={textContent.introText}
          />
         }
        columnTwo={
          <TextColumn
            text={FeatureTextContent.introText}
          />
        }
      />
    </Section>
  );
}

function Contactus() {
  return (
    <Section className="Feature1" background="light">
      <TwoColumns
        columnOne={
          <TextColumn
            title="Contact us"
            // text={textContent.introText}
          />
         }
        columnTwo={
          <TextColumn
            text="invest@codepod.team"
          />
        }
      />
    </Section>
  );
}



function Team() {
  return (
    <Section className="Feature1" background="tint">
      <TwoColumns
        columnOne={
          <TextColumn
            title="Hebi Li, CEO, co-founder"
            text="Hebi is an ex-Google-Brainer and an ex-ByteDancer. 
            <a href='https://lihebi.com'>https://lihebi.com</a>"
          />
         }
        columnTwo={
          <TextColumn
            title = "Forrest Bao, co-founder"
            text="Forrest is an AI veteran and series entrepreneur. 
            <a href='https://forrestbao.github.io'>https://forrestbao.github.io</a>"
          />
        }
      />
    </Section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}
    >
      <HomepageHeader />
      <main>
        <WhyIn3 />
        <div>
          <Box sx={{ flexGrow: 1, width: "80%", mx: "auto",  justifyContent:"center" }}>
            {/* <h3 align="center">Spread your code cells in 2D on a canvas with hierarchy and namespace management! </h3> */}
            <a href="/img/graph_based_LDA.png"><img src="/img/graph_based_LDA.png" alt="Product screenshot" /></a>
          </Box>
        </div>
        <HomepageFeatures />
        {/* <Feature1 />  */}
        <Team /> 
        <Contactus />
      </main>
    </Layout>
  );
}


// It addresses the scalability issue of Jupyter that a large notebook is messy and hard to manage. CodePod offers freeform coding on a hierarchical 2D canvas to spatially and semantically organize code. It brings scalability and production-readiness to interactive/exploratory coding for Data Science, Machine Learning, and any coding scenario.