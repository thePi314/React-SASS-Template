import React, { useEffect, useState } from "react";

const TableT = (props) => {
  let data = [
    //useState [data,setData]=useState();
    //dummy data
    {
      ime_i_prezime: "Tairk Besic",
      broj_casova: "/",
      faza_obuke: "Prva pomoc",
      ostatak_novca_za_isplatu: 250,
    },
    {
      ime_i_prezime: "Mujo mujic",
      broj_casova: "22",
      faza_obuke: "Voznja",
      ostatak_novca_za_isplatu: 251,
    },
    {
      ime_i_prezime: "Suljo mujic",
      broj_casova: "22",
      faza_obuke: "Voznja",
      ostatak_novca_za_isplatu: 252,
    },
    {
      ime_i_prezime: "Fata mujic",
      broj_casova: "22",
      faza_obuke: "Voznja",
      ostatak_novca_za_isplatu: 253,
    },
    {
      ime_i_prezime: "Kata mujic",
      broj_casova: "22",
      faza_obuke: "Voznja",
      ostatak_novca_za_isplatu: 254,
    }, {
      ime_i_prezime: "SAJO mujica",
      broj_casova: "22",
      faza_obuke: "Voznja",
      ostatak_novca_za_isplatu: 255,
    },
    {
      ime_i_prezime: "Imran Plasto",
      broj_casova: "/",
      faza_obuke: "Prva Pomoc",
      ostatak_novca_za_isplatu: 996,
    },
    {
      ime_i_prezime: "Amar Sila",
      broj_casova: "11",
      faza_obuke: "Voznja",
      ostatak_novca_za_isplatu: 917,
    },
    {
      ime_i_prezime: "Sumea mujic",
      broj_casova: "22",
      faza_obuke: "Voznja",
      ostatak_novca_za_isplatu: 258,
    },
    {
      ime_i_prezime: "Kanita mujic",
      broj_casova: "22",
      faza_obuke: "Voznja",
      ostatak_novca_za_isplatu: 259,
    }, {
      ime_i_prezime: "Evvel Kamenjas",
      broj_casova: "22",
      faza_obuke: "Voznja",
      ostatak_novca_za_isplatu: 260,
    },
    {
      ime_i_prezime: "hamza kamenjas",
      broj_casova: "33",
      faza_obuke: "Voznja",
      ostatak_novca_za_isplatu: 262,
    },
    {
      ime_i_prezime: "Jon doe",
      broj_casova: "/",
      faza_obuke: "prva pomoc",
      ostatak_novca_za_isplatu: 263,
    },
    {
      ime_i_prezime: "Fata mujic",
      broj_casova: "21",
      faza_obuke: "Voznja",
      ostatak_novca_za_isplatu: 264,
    },
    {
      ime_i_prezime: "Kata mujic1",
      broj_casova: "22",
      faza_obuke: "Voznja",
      ostatak_novca_za_isplatu: 265,
    },{
      ime_i_prezime: "Kata mujic2",
      broj_casova: "22",
      faza_obuke: "Voznja",
      ostatak_novca_za_isplatu: 266,
    },{
      ime_i_prezime: "Kata mujic3",
      broj_casova: "22",
      faza_obuke: "Voznja",
      ostatak_novca_za_isplatu: 267,
    },
    //  DRUGA TABELA - moras staviti sve pod komentar do ovoga
    // {
    //     ime_i_prezime: "Kata mujic",
    //     broj_racuna: "22",
    //     vrijeme_placanja: "Voznja",
    //     iznos_placanja: 250
    // },
  ];

  const rangeArray = (start, end) => {
    const length = end - start + 1;

    return Array.from({ length }, (_, number) => number + start)
  }

  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [range, sedivange] = useState([]);
  const [paginatedRows, setPaginatedRows] = useState([]);
  const sizes=[5,10,15,20];
  useEffect(() => {
    setCurrentPage(1);

    setPaginatedRows([])
    const numberOfRows = data.length;

    const totalPageCount = Math.ceil(numberOfRows / pageSize);

    sedivange(rangeArray(1, totalPageCount));

    // setting first 5 posts
    // let newData=data.slice(0, pageSize); 
    console.log("tare:",data.slice(0, pageSize));
    setPaginatedRows(data.slice(0,pageSize));

  }, [pageSize])

  useEffect(() => {
    
    console.log("Promjena pagnated rows,",paginatedRows)
    // setCurrentPage(1);
    
    
  }, [paginatedRows])
  
  const changePagination = (index) => {

    const max=Math.max(...range);
    const min=Math.min(...range);

    if(index>max || index<min)
      return;

    setCurrentPage(index);

    const startIndex = (index - 1) * pageSize;
    // console.log("startIndex:",startIndex,"Do:",Number(startIndex) + Number(pageSize))
    setPaginatedRows(data.slice(startIndex, Number(startIndex) + Number(pageSize)))
  }

  return (
    <div className="table-container">
      <div className="table">
        <div className="row header">
          {data &&
            data.length > 0 &&
            Object.keys(data[0]).map((key, i) => {
              return (<div key={i} className="cell header"> {key.replace(/_/g," ")}</div>)
            })}
            {props.actions ? <div className="cell header">Akcija </div> : ""}
        </div>

        {paginatedRows.map((person, i) => {
          return (
            <div key={i} className="row">
              {data &&
                data.length > 0 &&
                Object.values(person).map((value, i) => {
                  return (
                    <>
                    <div key={i} className="cell">{value}</div>
                    
                    </>
                  )
                })}
                {props.actions ? <div className="cell">{props.actions.map(action=>{
                  return (
                    <span className="action-icon"
                          onClick={action.onClick ?? action.onClick}
                    >{action.icon ? <img src={action.icon} /> : ""}</span>
                  )
                })} </div> : ''}
            </div>
          );
        })}
        <div className="pagination">
          <div className="changing">
            <div className="left"
              onClick={()=>changePagination(currentPage - 1)}
              > 
                &lt;
              </div>
            <div className="value">{currentPage}</div>
            <div className="right" onClick={()=>changePagination(currentPage + 1)}>&gt;</div>
          </div>
          <div className="page-number">
            <select className="selekt"
              onChange={(e)=>{setPageSize(e.target.value)}}
            > 
              {sizes.map(size=>{
                return <option value={size}>{size}</option>
              })}
            </select>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableT;