import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import resumePdf from '../../resume/Adarsh Resume Latest.pdf?url'

// Set up the worker for PDF.js using the local worker file
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString()

export default function Resume() {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setIsLoading(false)
    setError(null)
  }

  function onDocumentLoadError(error: Error) {
    console.error('Error loading PDF:', error)
    setError(`Failed to load resume: ${error.message}`)
    setIsLoading(false)
  }

  return (
    <section id="resume" className="container">
      <div className="resume-container">
        <h2>Resume</h2>
        
        {isLoading && (
          <div className="resume-loading">
            <p>Loading resume...</p>
          </div>
        )}
        
        {error && (
          <div className="resume-error">
            <p>{error}</p>
          </div>
        )}

        <div className="resume-content">
          <Document
            file={resumePdf}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={
              <div className="resume-loading">
                <p>Loading PDF...</p>
              </div>
            }
            error={
              <div className="resume-error">
                <p>Failed to load PDF. Please try again later.</p>
              </div>
            }
          >
            {numPages && (
              <>
                <Page 
                  pageNumber={pageNumber} 
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                  className="resume-page"
                />
                {numPages > 1 && (
                  <div className="resume-pagination">
                    <button
                      onClick={() => setPageNumber(prev => Math.max(1, prev - 1))}
                      disabled={pageNumber <= 1}
                      className="resume-page-btn"
                    >
                      Previous
                    </button>
                    <span className="resume-page-info">
                      Page {pageNumber} of {numPages}
                    </span>
                    <button
                      onClick={() => setPageNumber(prev => Math.min(numPages, prev + 1))}
                      disabled={pageNumber >= numPages}
                      className="resume-page-btn"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </Document>
        </div>
      </div>
    </section>
  )
}
