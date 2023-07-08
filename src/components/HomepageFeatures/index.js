import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


import Glider from 'react-glider';
import 'glider-js/glider.min.css';

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
    <ProductView />
    </div>
  );
}

export function ProductView({children}) {
    return (
        <section className={styles.productView}>
        <div className={"container"}>

          <ProductViewItem>
          <ProductViewText>
          <h3><a href="https://designer.studyu.health" target="_blank">The StudyU Designer</a></h3>
              <p>
              The StudyU Designer is a web-based application supporting the design and implementation of
              digital N-of-1 trials for clinicians, researchers, or digital health enthusiasts. With its
              user-centric design framework, the StudyU Designer improves usability with many supportive
              features during the study creation process. Notably, it includes a preview function that
              provides a real-time visualization of the study design. Besides running private N-of-1
              trials, seamless collaboration with other researchers is also supported by sharing studies,
              fostering collaboration and transparency in the spirit of public health and open science.
              <br />
              <br />
              <a href="/docs/designer/howto-designer">Check out our tutorial</a> to learn how to conduct
              your first digital N-of-1 trial with the StudyU Designer or start designing your
              first study now at <a href="https://designer.studyu.health" target="_blank">designer.studyu.health</a>.
              </p>

          </ProductViewText>
          <ProductViewGlider>
            <img src="/img/product/designer/1.png" alt="Screenshot of the StudyU Designer" />
                      <img src="/img/product/designer/2.png" alt="Screenshot of the StudyU Designer" />
                      <img src="/img/product/designer/3.png" alt="Screenshot of the StudyU Designer" />
          </ProductViewGlider>
          </ProductViewItem>
          <ProductViewItem>
              <ProductViewText>
                         <h3><a href="https://app.studyu.health" target="_blank">The StudyU App</a></h3>
                  <p>
          The StudyU App is a user-friendly application that enables individuals to actively participate in
          digital N-of-1 trials and obtain personalized treatment advice. Its accessible design approach
          accommodates users with limited technical skills, allowing them to directly measure the impact
          of interventions on their health outcomes. By engaging patients in the trial process, the StudyU
          App promotes patient empowerment and facilitates shared decision-making between researchers,
          clinicians, and individuals. The StudyU App leverages the capabilities of statistical computing
          and advanced machine learning models to identify the optimal intervention tailored specifically
          to your unique needs and circumstances.
           <br />
           <br />
           <a href="/docs/app/general-practitioner">Check out our tutorials</a> to
           learn how to use the StudyU App as a general practitioner or participant.
           StudyU is available as a mobile application or as a web version at: <a href="https://app.studyu.health" target="_blank">app.studyu.health</a>
            </p>
            <a target="_blank" href='https://play.google.com/store/apps/details?id=health.studyu.app'><img alt='Get it on Google Play' src='/img/google-play-badge.png' width="150" /></a>
            <span style={{margin: '10px'}}/>
            <a target="_blank" href='https://apps.apple.com/us/app/studyu-health/id1571991198?itsct=apps_box_link&itscg=30200'><img alt='Apple Download' src='/img/apple-black.svg' /></a>
              </ProductViewText>
              <ProductViewGlider>
               <img src="/img/product/app/placeholder.png" alt="Screenshot of the StudyU App" />
              </ProductViewGlider>
          </ProductViewItem>

        </div>
        </section>
    );
}

export function ProductViewItem({children}) {
  return (
    <div className={styles.parent}>
        {children}
    </div>
  );
}

export function ProductViewText({children}) {
  return (
    <div className={[styles.item, styles.productText].join(" ")}>
        {children}
    </div>
  );
}

export function ProductViewGlider({children}) {
return (
 <div className={styles.item}>
    <Glider
      draggable
      hasArrows
      hasDots
      resizeLock
      scrollLock
      scrollLockDelay={0}
      rewind
    >
       {children}
    </Glider>
    </div>
);
}

