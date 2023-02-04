import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Modal from './components/Modal'
import DeleteModal from './components/DeleteModal'
import Tabel from './components/Tabel'
import UpdateModal from './components/UpdateModal'

const patientData = [
  {
    id : '11',
    pet_name : 'John Doe',
    status : 'allergy',
    pawrent : 'Thel Nu San',
    breed : 'beagle',
    gender : 'male',
    dob : '1.5.2011',
    ph_no : '09797122199',
    address : 'တိုက်(၅)၊အခန်း(၁၀၁)၊လှိုင်သီရိအိမ်ရာ ',
    city : 'yangon',
    township : 'hlaing'
  },
  {
    id : '2',
    pet_name : 'John Doe',
    status : 'allergy',
    pawrent : 'Thel Nu San',
    breed : 'goldenretriver',
    gender : 'female',
    dob : '1.5.2011',
    ph_no : '09797122199',
    address : 'တိုက်(၅)၊အခန်း(၁၀၁)၊လှိုင်သီရိအိမ်ရာ',
    city : 'mandalay',
    township : 'aungmyaytharzan'
  },
  {
    id : '30',
    pet_name : 'John Doe',
    status : 'pickyeater',
    pawrent : 'Thel Nu San',
    breed : 'spaniel',
    gender : 'male',
    dob : '1.5.2011',
    ph_no : '09797122199',
    address : 'တိုက်(၅)၊အခန်း(၁၀၁)၊လှိုင်သီရိအိမ်ရ',
    city : 'yangon',
    township : 'hlaing'
  }
]

const STORAGE_KEY = 'store1123';

function App() {
  const [patientLists, setPatientLists] = useState(patientData);
  const [sampleLists, setSampleLists] = useState(patientData);
  const [selectedDataId , setSelectedDataId] = useState('');

  useEffect(() => {
    const patientListsJSON = localStorage.getItem(STORAGE_KEY);
    if  (patientListsJSON !== null) {
      setPatientLists(JSON.parse(patientListsJSON));
      setSampleLists(JSON.parse(patientListsJSON));
    }
  },[])
  
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(patientLists));
  }, [patientLists])

  const handleProductDelete = (id) => {
    setPatientLists(patientLists.filter(patient => patient.id !== id));
  }

  const handlePatientAdd = () => {
  
    const newPatientData = {
      id : ""+ Math.floor(Math.random() * 100),
      pet_name : '',
      status : '',
      pawrent : '',
      breed : '',
      gender : '',
      dob : '',
      ph_no : '',
      address : '',
      city: '',
      township: ''
    };
    setSampleLists([...patientLists, newPatientData]);
    setSelectedDataId(newPatientData.id);
  }


  function handleDataChange(id , updatedData) {
      const newPatientLists = [...sampleLists];
      const index = newPatientLists.findIndex((item) => (
          item.id === id
      ));
      newPatientLists[index] = updatedData;
      setSampleLists(newPatientLists);     
  }

  const handleDataAdd = (e ) => {
    e.preventDefault(); 
    setPatientLists(sampleLists);
    setSelectedDataId('');
  }

  const handleDataInputCancel = () => {
    setSampleLists(patientLists);
    setSelectedDataId('');
  }



  return (
    <>
      <Navbar />

      <section className='article-wrapper'>

         <h1>Patient List</h1>
         
         {/* Option Section Starts */}

         <div className='option_section'>
         {/* Search Section */}
          <form className='input-form'>
            
              <div className='search-wrapper'>
                <input className='search-input' type="text" placeholder='Search table' />
                <img src="src/images/search.png" alt="icon" />
              </div>
              {/* select wrapper */}
              <div className='select-wrapper'>
                <select name="status" id="status">
                <option value="all">Status All</option>
                <option value='some'>Some</option>
              </select>
              <select name="status" id="status">
                <option value="all">Breed</option>
                <option value='some'>Some</option>
              </select>
              </div>

          </form>
          
          <div className='article-right'>
            <button className='add-btn' data-bs-toggle='modal' data-bs-target="#myModal" onClick={handlePatientAdd}>
              <img src="src/images/add.png" alt="icon" />
              Add New Patient
            </button>


            <div className='rows-select'>
              <label htmlFor="rows">Rows per page :</label>
              <select className='row-select' name="row" id="rows">
              <option value="1">1</option>
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
            </div>

          </div>

         </div>

         {/* Option Section End */}

         <hr />

         {/* Table */}
         <Tabel setSelectedDataId={setSelectedDataId} patientLists={patientLists} setPatientLists={setPatientLists} />

          {/* Modal */}

         <Modal selectedDataId={selectedDataId} patientLists={sampleLists} handleDataChange={handleDataChange} handleDataAdd={handleDataAdd} handleDataInputCancel={handleDataInputCancel}/>
         <UpdateModal selectedDataId={selectedDataId} patientLists={sampleLists} handleDataChange={handleDataChange} handleDataAdd={handleDataAdd} handleDataInputCancel={handleDataInputCancel}/>
         <DeleteModal selectedDataId={selectedDataId} handleProductDelete = {handleProductDelete} handleDataInputCancel={handleDataInputCancel}/>

         { /* Toast */ }
         
      </section>

      
    </>    
  )
}

export default App
