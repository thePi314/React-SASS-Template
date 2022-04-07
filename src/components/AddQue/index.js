import React,{useState} from 'react'
import "./_index.scss"
import Img from "../../assets/icons/AddQue.svg"


const AddQue = () => {
    const [show, setShow] = useState(false);
    const [body, setBody] = useState(true);

  return (
  <>
    <div className={`${body ? "body" : "body blur"}`}>
    <div className="Button" onClick={()=>setShow(!show) & setBody(!body)} ><img className="icon" src={Img}></img></div>

    
    {show &&
    
      <div className='AddQue'>
        <h1>Dodavanje pitanja</h1>
        <label for="text"><h3>Text pitanja</h3></label>
        <input type="button" name="text" id='text' ></input>
        <label for="kategorija"><h3>Kategorija</h3></label>
        <select id="kategorija" name="kategorija">
          <option value="Teorija">Teorija</option>
          <option value="Znak">Znak</option>
          <option value="Raskrsnica">Raskrsnica</option>
        </select>
        
        
      </div>
    
    }
    </div>
  </>
  )
}

export default AddQue