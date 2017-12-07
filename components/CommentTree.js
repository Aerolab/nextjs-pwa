import Comment from './Comment'

export default class CommentTree extends React.PureComponent {
  render() {
    const { comments } = this.props

    return <div className="commentTree">
      { comments.map( (response) => (
        <Comment comment={ response } />
      ) ) }
    </div>
  }
}