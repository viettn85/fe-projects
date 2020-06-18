import React, { Component } from 'react';

export default class UserShow extends Component {
  state = {
    user: {},
  };

  componentDidMount() {
    this.fetchUser().then(this.refreshUser);
  }

  setNewColor = (color) => {
    this.updateUser({ color }).then(this.refreshUser);
  };

  refreshUser = (res) => this.setState({ user: res.data.user });

  render() {
    const { user } = this.state;

    return (
      <div>
        User name: {user.name}
        Pick color:
        <div>
          {colors.map((color) => (
            <div className={color} onClick={() => this.setNewColor(color)} />
          ))}
          )}
        </div>
        <ShoeList id={user.id} refresh={refreshShoeList} />
      </div>
    );
  }
}
