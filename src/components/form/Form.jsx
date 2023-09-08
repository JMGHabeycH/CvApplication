import './form.css'

function form({ handleDisplay, isActive, handleChange, cvData, handleCreate, handleEdit }) {
  return (
    <> 
        <div className='section-cvApp__container'>
            <div className='section-cvApp__title-container'>
                <h1 className='section-cvApp__title'>CV Application</h1>
                <div onClick={() => handleDisplay()}>{isActive ? '+' : '-'}</div>
            </div>
            <section style={{ display: isActive ? 'none' : 'block'}} className='section-cvApp'>
                <h2 className='section-cvApp__form-title'>Introduce your Information:</h2>
                <form className='cv-form'>
                    <fieldset className='cv-form__general-info'>
                        <legend className='cv-form__general-info-legend'>General Information</legend>
                        <div className='cv-form__name-field'>
                            <label htmlFor="name">Name:</label>
                            <input 
                                type='text' 
                                id='name'
                                name='name'
                                onChange={handleChange}
                                value={cvData.name}
                            />
                        </div>
                        <div className='cv-form__email-field'>
                            <label htmlFor="email">Email:</label>
                            <input 
                                type='text' 
                                id='email'
                                name='email'
                                onChange={handleChange}
                                value={cvData.email}    
                            />
                        </div>
                        <div className='cv-form__phone-field'>
                            <label htmlFor="phoneNumber">Phone Number:</label>
                            <input 
                                type="text" 
                                id='phoneNumber'
                                name='phoneNumber'
                                onChange={handleChange}
                                value={cvData.phoneNumber}  
                            />
                        </div>
                        <div className='cv-form__profile'>
                            <label htmlFor="profile">Profile:</label>
                            <textarea 
                                type="text" 
                                id='profile'
                                name='profile'
                                onChange={handleChange}
                                value={cvData.profile} 
                                cols="30" 
                                rows="9" 
                            />
                        </div>
                    </fieldset>
                    <fieldset className='cv-form__eduexp'>
                        <legend className='cv-form__eduexp-legend'>Educational Experience</legend>
                        <div className='cv-form__school-field'>
                            <label htmlFor="schoolName">School Name:</label>
                            <input 
                                type="text" 
                                id='schoolName'
                                name='schoolName'
                                onChange={handleChange}
                                value={cvData.schoolName}   
                            />
                        </div>
                        <div className='cv-form__title-field'>
                            <label htmlFor="title">Title of Study:</label>
                            <input 
                                type="text" 
                                id='title'
                                name='title'
                                onChange={handleChange}
                                value={cvData.title}
                            />
                        </div>
                        <div className='cv-form__comp-year-field'>
                            <label htmlFor="completionYear">Completion Year:</label>
                            <input 
                                type="text" 
                                id='completionYear'
                                name='completionYear'
                                onChange={handleChange}
                                value={cvData.completionYear}
                            />

                        </div>
                    </fieldset>
                    <fieldset className='cv-form__pracexp'>
                        <legend className='cv-form__pracexp-legend'>Practical Experience</legend>
                        <div className='cv-form__comp-name-field'>
                            <label htmlFor="companyName">Company Name:</label>
                            <input 
                                type="text" 
                                id='companyName'
                                name='companyName'
                                onChange={handleChange}
                                value={cvData.companyName}
                            />
                        </div>
                        <div className='cv-form__main-resp-field'>
                            <label htmlFor="mainResponsibilities">Main Responsibilities:</label>
                            <textarea 
                                name="mainResponsibilities" 
                                id="mainResponsibilities" 
                                cols="30" 
                                rows="10"
                                onChange={handleChange}
                                value={cvData.mainResponsibilities}
                            >

                            </textarea>
                        </div>
                        <div className='cv-form__dates-container'>
                            <div className='cv-form__date-from-field'>
                                <label htmlFor="from">From: </label>
                                <input 
                                    type="date" 
                                    id='from'
                                    name='from'
                                    onChange={handleChange}
                                    value={cvData.from}
                                />
                            </div>
                            <div className='cv-form__date-until-field'>
                                <label htmlFor="until">Until: </label>
                                <input 
                                    type="date" 
                                    id='until'
                                    name='until'
                                    onChange={handleChange}
                                    value={cvData.until}
                                />
                            </div>
                        </div>
                    </fieldset>
                    <div className='cv-form__button-container'>
                        <div className='cv-form__button-create-container'>
                            <button onClick={handleCreate} className='cv-form__button-create'>Create</button>
                        </div>
                        <div className='cv-form__button-edit-container'>
                            <button onClick={handleEdit} className='cv-form__button-edit'>Edit</button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
        
    </>
  )
}

export default form