export default class Comment extends React.PureComponent {
  render() {
    const { comment } = this.props

    return <div className="comment">
      <div className="user">{ comment.user }</div>
      <div className="content" dangerouslySetInnerHTML={ { __html: comment.content } } />

      { comment.comments &&
        <div className="responses">
          { comment.comments.map( (response) => (
            <Comment comment={ response } />
          ) ) }
        </div>
      }

      <style jsx>{`
        .comment {
          margin-bottom: 1.5em;
        }
        .user {
          font-size: 0.9em;
          font-weight: bold;
          margin-bottom: 0.5em;
        }
        .content {
          font-size: 0.9em;
        }
        .content :global(p) {
          margin: 0;
          margin-bottom: 0.5em;
          word-wrap: break-word;
        }
        .content :global(a) {
          color: #ff6600;
          text-decoration: underline;
        }
        .content :global(pre) {
          max-width: 100%;
          overflow: scroll;
        }
        .responses {
          margin-top: 1em;
          border-left: 1px solid rgba(0,0,0,0.1);
          padding-left: 1em;
        }
      `}</style>
    </div>
  }
}