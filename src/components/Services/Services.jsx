import React from "react";
import styles from "./Services.module.scss";

const Services = () => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.contents_block}>
          <h3>All of North Central Alabama</h3>
          <p>
            Inspections on a weekly, bi-weekly or monthly basis, as well as one-time spot
            inspections.
          </p>
          <span>Birmingham</span>
          <span>Tuscaloosa</span>
          <span>Smith Lake</span>
          <span>Lake Martin</span>
          <span>Lake Logan Martin</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
