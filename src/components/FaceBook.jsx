import React, {useState} from 'react'
import profileData from "../data/berlin.json"

export default function FaceBook() {
  const [profiles, setProfiles] = useState(profileData);
  const [selectedCountry, setSelectedCountry] = useState('');

  const countries = profiles.map(profile => {
    return profile.country;
  })

  const countryList = [... new Set(countries)];
  
  return (
    <div>
        {countryList.map((country) => 
        <button key={country} onClick={() => setSelectedCountry(country)}>
          {country}
        </button>
        
        )}

        {profiles.map((profile, index) => 
        <div  key={index}
              className='profileBlock' 
              style={{
                backgroundColor: profile.country === selectedCountry ? 'lightblue' : 'transparent',
                color: profile.country === selectedCountry ? 'white' : 'black'
              }}
        
        >
            <div className='profileImg'>
              <img src={profile.img}></img>
            </div>
            <div className='profileDetails'>
              <b> First Name: </b>{profile.firstName} <br />
              <b> Last Name: </b> {profile.lastName} <br />
              <b> Country: </b> {profile.country} <br />
              <b> Type: </b>{profile.isStudent ? 'Student' : 'Teacher'}
            </div>
        </div>
        )}
    </div>
  )
}
