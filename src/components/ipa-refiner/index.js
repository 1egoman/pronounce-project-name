import * as React from 'react';
import './styles.css';

import IPAPicker from '../ipa-picker/index';

const CELL_SIZE = 72; /* px */

export default class IPARefiner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editingIndex: -1,
    };
  }

  selectGlyph(e) {
    // TODO: 100 is a bad number her, should be 72. That doesn't work tho...
    const demarginized = e.clientX - e.target.getBoundingClientRect().left;
    const characterIndex = Math.floor(e.clientX / CELL_SIZE);
    this.setState({editingIndex: characterIndex});
  }

  render() {
    const {
      glyphs,
    } = this.props;

    return <div className="ipa-refiner-container">
      <div className="ipa-refiner">
        <div className="ipa-refiner-input">
          <input
            type="text"
            value={glyphs.join('')}
            onClick={this.selectGlyph.bind(this)}
          />
        </div>
      </div>

      {this.state.editingIndex > -1 ? <IPAPicker
        startPosition={this.state.editingIndex * CELL_SIZE}
        glyph={glyphs[this.state.editingIndex]}
      /> : null}
    </div>;
  }
}
