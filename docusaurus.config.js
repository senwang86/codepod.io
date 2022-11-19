// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CodePod",
  tagline: "Canvas-based Hierarchical and Scalable Exploratory Coding",
  url: "https://codepod.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "codepod-io", // Usually your GitHub org/user name.
  projectName: "codepod", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: [ 
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/index.scss"),
            require.resolve("./src/css/_shared.scss"),
            // require.resolve("./src/components/container/container.scss"),
            // require.resolve("./src/components/heading/heading.scss"),
            // require.resolve("./src/sections/why.scss"),
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "CodePod",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "codepod/tutorial",
            position: "left",
            label: "Tutorial",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          // {
          //   href: "https://github.com/lihebi/codepod",
          //   label: "GitHub",
          //   position: "right",
          // },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/codepod/tutorial",
              },
            ],
          },
          // {
          //   title: "Team",
          //   items: [
          //        {
          //          label: "Hebi Li, CEO/co-founder",
          //          href: "https://lihebi.com/",
          //        },
          //        {
          //         label: "Forrest Bao, co-founder",
          //         href: "https://forrestbao.github.io",
          //       },
          //   ],
          // },
          {
            title: "Community",
            items: [
          //     {
          //       label: "Stack Overflow",
          //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
          //     },
          //     {
          //       label: "Discord",
          //       href: "https://discordapp.com/invite/docusaurus",
          //     },
          //     {
          //       label: "Twitter",
          //       href: "https://twitter.com/docusaurus",
          //     },
                 {
                   label: "GitHub",
                   href: "https://github.com/codepod-io/codepod",
                 },
            ],
          },
          // {
          //   title: "More",
          //   items: [
          //     {
          //       label: "Blog",
          //       to: "/blog",
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CodePod, Inc. Built with Docusaurus.`,
      },
      // prism: {
      //   theme: lightCodeTheme,
      //   darkTheme: darkCodeTheme,
      // },
    }),
    plugins: ['docusaurus-plugin-sass'],
};

module.exports = config;
