import * as React from 'react';
import './styles.css';

export default class IPAPicker extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    // If if the glyph has a textbox for editing, then focus the textbox
    if (this.glyphInput) {
      this.glyphInput.focus();
    }
  }

  render() {
    const {
      glyph,
      isEditing,
      onSelectedGlyph
    } = this.props;

    if (isEditing) {
      return <div className="ipa-glyph">
        <input
          type="text"
          value={glyph}
          ref={input => { this.glyphInput = input; }}
        />

        <ul className="ipa-glyph-picker ipa-glyph-picker-above">
          <li>A</li>
          <li>B</li>
          <li>C</li>
        </ul>
        <ul className="ipa-glyph-picker ipa-glyph-picker-below">
          <li>A</li>
          <li>B</li>
          <li>C</li>
        </ul>
      </div>;
    } else {
      return <div className="ipa-glyph">
        <span
          className="ipa-glyph-static-glyph"
          onClick={onSelectedGlyph}
        >
          {glyph}
        </span>
      </div>;
    }
  }
}
