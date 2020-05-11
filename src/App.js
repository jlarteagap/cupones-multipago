import React, { Component } from 'react';

import Router from './component/Router';

class App extends Component {
  render(){
    return (
      <div className="container-fluid px-0 pt-5 bg wrapper__scan position-relative">
        <main className="pt-5">
          <Router />
        </main>
      </div>
    );
  }
}

export default App;
