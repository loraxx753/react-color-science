export const magnitudes = {
  m: 100e16 - 100e-14
}

export const Magnitudes = props =>
  Object.keys(magnitudes).map(key => (
    <p>{key}: {<Debug>{magnitudes[key]}</Debug>}</p>
  ))
