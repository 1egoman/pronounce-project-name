import debounce from 'lodash.debounce';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showPlayer: false, pronounciation: "" };

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
