import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Modal from './components/Modal'
import DeleteModal from './components/DeleteModal'
import Tabel from './components/Tabel'
import UpdateModal from './components/UpdateModal'

const patientData = [
  {
    id : '1',
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
    id : '3',
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
  },
   {
    id : '4',
    pet_name : 'Sasha',
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
    id : '5',
    pet_name : 'Sasha',
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
    id : '6',
    pet_name : 'Sasha',
    status : 'pickyeater',
    pawrent : 'Thel Nu San',
    breed : 'spaniel',
    gender : 'male',
    dob : '1.5.2011',
    ph_no : '09797122199',
    address : 'တိုက်(၅)၊အခန်း(၁၀၁)၊လှိုင်သီရိအိမ်ရ',
    city : 'yangon',
    township : 'hlaing'
  },
   {
    id : '7',
    pet_name : 'Gary',
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
    id : '8',
    pet_name : 'Gary',
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
    id : '9',
    pet_name : 'Gary',
    status : 'pickyeater',
    pawrent : 'Thel Nu San',
    breed : 'spaniel',
    gender : 'male',
    dob : '1.5.2011',
    ph_no : '09797122199',
    address : 'တိုက်(၅)၊အခန်း(၁၀၁)၊လှိုင်သီရိအိမ်ရ',
    city : 'yangon',
    township : 'hlaing'
  },
   {
    id : '10',
    pet_name : 'Skyy',
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
    id : '11',
    pet_name : 'Skyy',
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
    id : '12',
    pet_name : 'Skyy',
    status : 'pickyeater',
    pawrent : 'Thel Nu San',
    breed : 'spaniel',
    gender : 'male',
    dob : '1.5.2011',
    ph_no : '09797122199',
    address : 'တိုက်(၅)၊အခန်း(၁၀၁)၊လှိုင်သီရိအိမ်ရ',
    city : 'yangon',
    township : 'hlaing'
  },
  {
    id : '13',
    pet_name : 'Skyy',
    status : 'pickyeater',
    pawrent : 'Thel Nu San',
    breed : 'spaniel',
    gender : 'male',
    dob : '1.5.2011',
    ph_no : '09797122199',
    address : 'တိုက်(၅)၊အခန်း(၁၀၁)၊လှိုင်သီရိအိမ်ရ',
    city : 'yangon',
    township : 'hlaing'
  },
  {
    id : '14',
    pet_name : 'Skyy',
    status : 'pickyeater',
    pawrent : 'Thel Nu San',
    breed : 'spaniel',
    gender : 'male',
    dob : '1.5.2011',
    ph_no : '09797122199',
    address : 'တိုက်(၅)၊အခန်း(၁၀၁)၊လှိုင်သီရိအိမ်ရ',
    city : 'yangon',
    township : 'hlaing'
  },
  {
    id : '15',
    pet_name : 'Skyy',
    status : 'pickyeater',
    pawrent : 'Thel Nu San',
    breed : 'spaniel',
    gender : 'male',
    dob : '1.5.2011',
    ph_no : '09797122199',
    address : 'တိုက်(၅)၊အခန်း(၁၀၁)၊လှိုင်သီရိအိမ်ရ',
    city : 'yangon',
    township : 'hlaing'
  },
  {
    id : '16',
    pet_name : 'Skyy',
    status : 'pickyeater',
    pawrent : 'Thel Nu San',
    breed : 'spaniel',
    gender : 'male',
    dob : '1.5.2011',
    ph_no : '09797122199',
    address : 'တိုက်(၅)၊အခန်း(၁၀၁)၊လှိုင်သီရိအိမ်ရ',
    city : 'yangon',
    township : 'hlaing'
  },
  {
    id : '17',
    pet_name : 'Skyy',
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
  const [pagination, setPagination] = useState('1');
  const [categoryInput, setCategoryInput] = useState({
    status : 'all',
    breed: 'all'
  })
  const [searchInput, setSearchInput] = useState("");
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
    setSampleLists(sampleLists.filter(patient => patient.id !== id));
    setSelectedDataId('');
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
    setSampleLists([...sampleLists, newPatientData]);
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

  const handleCategoryInput = (e) => {
    if (e.target.name === 'status') (
      setCategoryInput({...categoryInput, 
      status: e.target.value
      })
    )
    else (
      setCategoryInput({
        ...categoryInput,
        breed: e.target.value
      })
    )
  }

  const CategorizedList = () => {
    if(categoryInput.status === "all" && categoryInput.breed === "all"){
      return patientLists;
    } else if (categoryInput.status === "all"){
      return patientLists.filter(item => item.breed === categoryInput.breed)
    } else if (categoryInput.breed === "all") {
      return patientLists.filter(item => item.status === categoryInput.status)
    } else {
      return patientLists.filter(item => item.breed === categoryInput.breed && item.status === categoryInput.status)
    }
  }

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
    if(!e.target.value) setPatientLists(sampleLists);
  }
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if(searchInput) {
      setPatientLists(sampleLists.filter((item) => (
        item.pet_name.toLowerCase().includes(searchInput.toLowerCase())
      )))
    }
  }

  const handleDataInputCancel = () => {
    setSampleLists(patientLists);
    setSelectedDataId('');
  }

  const handlePaginationInput = (e) => {
    setPagination(e.target.value);
  }

  return (
    <>
      <Navbar />

      <section className='article-wrapper'>

         <h1>Patient List</h1>
         
         {/* Option Section Starts */}

         <div className='option_section'>
         {/* Search Section */}
          <form onSubmit={(e) => e.preventDefault()} className='input-form'>
            
              <div className='search-wrapper'>
                <input className='search-input' type="text" value={searchInput} onChange={handleSearchInput} placeholder='Search table' />
                <img src="src/images/search.png" alt="icon" onClick={handleSearchSubmit} />
              </div>
              {/* select wrapper */}
              <div className='select-wrapper'>
                <select onChange={handleCategoryInput} value={categoryInput.status} name="status" id="status">
                  <option value="all">Status All</option>
                  <option value='allergy'>Allergy</option>
                  <option value='pickyeater'>Picky Eater</option>
              </select>
              <select onChange={handleCategoryInput} value={categoryInput.breed} name="breed" id="breed">
                  <option value="all">Breed All</option>
                  <option value='goldenretriver'>Golden Retriver</option>
                  <option value='spaniel'>Spaniel</option>
                  <option value='beagle'>Beagle</option>
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
              <select className='row-select' onChange={handlePaginationInput} value={pagination} name="row" id="rows">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            </div>

          </div>

         </div>

         {/* Option Section End */}

         <hr />

         {/* Table */}
         <Tabel setSelectedDataId={setSelectedDataId} CategorizedList={CategorizedList} pagination={parseInt(pagination)}/>

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
