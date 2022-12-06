
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image'
import Intro from '../components/Intro';
import Header from '../components/Header';



const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
     <Head>
        <title>Santorin</title>
        <meta name="description" content="All in one" />
        <link rel="icon" href="images/santorin-logo.png" />
      </Head>


<Header/>


 {/* experience */}
 <section id="Experience" className='snap-center'>
 
<Intro/>
 </section>


 {/* projects */}

 {/* contact me */}
    

     
    </div>
  )
}

export default Home