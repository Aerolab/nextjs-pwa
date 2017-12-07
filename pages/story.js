import 'isomorphic-fetch'
import URL from 'url'
import Layout from '../components/Layout'
import CommentTree from '../components/CommentTree'
import Error from 'next/error'

export default class extends React.Component {

  static async getInitialProps({ req, res, query }) {
    var story;
    try {
      const storyId = query.id
      
      if( ! (/[0-9]+/).test(storyId) ) throw "Story ID must be numeric"

      const req = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`)
      story = await req.json()
    } catch(e) {
      story = undefined
    }

    return { story }
  }

  render() {
    const { story } = this.props
    if( typeof story === 'undefined' || ! story ) return <Error statusCode={503} />

    return <Layout title={ story.title } showBack={ true }>

      <main>
        <h1><a href={ story.url }>{ story.title }</a></h1>
        <div className="storyDetails">
          <strong>{ story.points } points</strong>
          <strong>{ story.comments_count } comments</strong>
          <strong>{ story.time_ago }</strong>
        </div>

        { story.comments.length ?
          <CommentTree comments={ story.comments } />
          :
          <div>There are no comments yet</div>
        }
      </main>

      <style jsx>{`
        main {
          padding: 1em;
        }
        h1 {
          font-size: 1.5em;
          margin: 0;
          font-weight: 300;
          padding-bottom: 0.5em;
        }
        h1 a {
          color: #333;
          text-decoration: none;
        }
        h1 a:hover {
          text-decoration: underline;
        }
        .storyDetails {
          font-size: 0.8em;
          padding-bottom: 1em;
          border-bottom: 1px solid rgba(0,0,0,0.2);
          margin-bottom: 1em;
        }
        .storyDetails strong {
          margin-right: 1em;
        }
        .storyDetails a {
          color: #ff6600;
        }
      `}</style>
    </Layout>
  }

}