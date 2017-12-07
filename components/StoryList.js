import Link from 'next/link'
import Router from 'next/router'

export default class StoryList extends React.PureComponent {
  render() {
    const { stories } = this.props

    return <div className="storyList">

      { stories.map( (story) => (
        <div className="storyItem" key={ story.id }>
          <h2><a href={ story.url }>{ story.title }</a></h2>
          <div className="storyDetails">
            <strong>{ story.points } points</strong>
            <Link href={`/story?id=${story.id}`} prefetch>
              <a>{ story.comments_count } comments</a>
            </Link>
          </div>
        </div>
      ) ) }

      <style jsx>{`
        .storyList {
          padding: 0 1em;
        }
        .storyItem {
          padding: 1em 0;
          border-bottom: 1px solid rgba(0,0,0,0.1);
        }
        h2 {
          font-size: 1.1em;
          font-weight: 400;
          margin: 0;
          margin-bottom: 0.5em;
        }
        h2 a {
          color: #333;
          text-decoration: none;
        }
        h2 a:hover {
          text-decoration: underline;
        }
        .storyDetails {
          font-size: 0.9em;
          font-weight: bold;
        }
        .storyDetails strong {
          margin-right: 1em;
        }
        .storyDetails a {
          color: #ff6600;
          text-decoration: none;
        }
      `}</style>

    </div>
  }
}