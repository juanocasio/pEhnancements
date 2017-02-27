import React from 'react';
import Header from './Header';
import EnhancementPreview from './EnhancementPreview'

class App extends React.Component {
  state = {
    pageHeader: 'Profield Enhancements'
  };
  render() {  
    return (
      <div className="App">  
        <Header message = {this.state.pageHeader} />
        <div>
          <EnhancementPreview {...this.props.profield[1]} />
        </div>
      </div>
    );
  };
}

export default App;