import App, { Container } from 'next/app';
import Head from 'next/head';
import * as Sentry from '@sentry/browser';

import Application from '../components/App';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import CountryContext from '../contexts/country';
import { fetchCountry } from '../utils/locales';

class MyApp extends App {

	constructor() {
		super();
		this.state = {};
	}

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

	async componentDidMount() {
		Sentry.init({ dsn: process.env.SENTRY_DSN });

		const { countryCode } = await fetchCountry();
		this.setState({
			countryCode
		});
	}

  render() {
    const { countryCode } = this.state;
    const { Component, pageProps } = this.props;

    return (
      <Application>
				<Head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<title>Alex and Sara Get Married!</title>
					<meta name="description" content="The website for information of and to RSVP for Alex and Sara's wedding." />
					<script src="https://polyfill.io/v3/polyfill.min.js?flags=gated&rum=true&features=Object.assign%2CArray.from%2Cdefault%2Ces6%2CArray.prototype.includes%2CPromise%2CMap%2CSet"></script>
				</Head>
        <Container>
					<CountryContext.Provider value={countryCode}>
						<Navigation />
						<main className="app-content">
							<Component {...pageProps} />
						</main>
						<Footer />
					</CountryContext.Provider>
        </Container>
      </Application>
    );
  }
}

export default MyApp;
