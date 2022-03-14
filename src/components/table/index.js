import React, { useEffect, useState } from "react";

const Table = (props) => {
  let data = [
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
      ostatak_novca_za_isplatu: 250,
    },
    {
      ime_i_prezime: "Imran Plasto",
      broj_casova: "/",
      faza_obuke: "Prva Pomoc",
      ostatak_novca_za_isplatu: 999,
    },
    {
      ime_i_prezime: "Amar Sila",
      broj_casova: "11",
      faza_obuke: "Voznja",
      ostatak_novca_za_isplatu: 911,
    },
    {
      ime_i_prezime: "Sumea mujic",
      broj_casova: "22",
      faza_obuke: "Voznja",
      ostatak_novca_za_isplatu: 253,
    },
    {
      ime_i_prezime: "Kanita mujic",
      broj_casova: "22",
      faza_obuke: "Voznja",
      ostatak_novca_za_isplatu: 254,
    }, {
      ime_i_prezime: "Evvel Kamenjas",
      broj_casova: "22",
      faza_obuke: "Voznja",
      ostatak_novca_za_isplatu: 250,
    },
    {
      ime_i_prezime: "hamza kamenjas",
      broj_casova: "33",
      faza_obuke: "Voznja",
      ostatak_novca_za_isplatu: 231,
    },
    {
      ime_i_prezime: "Jon doe",
      broj_casova: "/",
      faza_obuke: "prva pomoc",
      ostatak_novca_za_isplatu: 111,
    },
    {
      ime_i_prezime: "Fata mujic",
      broj_casova: "21",
      faza_obuke: "Voznja",
      ostatak_novca_za_isplatu: 253,
    },
    {
      ime_i_prezime: "Kata mujic",
      broj_casova: "22",
      faza_obuke: "Voznja",
      ostatak_novca_za_isplatu: 254,
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

  useEffect(() => {

    const numberOfRows = data.length;

    const totalPageCount = Math.ceil(numberOfRows / pageSize);

    sedivange(rangeArray(1, totalPageCount));

    // setting first 5 posts
    let newData=data.slice(0, pageSize);    
    // newData.map(data=>{return(...data,props}))

    setPaginatedRows(newData);

  }, [])

  const changePagination = (index) => {

    const max=Math.max(...range);
    const min=Math.min(...range);

    if(index>max || index<min)
      return;

    setCurrentPage(index);

    const startIndex = (index - 1) * pageSize;

    setPaginatedRows(data.slice(startIndex, startIndex + 5))
  }

  return (
    <>
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
          <div className="left"
            onClick={()=>changePagination(currentPage - 1)}
            > 
              &lt;
              </div>
          <div className="value">{currentPage}</div>
          <div className="right" onClick={()=>changePagination(currentPage + 1)}>&gt;</div>
        </div>
      </div>
    </>
  );
};

export default Table;