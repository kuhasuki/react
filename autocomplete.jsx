var React = require('react');

var Autocomplete = React.createClass({
  getInitialState: function(){
    return { searchString: '' };
  },
  handleChange: function(e){
    this.setState({ searchString: e.target.value });
  },
  applyChange: function(){
    var self = this;
    var tempMatches = [];
    names.map(function(name){
      if (self.sameBeginning(name.name)){
        tempMatches.push(name.name);
      }
    });
    return tempMatches;
  },
  sameBeginning: function(name) {
    for (var i = 0; i < this.state.searchString.length; i++) {
      if (this.state.searchString[i] !== name[i]) {
        return false;
      }
    }
    return true;
  },
  fillField: function(e){
    this.setState({ searchString: e.target.innerHTML });
  },
  render: function(){
    var myMatches = this.applyChange();
    return (
      <section>
        <input type="text"
               onChange={this.handleChange}
               value={this.state.searchString}>
        </input>
        <ul>

          {
            myMatches.map(function(match){
              return <li key={match} onClick={this.fillField}>{match}</li>;
            }.bind(this))
          }
        </ul>
      </section>
    );
  }
});

var names = [
 { name: 'Chris'},
 { name: 'John'},
 { name: 'Peter'},
 { name: 'Jesus'},
 { name: 'Pableo'},
 { name: 'Jorge'},
 { name: 'Juan'},
];

module.exports = Autocomplete;
