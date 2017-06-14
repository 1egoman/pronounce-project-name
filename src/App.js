import debounce from 'lodash.debounce';
import React, { Component } from 'react';

const PRONOUNCIATION_KEY = [
  {
    letter: 'a',
    how: {
      'a': ['j{a}ck'],
      'a': ['f{a}ther'],
      'a': ['{a}round'],
      'a': ['t{a}ll'],
      'a': ['c{a}ble'],
      'a': ['sh{a}re'],
      'a': ['sen{a}te'],
    },
  },
  {
    letter: 'e',
    how: {
      'i': ['eas{y}'],
      'iː': ['s{ee}n'],
    }
  },
  {
    letter: 'i',
    how: {
      'i': ['eas{y}'],
      'ɪ': ['c{i}ty']
    }
  },
  {
    letter: 'o',
    how: {
    }
  },
  {
    letter: 'u',
    how: {
    }
  },
  {
    letter: 'y',
    how: {
    }
  }
];


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPlayer: false,
      pronounciation: "",

      letters: [
        {}
      ]
    };

    this.updatePronounciation = debounce(value => {
      this.setState({pronounciation: value});
    }, 1000);
  }

  render() {
    return <div className="container">
      <input type="text" onChange={e => {
        this.updatePronounciation(e.target.value)
        this.setState({showPlayer: Boolean(e.target.value.length)})
      }} />
      {this.state.showPlayer ? <video
        src={`https://speak-ipa.bearbin.net/speak.cgi?speak=${encodeURIComponent(this.state.pronounciation)}`}
        controls
        autoPlay
      /> : null}
    </div>;
  }
}

export default App;
