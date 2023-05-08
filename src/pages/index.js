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
        <h1 className="hero__title">N-Of-1 Trials Made Easy!</h1>
        <p className="hero__subtitle">
			<Translate>StudyU is the only available fully&#8209;functional platform</Translate><br/><Translate>for personalized N&#8209;of&#8209;1 treatment advice.</Translate>
		</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://designer.studyu.health" style={{marginRight: '3em'}}>
            Design a new study
          </Link>
		  <Link
            className="button button--secondary button--lg"
            to="https://app.studyu.health">
            Join a running study
          </Link>
        </div>
      </div>
	  <img src={require('@site/static/img/icon_wide.png').default} className={clsx('', styles.heroLogo)}/>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  /* TODO Our partners */
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
