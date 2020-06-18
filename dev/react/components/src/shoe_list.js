import React, { Component } from 'react';

export default class ShoeList extends Component {
  state = {
    shoes: [],
  };

  componentDidMount() {
    this.fetchShoes(this.props.id).then(this.refreshShoeList);
  }

  setNewColor = (color) => {
    this.updateUser({ color }).then((res) => {
      this.refreshUser(res);
      this.refreshShoeList();
    });
  };

  refreshShoeList = (res) => this.setState({ shoes: res.data.shoes });

  render() {
    // some list of shoes
  }

  componentWillReceiveProps(props) {
    const { refresh, id } = this.props;
    if (props.refresh !== refresh) {
      this.fetchShoes(id).then(this.refreshShoeList);
    }
  }
}
