import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./feature.module.css";

const Feature: FunctionComponent = () => {
  const navigate = useNavigate();

  const onDiscoverTextClick = useCallback(() => {
    navigate("/feature");
  }, [navigate]);

  const onJoinTextClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <div className={styles.feature}>
      <img className={styles.covers1Icon} alt="" src="/covers-1@2x.png" />
      <div className={styles.discoverNewMusic}>Discover New Music</div>
      <div className={styles.frame} />
      <div className={styles.frame1} />
      <div className={styles.frame2} />
      <div className={styles.chartsCard}>
        <div className={styles.chartsCardChild} />
        <div className={styles.charts}>Charts</div>
        <img className={styles.chartsIcon} alt="" src="/charts.svg" />
      </div>
      <div className={styles.moreCard}>
        <div className={styles.chartsCardChild} />
        <div className={styles.more}>More</div>
        <img
          className={styles.clipPathGroup}
          alt=""
          src="/clip-path-group@2x.png"
        />
      </div>
      <div className={styles.albumCars}>
        <div className={styles.chartsCardChild} />
        <div className={styles.album}>Album</div>
        <img
          className={styles.clipPathGroup1}
          alt=""
          src="/clip-path-group.svg"
        />
      </div>
      <div className={styles.joinToListen}>
        Join to listen your favorite artists and groove to their latest songs
      </div>
      <div className={styles.nav}>
        <div className={styles.discover} onClick={onDiscoverTextClick}>
          Discover
        </div>
        <div className={styles.join} onClick={onJoinTextClick}>
          Join
        </div>
        <img className={styles.finalLogoIcon} alt="" src="/final-logo@2x.png" />
        <div className={styles.waveMusic}>Wave Music</div>
      </div>
    </div>
  );
};

export default Feature;
