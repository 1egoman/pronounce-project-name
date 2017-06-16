import * as React from 'react';
import './styles.css';

export default class IPARefiner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editingIndex: -1,
    };
  }

  selectGlyph(e) {
    // TODO: 100 is a bad number her, should be 72. That doesn't work tho...
    const characterIndex = (e.clientX - 12) / 100;

    console.log(characterIndex);
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
    </div>;
  }
}
