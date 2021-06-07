import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavMenu from '../components/NavMenu'
import SaveButton from '../components/SaveButton'
import Title from '../components/Title'
import ImageSection from '../components/ImageSection'
import BodySection from '../components/BodySection'
import MetaSection from '../components/MetaSection'
import TitleTag from '../components/TitleTag'
import TagSection from '../components/TagSection'
import AuthorsSection from '../components/AuthorsSection'
import FormattingSection from '../components/FormattingSection'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CMS App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link 
          rel="preload"
          href="/fonts/SupremeLL-Medium.otf"
          as="font"
          crossOrigin=""
        />
        <link 
          rel="preload"
          href="/fonts/SupremeLL-Light.otf"
          as="font"
          crossOrigin=""
        />
        <link 
          rel="preload"
          href="/fonts/SupremeLL-Bold.otf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <NavMenu/>
      <SaveButton/>
      <Title/>
      <ImageSection/>
      <FormattingSection/>
      <BodySection/>
      <MetaSection/>
      <TitleTag/>
      <TagSection/>
      <AuthorsSection/>



    </div>
  )
}
