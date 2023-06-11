import React from "react";
import styles from "./CaptionWrapper.module.css";
export default function CaptionWrapper(props) {
  return (
    <figure>
      {props.children}
      <figcaption className={styles.figcaption}>{props.caption}</figcaption>
    </figure>
  );
}