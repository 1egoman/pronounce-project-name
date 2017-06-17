import * as React from 'react';
import './styles.css';

export default function IPAPicker({startPosition, glyph}) {
  return <div className="ipa-picker-parent" style={{left: startPosition}}>
    <ul className="ipa-picker ipa-picker-above">
      <li>A</li>
      <li>B</li>
      <li>C</li>
    </ul>
    <ul className="ipa-picker ipa-picker-below">
      <li>A</li>
      <li>B</li>
      <li>C</li>
    </ul>
  </div>;
}
