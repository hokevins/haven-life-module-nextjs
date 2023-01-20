import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Footer from '../../components/footer'
import Customers from '../../components/customers'

// This will ensure data is passed as props from Home -> Customers
// Alternatively, see components/customers.js to see component-level data fetching
// Trade off is between initial loading time and initial page weight between index page and Customer component
import { getCustomersData } from '../../lib/customers'
export async function getServerSideProps() {
  const allCustomersData = await getCustomersData();
  return {
    props: {
      allCustomersData,
    },
  };
  // TODO: Add error handling and error page
}

export default function Home({ allCustomersData }) {
  return (
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
  );
}
