import { Fragment } from 'react';
import Head from 'next/head';

import './app.scss';

export default ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>Alex and Sara get Married!</title>
        <meta name="Description" content="The website for Alex and Sara's wedding."></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css?family=Dancing+Script" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"></link>
        <link rel="icon" type="image/png" href="data:image/png;base64,iVBORw0KGgo="></link>
      </Head>
      {children}
    </Fragment>
  );
};
