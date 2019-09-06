const PDFDocument = require('pdfkit')

module.exports = async (request, response) => {
  const doc = new PDFDocument()
  const payload = await request.body
  doc.pipe(response)
  doc.polygon([100, 0], [50, 100], [150, 100])
  doc.stroke()
  doc.text(payload.data.title)
  doc.end()
}
