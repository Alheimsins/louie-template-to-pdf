module.exports = item => {
  const { imageData, path, fontSize, fillColor, moveDown, rotate, opacity } = item
  let type = 'text'
  if (imageData) {
    type = 'image'
  } else if (path) {
    type = 'svg'
  } else if (fontSize) {
    type = 'fontSize'
  } else if (fillColor) {
    type = 'fillColor'
  } else if (moveDown) {
    type = 'moveDown'
  } else if (rotate) {
    type = 'rotate'
  } else if (opacity) {
    type = 'opacity'
  }
  return type
}
