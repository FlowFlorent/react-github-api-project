var React = require('react');
var $ = require('jquery');
var GithubUser = require('./GithubUser');

var Following = React.createClass({
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
    $.getJSON(`https://api.github.com/users/${this.props.params.username}/following?access_token=96c3698e49ce51870e2a7d675c39edcba16d5ffb`)
        .then(
            function(followings) {
                that.setState({
                    followings: followings
                });
            }
        );
  },
  render: function(){
    if (!this.state.followings) {
        return (<div className="following-page">LOADING FOLLOWING...</div>);
    }
    var followings = this.state.followings;
    return(
      <div className="following-page">
        <h3>{this.props.params.username} is following</h3>
        <ul>
          {followings.map(following => <GithubUser user={following} key={following.id}/>)}
        </ul>
      </div>
    );
  }
});




module.exports = Following;
