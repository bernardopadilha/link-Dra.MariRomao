import Document, { Html, Head, Main, NextScript } from 'next/document';

import logo from "../../public/logo.jpg"

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@400;700;900&display=swap" rel="stylesheet"/>

        <link rel="shortcut icon" href='/logo_navilink.png' type="image/jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}