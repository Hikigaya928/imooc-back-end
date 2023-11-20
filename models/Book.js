const { MIME_TYPE_EPUB, UPLOAD_URL, UPLOAD_PATH } = require('../utils/constant')
const fs = require('fs')

class Book {
    constructor(file, data) {
        if (file) {
            this.createBookFromFile(file)
        } else {
            this.createBookFromData(data)
        }
    }

    createBookFromFile(file) {
        console.log('createBookFromFile', file);
        const {
            destination,
            filename,
            mimetype = MIME_TYPE_EPUB,
            path,
            originalname
        } = file
        const suffix = mimetype === MIME_TYPE_EPUB ? '.epub' : ''
        const oldBookPath = path
        const bookPath = `${destination}/${filename}${suffix}`
        const url = `${UPLOAD_URL}/book/${filename}${suffix}`
        const unzipPath = `${UPLOAD_PATH}/unzip/${filename}`
        const unzipUrl = `${UPLOAD_URL}/unzip/${filename}`
        if (!fs.existsSync(unzipPath)) {
            fs.mkdirSync(unzipPath, { recursive: true })
        }
        if (fs.existsSync(oldBookPath) && !fs.existsSync(bookPath)) {
            fs.renameSync(oldBookPath, bookPath)
        }
        this.fileName = filename
        this.path = `/book/${filename}${suffix}`
        this.filePath = this.path
        this.unzipPath = `/unzip/${filename}`
        this.url = url
        this.title = ''
        this.author = ''
        this.publisher = ''
        this.contents = []
        this.cover = ''
        this.category = -1
        this.categoryText = ''
        this.language = ''
        this.unzipUrl = unzipUrl
        this.originalname = originalname
    }
    createBookFromData(data) {

    }
}


module.exports = Book