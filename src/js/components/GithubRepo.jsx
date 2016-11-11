var React = require('react');

var GithubRepo = React.createClass({
  propTypes: {
      // PropTypes.shape is like PropTypes.object but lets you define what's expected to be inside the object
          repo: React.PropTypes.object.isRequired
  },
  render: function(){
    var repo = this.props.repo;
    return (
      <div class="github-repo">
        <a href={repo.html_url}>{repo.full_name}</a>
        <p>{repo.stargazers_count}</p>
      </div>
    );
  }
});


module.exports = GithubRepo;
