export default function getIPAPronunciation(word) {
  return fetch(`https://cors-anywhere.herokuapp.com/https://en.wiktionary.org/w/api.php?action=query&prop=revisions&rvlimit=1&rvprop=content&format=json&titles=${word}`, {
    headers: {
      origin: 'null',
    },
  }).then(resp => {
    return resp.json();
  }).then(json => {
    const key = Object.keys(json.query.pages)[0];
    const content = json.query.pages[key].revisions[0]['*'];

    console.log(content);

    const match = /\{\{IPA\|\/([^/]*)|\/(.*)\/\|lang=en}}/.exec(content);

    if (match) {
      return match[1].split('|')[0];
    } else {
      return null;
    }
  })
}
