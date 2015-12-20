'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Editor from './editor.jsx';
import Output from './output.jsx';

let initialText = `# Introduksjon {.intro}
Her er introduksjonen.

# Steg 1: Første steg {.activity}
I dette steget skal vi prøve en løkke.

## Sjekkliste {.check}
- Åpne **Idle**.
- Skriv inn denne koden:

  \`\`\`python
  for i in range(10):
      print(i)
  \`\`\`

  **Hvilket tall skriver koden ut først?**
  <input type="text" placeholder="Ditt svar" answer="0" for="test-0">

# Steg 2: Neste steg {.activity .test-0}
En kort beskrivelse på dagligdags språk.

## Sjekkliste {.check}
- bla
- bla bla
`;

class EditorApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.src = initialText;
  }

  style = {
    margin: '15px 15px'
  }

  updateSrc = (e) => {
    this.setState({src: e.target.value});
  };

  render() {
    return (
      <div className="EditorApp" style={this.style}>
        <Editor
          onChange={this.updateSrc}
          src={this.state.src} />
        <Output src={this.state.src} />
      </div>
    );
  }
}

ReactDOM.render(<EditorApp />,  document.getElementById('app'));
