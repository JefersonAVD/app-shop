import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../src/components/Layout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate'
    });
  }, [])
  
  return(
      <Layout>
        <Component {...pageProps} />
      </Layout> 
    
  )
}


