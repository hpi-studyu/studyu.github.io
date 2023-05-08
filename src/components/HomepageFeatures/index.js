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
