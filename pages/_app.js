import App, {Container} from 'next/app'
import React from 'react'
import Link from 'next/link'
import  withApollo from '../libs/with-apollo-client'
import { ApolloProvider } from 'react-apollo';

class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, apolloClient} = this.props
    return (
      <ApolloProvider client={this.props.apolloClient}>
        <Container>
          <div>
              <Link href="/">
                  <a>
                      home
              </a>
              </Link>
              <Link href="/about">
                  <a>
                      about
              </a>
              </Link>
          </div>
        <Component {...this.props} />
      </Container>
    </ApolloProvider>
    )
  }
}

export default withApollo(MyApp)