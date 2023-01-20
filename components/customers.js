import Image from 'next/image';
import styles from './customers.module.css';
import { useState, useEffect } from 'react';
import { getCustomersData } from '../lib/customers'
import { SyncLoader } from 'react-spinners';

export default function Customers({ allCustomersData }) {

  // This proposes an alternative method to getStaticProps at the page level
  // See pages/index.js
  // To enable, use alternateAllCustomersData instead of allCustomersData
  /*
  let [alternateAllCustomersData, setAlternateAllCustomersData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCustomersData();
      setAlternateAllCustomersData(data);
    };

    fetchData();
  }, []);
  */

  return (
    allCustomersData.length ?
      <ul className={styles.list}>
        {
          allCustomersData.map(customer => {
            return (
              <li className={styles.card} key={customer.login.uuid}>
                <Image
                  priority
                  className={styles.picture}
                  src={customer.picture.medium}
                  height={72}
                  width={72}
                  alt=""
                />
                <div className={styles.data}>
                  <div className={`${styles.name} ${styles.capitalize}`}>
                    {customer.name.first} {customer.name.last}
                  </div>
                  <div className={styles.capitalize}>
                    {customer.location.street.number} {customer.location.street.name}
                  </div>
                  <div className={styles.capitalize}>
                    {customer.location.city}, {customer.location.state}
                  </div>
                  <a className={styles.email} href={`mailto:${customer.email}`}>
                    {customer.email}
                  </a>
                </div>
              </li>
            );
          })
        }
      </ul>
    :
      <SyncLoader
        color="#1bb1dc"
        loading={true}
        style={{ margin: 20 }}
      />
  );
}
