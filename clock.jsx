var React = require('react');

var Clock = React.createClass({
  getInitialState: function(){
    return { date: new Date()};
  },
  componentDidMount: function(){
    this.intervalID = setInterval(function(){
      this.setState({ date: new Date() });
    }.bind(this), 1000);
  },
  componentWillUnmount: function(){
    clearInterval(this.intervalID);
  },
  render: function () {
    // window.setTimeout(this.componentWillUnmount(),10000);
    return(
      <div>
        {this.state.date.toString()}
      </div>
    );
  }
});

module.exports = Clock;
