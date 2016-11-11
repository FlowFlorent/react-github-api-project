var React = require('react');
var $ = require('jquery');
var GithubUser = require('./GithubUser');

var Followers = React.createClass({
  propTypes: {
      // PropTypes.shape is like PropTypes.object but lets you define what's expected to be inside the object
      params: React.PropTypes.shape({
          username: React.PropTypes.string.isRequired
      })
  },
  getInitialState: function(){
    return {};
  },
  componentDidMount: function(){
    var that = this;
    $.getJSON(`https://api.github.com/users/${this.props.params.username}/followers?access_token=96c3698e49ce51870e2a7d675c39edcba16d5ffb`)
        .then(
            function(followers) {
                that.setState({
                    followers: followers
                });
            }
        );
  },
  render: function(){
    //Displays LOADING FOLLOWERS while waiting for followers data
    if (!this.state.followers) {
        return (<div className="followers-page">LOADING FOLLOWERS...</div>);
    }
    var followers = this.state.followers;
    return(
      <div className="followers-page">
        <h3>Followers of {this.props.params.username}</h3>
        <ul>
          {followers.map(follower => <GithubUser user={follower} key={follower.id}/>)}
        </ul>
      </div>
    );
  }
});




module.exports = Followers;
