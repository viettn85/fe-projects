import React, { Component } from 'react';
import Slider from './components/slider.component';
import { getImageLinks } from './apis/random';
var axios = require('axios');

const CAT_URL = 'https://api.thecatapi.com/v1/images/search';
const DOG_URL = 'https://dog.ceo/api/breeds/image/random';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animal: 'cat',
      // links: getImageLinks('cat'),
    };
    var pro = this.state.animal === 'cat' ? requestCatLink() : requestDogLink();
    pro.then((data) => {
      this.setState({
        links: data,
      });
    });
  }

  // componentDidMount() {
  //   var pro = this.state.animal === 'cat' ? requestCatLink() : requestDogLink();
  //   pro.then((data) => {
  //     console.log('Data', data);
  //     return new Promise(function (resolve, reject) {
  //       resolve(data);
  //     });
  //   });
  // }

  render() {
    console.log(this.state.links);
    return (
      <div>
        <div className="container">
          <h1>Image Slider</h1>
          {this.state.links ? <Slider links={this.state.links} /> : <div></div>}
        </div>
      </div>
    );
  }
}

const requestCatLink = async () => {
  var links = [];
  for (let index = 0; index < 10; index++) {
    const res = await axios.get(CAT_URL);
    links[index] = res.data[0].url;
  }
  return links;
};

const requestDogLink = async () => {
  var links = [];
  for (let index = 0; index < 10; index++) {
    const res = await axios.get(DOG_URL);
    links[index] = res.data[0].message;
  }
  return links;
};
