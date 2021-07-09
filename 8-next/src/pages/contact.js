import Head from 'next/head'
import Main from '../layouts/Main'
import styles from '../styles/contact.module.css'

function Contact () {
  return (
    <Main>
      <Head>
        <title>ReactJS | Contact Page</title>
      </Head>
      <div>
        <h3 className={styles.header}>Contact us</h3>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
    </Main>
  )
}

export default Contact
