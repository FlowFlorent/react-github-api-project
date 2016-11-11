var React = require('react');
var Link = require('react-router').Link;

var GithubUser = React.createClass({
  propTypes: {
      // PropTypes.shape is like PropTypes.object but lets you define what's expected to be inside the object
          user: React.PropTypes.object.isRequired
  },
  render: function(){
    var user = this.props.user;
    return (
      <div>
        <Link to={"/user/" + user.login}>
          <img src={user.avatar_url}/>
          {user.login}
        </Link>
      </div>
    );
  }
});


module.exports = GithubUser;
