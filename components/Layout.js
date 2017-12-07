import Head from 'next/head'
import PropTypes from 'prop-types'
import Link from 'next/link'

export default class Layout extends React.PureComponent {
  render() {
    const { title, description, children, showBack } = this.props

    return <div>
      <Head>
        <title>{ title }</title>
        <meta name="description" content={ description } />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="manifest" href="/static/manifest.webmanifest" />

        <meta name="theme-color" content="#ff6600" />
        <link rel="shortcut icon" href="/static/icon.png" />
        <link rel="apple-touch-icon" href="/static/icon.png" />
        <meta name="apple-mobile-web-app-title" content="Hacker News" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Head>

      <nav>
        <Link href="/"><a>{ showBack && <span className="back">&lt;</span> }<span className="title">Hacker News</span></a></Link>
      </nav>

      { children }

      <style jsx>{`
        nav {
          background: #ff6600;
          color: #fff;
          font-weight: bold;
        }
        nav a {
          display: inline-block;
          color: #fff;
          text-decoration: none;
        }
        nav a:hover {
          background-color: rgba(0,0,0,0.1);
        }
        nav .back {
          display: inline-block;
          height: 1em;
          width: 1em;
          font-weight: 300;
          padding: 1em 0 1em 1em;
          text-align: center;
        }
        nav .title {
          display: inline-block;
          padding: 1em;
        }
      `}</style>

      <style jsx global>{`
        body { 
          margin: 0;
          background: #f0f0f0;
          font-family: system-ui;
        }
      `}</style>
    </div>
  }
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
