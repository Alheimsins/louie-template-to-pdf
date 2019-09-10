module.exports = item => {
  const { imageData, path, fontSize, fillColor } = item
  let type = 'text'
  if (imageData) {
    type = 'image'
  } else if (path) {
    type = 'svg'
  } else if (fontSize) {
    type = 'fontSize'
  } else if (fillColor) {
    type = 'fillColor'
  }
  return type
}
