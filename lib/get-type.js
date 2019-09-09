module.exports = item => {
  const { imageData, path } = item
  let type = 'text'
  if (imageData) {
    type = 'image'
  } else if (path) {
    type = 'svg'
  }
  return type
}
