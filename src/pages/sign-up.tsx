import { FunctionComponent } from "react";
import styles from "./sign-up.module.css";

const SignUp: FunctionComponent = () => {
  return (
    <div className={styles.signup}>
      <div className={styles.signupChild} />
      <div className={styles.username}>Username:</div>
      <div className={styles.signupItem} />
      <div className={styles.password}>Password:</div>
      <div className={styles.signupInner} />
      <div className={styles.email}>Email:</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.button}>
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <div className={styles.joinNow}>Join Now</div>
        </div>
      </div>
      <div className={styles.ellipseDiv} />
      <div className={styles.signupChild1} />
      <div className={styles.signupChild2} />
      <div className={styles.signupChild3} />
      <div className={styles.signupChild4} />
      <img className={styles.frameIcon} alt="" src="/frame@2x.png" />
      <div className={styles.aboutUs}>About us:</div>
      <div className={styles.contactUs917992188988}>
        Contact us: +91-7992188988
      </div>
      <div className={styles.emailAadishchakravortygmail}>
        Email: aadishchakravorty@gmail.com
      </div>
      <div className={styles.twitter}>Twitter</div>
    </div>
  );
};

export default SignUp;
