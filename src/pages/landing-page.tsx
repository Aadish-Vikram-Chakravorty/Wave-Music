import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./landing-page.module.css";

const LandingPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onDiscoverTextClick = useCallback(() => {
    navigate("/feature");
  }, [navigate]);

  const onJoinTextClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <div className={styles.landingPage}>
      <div className={styles.landingPageChild} />
      <div className={styles.landingPageItem} />
      <div className={styles.landingPageInner} />
      <img
        className={styles.landingPageGirl1Icon}
        alt=""
        src="/landingpagegirl-1@2x.png"
      />
      <div className={styles.feelTheMusic}>Feel The Music</div>
      <div className={styles.streamOver20}>
        Stream over 20 Thousand Songs with just one click
      </div>
      <div className={styles.button} onClick={onButtonContainerClick}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.joinNow}>Join Now</div>
        </div>
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

export default LandingPage;
