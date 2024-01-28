import PropTypes from 'prop-types';

import React, { Component } from 'react';

export default class FeedbackOptions extends Component {
  static defaultProps = {
    options: [],
    onLeaveFeedback: null,
  };

  static propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
  };

  render() {
    return (
      <div>
        {this.props.options.map(el => {
          return (
            <button
              type="button"
              data-type={el}
              key={el}
              onClick={this.props.onLeaveFeedback}
            >
              {el}
            </button>
          );
        })}
      </div>
    );
  }
}
