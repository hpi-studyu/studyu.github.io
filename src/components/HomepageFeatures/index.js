import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Discover the Power of N-of-1',
    Svg: require('@site/static/img/icons/body.svg').default,
    description: (
      <>
        N-of-1 trials enable participants to discover the	  
		individual effects of interventions on their health.
		StudyU provides the supporting digital foundation.
      </>
    ),
  },
  {
    title: 'Personalized by Design',
    Svg: require('@site/static/img/icons/fingerprint.svg').default,
    description: (
      <>
        N-of-1 trials focus on the individual &ndash; and so does StudyU.
		Conduct your own studies or partake in others. It&#39;s your choice.
      </>
    ),
  },
  {
    title: 'Open Source for Everyone',
    Svg: require('@site/static/img/icons/code-blocks-outline-rounded.svg').default,
    description: (
      <>
        StudyU is developed completely open source with self-hosting capabilities, 
		guaranteeing a maximum of transparency and data privacy.
      </>
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
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
