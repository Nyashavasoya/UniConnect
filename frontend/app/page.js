import Image from 'next/image'
import styles from './page.module.css'
import LandingPage from '@/pages/LandingPage'
import HomePage from '@/pages/Posts'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <LandingPage />
      </div>
    </main>
  )
}
