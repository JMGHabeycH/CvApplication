import { useState } from "react"
import { usePrevious } from "@uidotdev/usehooks";
import Form from "./components/form/form"
import CvDisplay from "./components/CvDisplay/CvDisplay";




function App() {
  const initialForm = {
    name: '',
    email: '',
    phoneNumber: '',
    profile: '',
    schoolName: '',
    title: '',
    completionYear: '',
    companyName: '',
    mainResponsibilities: '',
    from:'',
    until: '',
  }

  
  const [isActive, setIsActive] = useState(true)
  const [cvData, setCvData] = useState(initialForm);
  const [cvShown, setCvShown] = useState(false)
  
  const previousState = usePrevious(cvData);

  const handleChange = (e) => {
    setCvData({
      ...cvData,
      [e.target.name]: e.target.value,
    })
  }

  const handleCreate = (e) =>{
    e.preventDefault();
    setCvData(initialForm);
    setIsActive(!isActive);
    setCvShown(true);
  }

  const handleEdit = (e) =>{
    e.preventDefault();
    setCvShown(false);
    if(previousState){
      setCvData(previousState);
    }else{
      setCvData(initialForm);
    }
    
  }

  const handleDisplay = () => {
    setIsActive(!isActive);
  }

  


  return (
    <>
      <Form handleDisplay={handleDisplay} isActive={isActive} handleEdit={handleEdit} handleChange={handleChange} cvData={cvData} handleCreate={handleCreate} />
      <CvDisplay cvShown={cvShown} cvData={previousState ? previousState : initialForm } />
    </>
  )
}

export default App
