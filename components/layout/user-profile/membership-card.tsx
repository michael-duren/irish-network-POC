import styles from './membership-card.module.css';

import { AiOutlineCheckCircle, AiOutlineIssuesClose } from 'react-icons/ai';
import Button from '@/components/ui/button';

type MemberShipCardProps = {
  isMembershipActive: boolean;
};

export default function MembershipCard({
  isMembershipActive = false,
}: MemberShipCardProps) {
  return (
    <>
      <h2>Membership Status</h2>
      <div className={styles.line}>
        <div>
          {isMembershipActive ? (
            <AiOutlineCheckCircle className={styles.iconActive} />
          ) : (
            <AiOutlineIssuesClose className={styles.iconNonActive} />
          )}
        </div>
        <div className={styles.lineitem}>
          {isMembershipActive ? (
            <p>Your Membership is currently active</p>
          ) : (
            <p>Your Memebership is not active</p>
          )}
        </div>
      </div>
      {isMembershipActive && (
        <div className={styles.line}>
          <p>
            Expiration: {'  '}
            {new Date().toLocaleDateString()}
          </p>
        </div>
      )}
      <div className={styles.line}>
        <Button buttonType="secondary" linkTo="/signup" function="link">
          {isMembershipActive ? 'Renew Early?' : 'Sign Up!'}
        </Button>
      </div>
    </>
  );
}
