import debounce from 'lodash.debounce';
import React, { Component } from 'react';

import getIPAPronunciation from '../../helpers/getIPAPronunciation';

import IPARefiner from '../ipa-refiner';

const PRONOUNCIATION_KEY = {
  'b': '{b}ed',
  'd':'{d}ig',
  'd͡ʒ': '{j}ump',
  'ð': '{th}en',
  'f':'	{f}ive',
  'g': '{g}ame',
  'h': '{h}ouse',
  'j': '{y}es',
  'k': '{c}at',
  'l': '{l}ay',
  'm': '{m}ouse',
  'n': '{n}ap',
  'ŋ': 'thi{ng}',
  'p': 's{p}eak',
  'ɹ': '{r}ed',
  's': '{s}eem',
  'ʃ': '{s}hip',
  't': 'tr{a}p',
  't͡ʃ': '{ch}art',
  'θ': '{t}hin',
  'v': '{v}est',
  'w': '{w}est',
  'z': '{z}ero',
  'ʒ': 'vi{s}ion',

  'ə': 'aren{a}',
  'ɚ': 'read{er}',
  'æ': 'tr{a}p',
  'aɪ': 'pr{i}ce',
  'aʊ': 'm{ou}th',
  'ɑ': 'f{a}ther',
  'eɪ': 'f{a}ce',
  'ɝ': 'n{ur}se',
  'ɛ': 'dr{e}ss',
  'i': 'fl{ee}ce',
  'ɪ': 'k{i}t',
  'oʊ': 'go{a}t',
  'ɔ': 'th{ou}ght',
  'ɔɪ': 'ch{oi}ce',
  'u': 'g{oo}se',
  'ʊ': 'f{oo}t',
  'ʌ': 'str{u}t',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPlayer: false,
      pronounciation: "",

      glyphs: [
        'ˈ',
        'æ',
        '.',
        'p',
        'ə',
        'l',
      ]
    };

    this.updateSeed = debounce(seed => {
      getIPAPronunciation(seed).then(pronounciation => {
        this.setState({pronounciation});
      });
      this.setState({seed});
    }, 1000);
  }

  render() {
    return <div className="container">
      <input type="text" onChange={e => {
        this.updateSeed(e.target.value)
        this.setState({showPlayer: Boolean(e.target.value.length)})
      }} />
      {/* {this.state.showPlayer ? <video */}
      {/*   src={`https://text-to-speech-demo.mybluemix.net/api/synthesize?text=%3Cphoneme+alphabet%3D%22ipa%22+ph%3D%22${encodeURIComponent(this.state.pronounciation)}%22+%2F%3E&voice=en-US_AllisonVoice&ssmlLabel=Expressive+SSML&download=true`} */}
      {/*   controls */}
      {/*   autoPlay */}
      {/* /> : null} */}


      <IPARefiner
        glyphs={this.state.glyphs}
      />
    </div>;
  }
}

export default App;
