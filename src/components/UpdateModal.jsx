import React from 'react'


const UpdateModal = ({selectedDataId, patientLists, handleDataChange, handleDataInputCancel, handleDataAdd}) => {
    const selectedData = patientLists.find(item => item.id === selectedDataId);
    const handleInputChange = (e) => {
        handleDataChange(selectedDataId, {
            ...selectedData,
            [e.target.name] : e.target.value,
        })
    }


  return (
    <div className="modal" id="editModal">
      <div className="modal-dialog modal-dialog-centered">
        { selectedData && <div className="modal-content text-center">

        <div className='w-full text-end'>        
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleDataInputCancel}></button>
        </div>
        <h3>Update Patient Info</h3>
        <small>Enter new patient information below.</small>

        <form className='form-wrapper text-left'>
            {/* left */}
            <div className='form-input-wrapper'>
                <div>               
                    <label htmlFor="pet_name">Pet Name</label>
                    <br />
                    <input type="text" 
                    id='pet_name' 
                    name='pet_name' 
                    value={selectedData.pet_name} 
                    onChange={handleInputChange} />
                </div>

                <div>
                    <label htmlFor="status-select">Status</label>
                    <br />
                    <select name="status" 
                    id="status-select" 
                    onChange={handleInputChange}>
                        <option value="">please choose status</option>
                        <option 
                        value="allergy"
                        selected={selectedData.status === "allergy"}
                        >
                            Allergy 
                        </option>
                        <option
                        value="pickyeater"
                        selected={selectedData.status === "pickyeater"}
                        > Picky Eater </option>
                    </select>
                </div>
            </div>

            <div className="form-input-wrapper">
                <div>
                        <label htmlFor="pawrent">Pawrent</label>
                        <br />
                    <input type="text"
                     id='pawrent'                      
                     name='pawrent'
                     onChange={handleInputChange}
                     value={selectedData.pawrent} />
                </div>

                <div>
                    <label htmlFor="breed-select">Breed</label>
                    <br />
                    <select 
                    name="breed" 
                    id="breed-select"
                    onChange={handleInputChange}
                    >
                        <option value="">please choose breed</option>
                        <option 
                        value="goldenretriver"
                        selected = {selectedData.breed === 'goldenretriver'}
                        >
                            Golden Retriver
                        </option>
                        <option 
                        value="beagle"
                        selected= {selectedData.breed === 'beagle'}
                        >
                            Beagle
                        </option>
                        <option 
                        value="spaniel"
                        selected = {selectedData.breed === 'spaniel'}
                        >
                            Spaniel
                        </option>
                    </select>
                </div>

            </div>

            <div className='form-input-wrapper'>
                <div className='form-radio-wrapper'>
                    <label>Gender</label>
                    <br />
                    <input type="radio" name="gender" id="male" value="male" 
                    checked = {selectedData.gender === "male"}
                    onChange={handleInputChange}/>
                    <label htmlFor="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female"
                    checked = {selectedData.gender === "female"}
                    onChange={(e) => handleDataChange(selectedDataId,
                        {
                            ...selectedData,
                            [e.target.name] : e.target.value,
                        })}
                    />
                    <label htmlFor="female">Female</label>
                </div>

                <div>
                    <label htmlFor="dob">Date of Birth</label>
                    <br />
                    <input type="date"
                    name='dob'
                    id='dob'
                    value={selectedData.dob}
                     onChange={handleInputChange}/>
                </div>
            </div>

            <div className='form-input-wrapper'>
                <div>
                    <label htmlFor="phone"> Contact Phone No </label>
                    <br />
                    <input type="number" id='phone' name="ph_no" 
                    value={selectedData.ph_no}
                    onChange={handleInputChange}/>         
                </div>

                <div>
                    <label htmlFor="address">Address</label>
                    <br />
                    <input type="text" id='address'
                    value={selectedData.address}
                     name='address'
                     onChange={handleInputChange}
                        />
                </div>
            </div>
            
            <div className="form-input-wrapper">
                <div>
                    <label htmlFor="city">City</label>
                    <br />
                    <select name="city" id="city"
                     onChange={handleInputChange}>
                        <option value="">Choose City</option>
                        <option value="yangon"
                        selected = {selectedData.city === 'yangon'}
                        >
                            Yangon
                        </option>
                        <option value="mandalay"
                        selected = {selectedData.city === 'mandalay'}
                        >Mandalay</option>
                        <option value="taunggyi"
                        selected = {selectedData.city === 'taunggyi'}
                        >Taunggyi</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="township">Township</label>
                    <br />
                    <select name="township" id="township" onChange={handleInputChange}>
                        <option value="">Choose Township</option>
                        <option value="aungmyaytharzan"
                        selected = {selectedData.township === 'aungmyaytharzan'}>Aungmyaytharzan</option>
                        <option value="hlaing"
                        selected = {selectedData.township === 'hlaing'}
                        >Hlaing</option>
                    </select>
                </div>
            </div>

            <div className='form-button-wrapper'>
                <button className='update-btn' type='submit' data-bs-dismiss="modal" onClick={handleDataAdd}> Update </button>
                <button className='cancel-btn' data-bs-dismiss="modal" onClick={handleDataInputCancel}> Cancel </button>
            </div>
        </form>

        </div>}
      </div>
    </div>
  )
}

export default UpdateModal