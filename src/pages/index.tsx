// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
// import { useTranslation } from 'next-i18next'

// export default function Home() {
//   const { t } = useTranslation()

//   return (
//     <>
//      <h1>{t("HELLO_WORLD")}</h1>
//     </>
//   )
// }

// export async function getStaticProps(context) {
//   // extract the locale identifier from the URL
//   const { locale } = context

//   return {
//     props: {
//       // pass the translation props to the page component
//       ...(await serverSideTranslations(locale)),
//     },
//   }
// }

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import dynamic from 'next/dynamic';
import { NextPageWithLayout } from '@/interfaces/layout';
import { MainLayout } from '@/components/layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const DynamicHomeHero = dynamic(() => import('../components/home/hero'));
const DynamicHomeFindMe = dynamic(() => import('../components/home/find-me'));
const DynamicHomeTechTalks = dynamic(() => import('../components/home/tech-talks'));
const DynamicHomeExperiences = dynamic(() => import('../components/home/experiences'));

const Home: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero />
      <DynamicHomeExperiences />
      <DynamicHomeFindMe />
      <DynamicHomeTechTalks />
    </>
  );
};

export async function getStaticProps(context: { locale: any; }) {
  const { locale } = context;

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  };
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
