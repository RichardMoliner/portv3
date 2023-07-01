// import { appWithTranslation } from 'next-i18next'
// const App = ({ Component, pageProps }) => (
//     <Component {...pageProps} />
// )

// export default appWithTranslation(App)

import React, { FC } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { MUIProvider } from '@/providers';

import '@/styles/globals.css';
import { NextPageWithLayout } from '@/interfaces/layout';
import { appWithTranslation } from 'next-i18next';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App: FC<AppPropsWithLayout> = (props: AppPropsWithLayout) => {
  const { Component, pageProps } = props;

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Daiana Cambruzzi</title>
      </Head>
      <MUIProvider>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </MUIProvider>
    </>
  );
};

export default appWithTranslation(App);
