import React from 'react';
import Header from './Header';
import EnhancementPreview from './EnhancementPreview'
import axios from 'axios';

class App extends React.Component {
  state = {
    pageHeader: 'Profield Enhancements',
    profield: []
  };

  componentDidMount(){
    axios.get('/api/profield')
      .then(resp => {
        this.setState({
        profield: resp.data.profield
      });
      })
      .catch(console.error)
  };

  render() {  
    return (
      <div className="App">  
        <Header message = {this.state.pageHeader} />
        <div>
          {this.state.profield.map(profield =>
            <EnhancementPreview key={profield.enhancement} { ...profield } />
          )}
          
        </div>
      </div>
    );
  };
}

export default App;