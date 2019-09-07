const PDFDocument = require('pdfkit')

module.exports = async (request, response) => {
  try {
    const { header, body, footer } = await request.body

    // Initialize the document and streams it to the output
    const doc = new PDFDocument()
    response.setHeader('Content-Type', 'application/pdf')
    doc.pipe(response)

    const renderElement = item => {
      const { startAt, fontSize, text } = item
      if (startAt) {
        doc.fontSize(fontSize).text(text, startAt.x, startAt.y)
      } else {
        doc.fontSize(fontSize).text(text)
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
