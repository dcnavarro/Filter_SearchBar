import { PersonItem } from './components/PersonItem';
import JSONDATA from './MOCK_DATA.json';
import {FilterBar} from './components/FilterBar';
import { useState } from 'react';
import dayjs from 'dayjs';

const isSameOrAfter = require('dayjs/plugin/isSameOrAfter')
const isSameOrBefore = require('dayjs/plugin/isSameOrBefore')
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);



function App() {
  const [allData, setAllData] = useState(JSONDATA)

  const generateGenderDataForDropdown = () =>{
    return [...new Set (JSONDATA.map(element => element.gender))]
  }

  const handleFilterName = (name) =>{
    const filteredData = JSONDATA.filter((element) => {
      const fullName = `${element.first_name} ${element.last_name}`;
      if(fullName.toLowerCase().includes(name.toLowerCase())){
        return element;
      }
    })    
    setAllData(filteredData);
  };

  const handleFilterEmail = (email) =>{
    const filteredData = JSONDATA.filter((element) => {
      if(element.email.toLowerCase().includes(email.toLowerCase())){
        return element;
      }
    })    
    setAllData(filteredData);    
  }

    const handleFilterGender = (gender) =>{
    const filteredData = JSONDATA.filter((element) => {
      if(element.gender === gender){
        return element;
      }
    })    
    setAllData(filteredData);    
  }

      const handleFilterDate = (date, field) =>{
    const filteredData = JSONDATA.filter((element) => {
    if (field === 'from' && dayjs(element.date).isSameOrAfter(dayjs(date))){
        return element;
    } else if( field === 'to' && dayjs(element.date).isSameOrBefore(dayjs(date))){
        return element;
    }
    })    
    setAllData(filteredData);    
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <FilterBar 
          genders= {generateGenderDataForDropdown()} 
          onNameFilter={handleFilterName}
          onEmailFilter={handleFilterEmail}
          onGenderFilter={handleFilterGender}
          onDateFilter={handleFilterDate}
          
          />
        </div>
        <div className="col-sm-9">
          <div className="row mt-5">
            {allData.map((element) => (
              <PersonItem el={element} key={element.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
