import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Footer from '../../components/footer'
import Customers from '../../components/customers'
import { SyncLoader } from 'react-spinners';

// This will ensure data is passed as props from Home -> Customers
// Alternatively, see components/customers.js to see component-level data fetching
// Trade off is between initial loading time and initial page weight
import { getCustomersData } from '../../lib/customers'
export async function getStaticProps() {
  const allCustomersData = await getCustomersData();
  return {
    props: {
      allCustomersData,
    },
  };
}

export default function Home({ allCustomersData }) {
  return (
    allCustomersData.length === 4 ?
      <>
        <Head>
          <title>Welcome to Haven Life!</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main>
          <div className="root-container">
            <div className={styles.container}>
              <div className={styles.title}>Our Newest Customers</div>
              <Customers allCustomersData={allCustomersData} />
              <Footer />
            </div>
          </div>
        </main>
      </>
    :
      <div className="loading-state">
        <SyncLoader
          color="#1bb1dc"
          loading={true}
        />
        Loading...
        <div style={{ color: '#1bb1dc', fontSize : 22 }}>
          Error Loading Data
        </div>
      </div>
  );
}
