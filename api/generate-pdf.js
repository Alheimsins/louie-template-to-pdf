const PDFDocument = require('pdfkit')
const getType = require('../lib/get-type')

module.exports = async (request, response) => {
  try {
    const { header, body, footer } = await request.body

    // Initialize the document and streams it to the output
    const doc = new PDFDocument()
    response.setHeader('Content-Type', 'application/pdf')
    doc.pipe(response)

    const renderElement = item => {
      const { startAt, options } = item
      const type = getType(item)

      if (type === 'text') {
        const { text } = item
        if (startAt && options) {
          doc.text(text, startAt.x, startAt.y, options)
        } else if (startAt) {
          doc.text(text, startAt.x, startAt.y)
        } else if (options) {
          doc.text(text, options)
        } else {
          doc.text(text)
        }
      } else if (type === 'image') {
        const { imageData } = item
        if (startAt && options) {
          doc.image(imageData, startAt.x, startAt.y, options)
        } else if (startAt) {
          doc.image(imageData, startAt.x, startAt.y)
        } else if (options) {
          doc.image(imageData, options)
        } else {
          doc.image(imageData)
        }
      } else if (type === 'fontSize') {
        const { fontSize } = item
        doc.fontSize(fontSize)
      } else if (type === 'fillColor') {
        const { fillColor } = item
        doc.fillColor(fillColor)
      }
      doc.save()
    }

    if (header) {
      header.map(renderElement)
    }

    if (body) {
      body.map(renderElement)
    }

    if (footer) {
      footer.map(renderElement)
    }

    doc.end()
    return
  } catch (error) {
    console.error(error)
    response.send(error)
  }
}
