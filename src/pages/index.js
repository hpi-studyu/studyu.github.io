import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './index.module.css';
import Head from '@docusaurus/Head';

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
            <Translate>Design a new study</Translate>
          </Link>
		  <Link
            className="button button--secondary button--lg"
            to="/docs/app/overview">
            <Translate>Join a running study</Translate>
          </Link>
        </div>
      </div>
	  <img src={'/img/icon_wide.png'} className={clsx('', styles.heroLogo)} alt="StudyU Logo" />
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      /*title={`${siteConfig.title}`}*/
      description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section>
        <div className={styles.partnertitle}>StudyU in clinical studies in collaboration with:</div>
            <a href="/docs/basics/studies">
            <div className={styles.wrapper}>
              <img src="/img/partner/hpims.svg" alt="HPI Mount Sinai" loading="lazy" />
              <img src="/img/partner/mount_sinai.svg" alt="Mount Sinai" loading="lazy" />
              <img src="/img/partner/weill_cornell.svg" alt="Weill Cornell" loading="lazy" />
              <img src="/img/partner/university_queensland.svg" alt="University of Queensland" loading="lazy" />
              <img src="/img/partner/uk_eppendorf.svg" alt="Universitätsklinikum Hamburg-Eppendorf" loading="lazy" />
            </div>
            </a>
        </section>
      </main>
    </Layout>
  );
}
