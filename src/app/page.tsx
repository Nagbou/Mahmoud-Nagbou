"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';
import Navbar from "../../components/Navbar";
import FirstContainer from "../../components/FirstContainer";
import About from "../../components/About";
import WhatIDo from "../../components/WhatIDo";
import Skills from "../../components/Skills";
import { Portfolio } from "../../components/Portfolio";
import { Contact } from '../../components/Contact';
import ScrollToTopButton from '../../components/ScrollToTopButton';
import Experience from '../../components/Experience';
import Image from 'next/image';

export default function Home() {
  return (
    <>

      <Navbar />
      <FirstContainer />
      <section id='About'>
        <About />
      </section>
      <WhatIDo />
      <Skills />
      <section id='Portfolio'>
        <Portfolio />
      </section>
      <Experience />
      <section id='Contact'>
        <Contact photoSrc={'/imgs/me2.jpg'} header={'Hi, this is Mahmoud.'} text={''} linkedinUrl={'https://www.linkedin.com/in/mahmoud-nagbou-123597224/'}
          xUrl={'https://x.com/m_nagbou'} email={'nagboumahmoud22@gmail.com'} githubUrl={'https://github.com/Nagbou'} upworkUrl={'https://www.upwork.com/freelancers/~010366e834bf084e45?mp_source=share'} behanceUrl={'https://www.behance.net/mahmoudnagbou'} />
      </section>
      <ScrollToTopButton />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
    </>

  );
}
