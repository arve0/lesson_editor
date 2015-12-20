'use strict';

import React from 'react';
import md from './markdown.js';

class Output extends React.Component {
  toMarkup = () => {
    let markup = md.render(this.props.src);
    return {__html: markup};
  }
  render() {
    return (
      <div
        className="Output"
        dangerouslySetInnerHTML={this.toMarkup()}>
      </div>
    )
  }
}

export default Output
