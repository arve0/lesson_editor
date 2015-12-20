'use strict';

import React from 'react';
import './editor.less';

class Editor extends React.Component {
  render() {
    return (
      <textarea
        className="Editor"
        value={this.props.src}
        onChange={this.props.onChange}
        />
    );
  }
}

export default Editor;
