var React = require('react');

var Tabs = React.createClass({
  getInitialState: function() {
    return {content: ""};
  },
  getContent: function(e) {
    this.setState({content: e.target.innerHTML});
  },
  render: function () {
    return(
      <div>
        {
          this.props.contents.map(function(entry){
            return <h4 key={entry["title"]} onClick={this.getContent} >{entry['title']}</h4>;
          }.bind(this))
        }
        <p>{this.state.content}</p>
      </div>
    );
  }
});

module.exports = Tabs;
