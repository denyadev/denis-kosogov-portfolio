import fs from 'fs'
import path from 'path'

const filePath = path.resolve('.', 'public/Denis-Kosogov-Resume.pdf')
const imageBuffer = fs.readFileSync(filePath)

export default function fileDownload(req, res) {
  res.setHeader('Content-Type', 'application/pdf')
  res.send(imageBuffer)
}