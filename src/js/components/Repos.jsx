var React = require('react');
var $ = require('jquery');
var GithubRepo = require('./GithubRepo');

var Repos = React.createClass({
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
    $.getJSON(`https://api.github.com/users/${this.props.params.username}/repos?access_token=96c3698e49ce51870e2a7d675c39edcba16d5ffb`)
        .then(
            function(repos) {
                that.setState({
                    repos: repos
                });
            }
        );
  },
  render: function(){
    if(!this.state.repos){
      return (<div className="followers-page">LOADING REPOSITORIES...</div>);
    }
    var repos = this.state.repos;
    console.log(repos);
    return (
      <div class="repos-page">
        <h3>Public repos of {this.props.params.username}</h3>
        <ul>
          {repos.map(repo => <GithubRepo repo={repo} key={repo.id}/>)}
        </ul>
      </div>
    );
  }
});

module.exports = Repos;
