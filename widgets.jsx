var React = require('react');
var ReactDOM = require('react-dom');
var Autocomplete = require('./autocomplete');
var Weather = require('./weather');
var Clock = require('./clock');
var Tabs = require('./tabs');

var newsContents = [
  {'title': 'Trending', 'content': 'Researchers say they have taught a chimpanzee to use a grappling hook'},
  {'title': 'New', 'content': 'This is content, but it is too new'},
  {'title': 'Finance', 'content': 'All the banks are dead'}
];

var Widgets = React.createClass({
  render: function () {
    return(
      <div>
        <Autocomplete/>
        <Weather/>
        <Clock/>
        <Tabs contents={newsContents}/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets />, document.getElementById('main'));
});
