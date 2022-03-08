import React, { useEffect, useState } from "react";

const Table = () => {
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
      ime_i_prezime: "SAJO mujicadwawdawd",
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
  const [range, setRange] = useState([]);
  const [paginatedRows, setPaginatedRows] = useState([]);

  useEffect(() => {

    const numberOfRows = data.length;

    const totalPageCount = Math.ceil(numberOfRows / pageSize);

    setRange(rangeArray(1, totalPageCount));

    // setting first 5 posts
    setPaginatedRows(data.slice(0, pageSize));

  }, [])

  const changePagination = (index) => {

    setCurrentPage(index);

    const startIndex = (index - 1) * pageSize;

    // console.log("slajsam od:", startIndex, " do:", startIndex + 5)

    setPaginatedRows(data.slice(startIndex, startIndex + 5))
  }

  return (
    <div className="table">
      <table>
        <thead>
          <tr className="header">
            {data &&
              data.length > 0 &&
              Object.keys(data[0]).map((key, i) => {
                return <th key={i}> {key.replaceAll("_", " ")}</th>;
              })}
          </tr>
        </thead>
        <tbody>
          {paginatedRows.map((person, i) => {
            return (
              <tr key={i}>
                {data &&
                  data.length > 0 &&
                  Object.values(person).map((value, i) => {
                    return <td key={i}>{value}</td>;
                  })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        {range.map((value) => {
          return (
            <div className={`pagination-link ${value == currentPage ? "active" : ""}`}
              key={value}
              onClick={() => { changePagination(value) }}
            >{value}</div>
          )
        })}
      </div>
    </div>
  );
};

export default Table;