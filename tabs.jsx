var React = require('react');

var Tabs = React.createClass({
  getInitialState: function() {
    return {content: ""};
  },
  getContent: function(e) {
    this.setState({content: e.target.getAttribute('data-inside')});
  },
  render: function () {
    return(
      <div>
        {
          this.props.contents.map(function(entry){
            return <h4 key={entry["title"]} data-inside={entry["content"]} onClick={this.getContent} >{entry['title']}</h4>;
          }.bind(this))
        }
        <p>{this.state.content}</p>
      </div>
    );
  }
});

module.exports = Tabs;
