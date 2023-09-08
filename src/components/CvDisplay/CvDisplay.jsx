import './CvDisplay.css'

function CvDisplay({cvShown, cvData}) {
  return (
    <>
      <div style={{ display: cvShown ? 'block' : 'none'}}   className="cv__container">

        <div className="cv__general-info">
          <h2 className="cv__general-info__name">{cvData.name}</h2>
          <div className="cv__general-info__personal-info">
            <div>{cvData.email}</div> | <div>{cvData.phoneNumber}</div>
          </div>
          <div>{cvData.profile}</div>
        </div>
        <div className="cv__educational-experience">
          
          <div style={{ fontWeight: 'bold' }} >Education</div>
          <div className='cv__educational-experience__career-info'>
            <span style={{ fontWeight: 'bold' }} >{cvData.completionYear}</span>
            <span><div style={{ fontWeight: 'bold' }} >{cvData.title}</div><div>{cvData.schoolName}</div></span>
          </div>
        </div>
        <div className="cv__job-experience"> 
          <div className='cv__job-experience__title' style={{ fontWeight: 'bold' }}>Job Experience</div>
          <div className="cv__job-expetience__company-info">
            <div className="cv__job-experience__dates">{cvData.from} - {cvData.until}</div><div className="cv__job-experience__company-name">{cvData.companyName}</div>
          </div>
          <div className="cv__job-experience__main-responsibilities">
            {cvData.mainResponsibilities}
          </div>
        </div>
      </div>
    </>
  )
}

export default CvDisplay