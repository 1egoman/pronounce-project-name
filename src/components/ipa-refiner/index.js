import * as React from 'react';
import './styles.css';

import IPAGlyph from '../ipa-glyph/index';

export default class IPARefiner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editingIndex: -1,
    };
  }

  render() {
    const {
      glyphs,
    } = this.props;

    return <div className="ipa-refiner">
      {glyphs.map((glyph, index) => {
        return <div className="ipa-refiner-glyph">
          <IPAGlyph
            key={`${glyph} ${index}`}
            glyph={glyph}
            isEditing={index === this.state.editingIndex}
            onSelectedGlyph={() => {
              // When the user clicked on this glyph to select it...
              this.setState({editingIndex: index});
            }}
          />
        </div>;
      })}
    </div>;
  }
}
