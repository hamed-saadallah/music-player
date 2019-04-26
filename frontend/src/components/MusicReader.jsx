import React from 'react';
//import logo from '../logo.svg';
import myData from '../data/music.json';

const path = 'http://127.0.0.1:8081/public/';

class MusicReader extends React.Component {
  constructor() {
    super();
    this.state = {
      playlist: [],
      loading: true,
    }
  }
  //https://stackoverflow.com/questions/50594972/manage-multiple-audio-sources-in-react
  componentDidMount() {
  }

  render() {
    let arr = [];
    Object.keys(myData).forEach(function (key) {
      arr.push(myData[key]);
    });
    return (
      <div>
        {arr.map(item => <div key={item.label}>{item.title}<audio key={item.label} src={path + item.filename} controls></audio></div>)};
      </div>
    )
  }
}

export default MusicReader;