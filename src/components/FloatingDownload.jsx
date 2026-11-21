import { RESUME_URL } from '../data'

export default function FloatingDownload() {
  return (
    <div className="floating-download-circle">
      <a href={RESUME_URL} className="download-circle-btn">
        <div className="circle-icon">
          <i className="fas fa-download"></i>
          <i className="fas fa-file-pdf"></i>
        </div>
        <div className="tooltip">Download Resume</div>
        <div className="circle-pulse"></div>
      </a>
    </div>
  )
}
