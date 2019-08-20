import App, { Container } from 'next/app';
import * as Sentry from '@sentry/browser';

import Application from '../components/App';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentWillMount() {
    Sentry.init({ dsn: process.env.SENTRY_DSN });
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Application>
        <Container>
          <Navigation />
          <main className="app-content">
            <Component {...pageProps} />
          </main>
          <Footer />
        </Container>
      </Application>
    );
  }
}

export default MyApp;
