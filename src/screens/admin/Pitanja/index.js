import React, {useState} from 'react'
import "./_index.scss"
import Modal from '../../../components/modal'
import Img from "../../../assets/icons/AddQue.svg"

const Pitanja= () => {
  const [modalShow, setModalShow] = useState({
    test: false
  });

  return (
    <div className='Screen'>
      <div className='top'>Pitanja</div>
      <div className='Content'>
         <img className="icon" src={Img} onClick={()=>{
          setModalShow({...modalShow, test:true});
        }}></img>
      </div>

      {
        modalShow.test && 
        <Modal
          close={()=>setModalShow({...modalShow, test:false})}
          className="testing nema nista"
        >
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
        </Modal>
      }
    </div>
  )
}

export default Pitanja
