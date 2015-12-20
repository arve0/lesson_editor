'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './editor.jsx';
import Output from './output.jsx';

class EditorApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.src = '# Introduksjon\n';
    this.state.src += 'Denne oppgaven handler om...';
  }

  updateSrc = (e) => {
    this.setState({src: e.target.value});
  };

  render() {
    return (
      <div className="EditorApp">
        <Editor
          onChange={this.updateSrc}
          src={this.state.src} />
        <Output src={this.state.src} />
      </div>
    );
  }
}

ReactDOM.render(<EditorApp />,  document.getElementById('app'));
