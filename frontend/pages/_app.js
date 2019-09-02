import App, { Container } from 'next/app';
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

  componentWillMount() {
		Sentry.init({ dsn: process.env.SENTRY_DSN });
	}

	async componentDidMount() {
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
