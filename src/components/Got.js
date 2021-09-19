import axios from 'axios';
import React,{useEffect,useState} from 'react'
import CharDetails from './CharDetails';
const Got = () => {
    const [characters, setCharacters] = useState([])
    const [search, setSearch] = useState("")
    const [filtercharacters, setFiltercharacters] = useState([])

    useEffect(()=>{
    axios.get('https://thronesapi.com/api/v2/Characters/')
    .then((resp)=>{
    const gotchar = resp.data;
    setCharacters(gotchar)
    }).catch(err=>{console.log(err)})
    },[])

    useEffect(()=>{
    const chars =  characters.filter(person=>{
      return person.fullName.toLowerCase().includes(search.toLowerCase())
     })
    setFiltercharacters(chars)
    },[characters,search])

    return (
  <>
  <div className="searchbar">
  <input type="text"
         value={search}
         onChange={(e)=> setSearch(e.target.value)} 
         placeholder="Search Characters"
        />
  </div>
  <div className="gotchars">
  {
    filtercharacters.map((chardetails)=>{
      return(<>
      <CharDetails key={chardetails.id} chardetails={chardetails}/>
      </>)
    })
  }
  </div>
   <div className="quote">
   <p>Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you</p>
   <h4>-Tyrion Lannister</h4>
   </div>
   <footer>
     <h3>Developed by <a href="https://twitter.com/AmlanjyotiSaho5" target="_blank" rel="noreferrer">Amlan</a></h3>
   </footer>
  </> 
    );
}
 
export default Got;