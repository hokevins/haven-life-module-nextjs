import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <Link className={styles.refresh} href="/">Refresh</Link>
    </div>
  );
}
