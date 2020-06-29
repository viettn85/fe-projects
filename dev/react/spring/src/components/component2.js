import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';
export default class Component2 extends Component {
  render() {
    return (
      <div>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 1000, duration: 1000 }}
        >
          {(props) => (
            <div style={props}>
              <div style={c2Style}>
                <h1>Component 2</h1>
                <p>
                  Aliquip aliquip tempor laborum minim proident nisi laboris
                  voluptate. Ut mollit exercitation deserunt quis quis consequat
                  laboris ea dolore eu. Laborum enim in occaecat qui elit ex
                  culpa reprehenderit voluptate. Est sunt esse esse quis.
                </p>
                <p>
                  Aliquip aliquip tempor laborum minim proident nisi laboris
                  voluptate. Ut mollit exercitation deserunt quis quis consequat
                  laboris ea dolore eu. Laborum enim in occaecat qui elit ex
                  culpa reprehenderit voluptate. Est sunt esse esse quis.
                </p>
                <button style={btn} onClick={this.props.toggle}>
                  Toggle Component 3
                </button>
              </div>
            </div>
          )}
        </Spring>
      </div>
    );
  }
}

const c2Style = {
  background: 'slateblue',
  color: 'white',
  padding: '1.5rem',
};
const btn = {
  background: '#333',
  color: '#fff',
  padding: '1rem 2rem',
  border: 'none',
  textTransform: 'uppercase',
  margin: '15px 0',
};
