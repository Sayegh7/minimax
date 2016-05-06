

var Comment = React.createClass({
    rawMarkup: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  },
    
    render: function () {


        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>

        <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        )
    }
}
);
var CommentList = React.createClass({
    
    render: function () {
   var commentNodes = this.props.data.map(function (comment) {
        return(
            <Comment author={comment.author} key={comment.id}>
                {comment.text}
               </Comment>
        );
    });
  
 
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function () {
        return (
            <div className="commentForm">
                Hello, world!I am a CommentForm.
            </div>
        );
    }
});

var CommentBox = React.createClass({
    loadFromServer: function(){
      $.ajax({
          url:this.props.url,
          dataType: 'json',
          cache: false,
          success: function(data){
              this.setState({data:data});
          }.bind(this),
          error: function(xhr, status, err){
              console.error(this.props.url, status, err.toString());
          }.bind(this)
      })  
    },
    getInitialState: function(){
        return {data:[]};
    },
    componentDidMount: function(){
        this.loadFromServer();
        setInterval(this.loadFromServer, this.props.interval);
    },
    render: function () {
        return (
            <div className="commentBox">
                <CommentList data={this.state.data} />
                <CommentForm />
            </div>
        );
    }
});


ReactDOM.render(
    <CommentBox url="/comments" interval="{5000}" />,
    document.getElementById('content')
);
