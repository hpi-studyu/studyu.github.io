import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: (<Translate>Discover the Power of N-of-1</Translate>),
    Svg: require('@site/static/img/icons/body.svg').default,
    description: (
      <Translate>
        N-of-1 trials enable participants to discover the	  
		individual effects of interventions on their health.
		StudyU provides the supporting digital foundation.
      </Translate>
    ),
  },
  {
    title: (<Translate>Personalized by Design</Translate>),
    Svg: require('@site/static/img/icons/fingerprint.svg').default,
    description: (
      <Translate>
        N-of-1 trials focus on the individual &ndash; and so does StudyU.
		Conduct your own studies or partake in others. It&#39;s your choice.
      </Translate>
    ),
  },
  {
    title: (<Translate>Open Source for Everyone</Translate>),
    Svg: require('@site/static/img/icons/code-blocks-outline-rounded.svg').default,
    description: (
      <Translate>
        StudyU is developed completely open source with self-hosting capabilities, 
		guaranteeing a maximum of transparency and data privacy.
      </Translate>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
  <div>
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
    <section className={styles.product_view}>
    <div className={"container"}>
    <div className={styles.parent}>
    <div className={styles.item}>
            <h3>The StudyU Designer</h3>
    <p>
    The StudyU Designer is a web-based application supporting the design and implementation of
    digital N-of-1 trials for clinicians, researchers, or digital health enthusiasts. With its
    user-centric design framework, the StudyU Designer improves usability with many supportive
    features during the study creation process. Notably, it includes a preview function that
    provides a real-time visualization of the study design. Besides running private N-of-1
    trials, seamless collaboration with other researchers is also supported by sharing studies,
    fostering collaboration and transparency in the spirit of public health and open science.
    </p>
    </div>
    <div className={styles.item, styles.last}>
     <img src="/img/product/designer/1.png" alt="Screenshot of the StudyU Designer" />
    </div>
    </div>
    </div>
    <div className={styles.margin3}></div>
    <div className={"container"}>
    <div className={styles.parent}>
    <div className={styles.item}>
            <h3>The StudyU App</h3>
    <p>
    The StudyU App is a user-friendly application that enables individuals to actively participate in
    digital N-of-1 trials and obtain personalized treatment advice. Its accessible design approach
    accommodates users with limited technical skills, allowing them to directly measure the impact
    of interventions on their health outcomes. By engaging patients in the trial process, the StudyU
    App promotes patient empowerment and facilitates shared decision-making between researchers,
    clinicians, and individuals. The StudyU App leverages the capabilities of statistical computing
    and advanced machine learning models to identify the optimal intervention tailored specifically
    to your unique needs and circumstances.
    </p>
    </div>
    <div className={styles.item, styles.last}>
     <img src="/img/product/app/placeholder.png" alt="Screenshot of the StudyU App" />
    </div>
    </div>
    </div>
    </section>
      </div>
  );
}
