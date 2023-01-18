import Link from 'next/link';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      {/* Used when doing page-level data fetching */}
      <Link className={styles.refresh} onClick={() => window.location.reload()} href="/">Refresh</Link>

      {/* Used when doing component-level data fetching */}
      {/*<a className={styles.refresh} onClick={() => window.location.reload()} href="/">Refresh</a>*/}

    </div>
  );
}
