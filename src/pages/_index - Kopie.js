import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
			<Translate>N-Of-1 Trials Made Easy! The only available fully-functional platform for personalized treatment.</Translate>
		</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://app.studyu.health" style={{marginRight: '3em'}}>
            For Participants:<br/>StudyU App
          </Link>
		  <Link
            className="button button--secondary button--lg"
            to="https://designer.studyu.health">
            For Researchers:<br/>StudyU Designer
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
