import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import styles from "./index.module.css"
import HomepageFeatures from "@site/src/components/HomepageFeatures"

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Recompo`}
      description="Recompo is a free and open-source project that is designed for customizability and speed and is easy to use and powerful. "
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
