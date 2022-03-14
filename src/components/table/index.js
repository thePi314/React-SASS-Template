import React, { useEffect, useState } from "react";

import "./_index.scss";

const Table = () => {
  var data = [
    {
      Ime_Prezime: "Amar Sila",
      Broj_Casova: "5",
      Faza_Obuke: "Voznja",
      Ostatak_novca_za_isplatu: "500.00 KM",
    },
    {
      Ime_Prezime: "Tarik Besic",
      Broj_Casova: "25",
      Faza_Obuke: "Voznja",
      Ostatak_novca_za_isplatu: "50.00 KM",
    },
    {
      Ime_Prezime: "Ensar Dzmafo",
      Broj_Casova: "/",
      Faza_Obuke: "Prva pomoc",
      Ostatak_novca_za_isplatu: "450.00 KM",
    },
    {
      Ime_Prezime: "Ewel Kameni",
      Broj_Casova: "9",
      Faza_Obuke: "Voznja",
      Ostatak_novca_za_isplatu: "250.00 KM",
    },
    {
      Ime_Prezime: "Njobe Sklaka",
      Broj_Casova: "15",
      Faza_Obuke: "Voznja",
      Ostatak_novca_za_isplatu: "150.00 KM",
    },
    {
      Ime_Prezime: "Njobe Sklaka",
      Broj_Casova: "15",
      Faza_Obuke: "Voznja",
      Ostatak_novca_za_isplatu: "150.00 KM",
    },
    {
      Ime_Prezime: "Amar Sila",
      Broj_Casova: "5",
      Faza_Obuke: "Voznja",
      Ostatak_novca_za_isplatu: "500.00 KM",
    },
    {
      Ime_Prezime: "Tarik Besic",
      Broj_Casova: "25",
      Faza_Obuke: "Voznja",
      Ostatak_novca_za_isplatu: "50.00 KM",
    },
    {
      Ime_Prezime: "Ensar Dzmafo",
      Broj_Casova: "/",
      Faza_Obuke: "Prva pomoc",
      Ostatak_novca_za_isplatu: "450.00 KM",
    },
    {
      Ime_Prezime: "Ewel Kameni",
      Broj_Casova: "9",
      Faza_Obuke: "Voznja",
      Ostatak_novca_za_isplatu: "250.00 KM",
    },
  ];

  const [currentPage, setcurrentPage] = useState(1);
  const [users, setUsers] = useState(5);
  const [range, setRange] = useState([]);

  const arrayLenght = (start, end) => {
    const length = end - start + 1;

    return Array.from({ length }, (_, number) => number + start);
  };

  useEffect(() => {
    const pages = Math.ceil(data.length / users);

    setRange(arrayLenght(1, pages));

    const lastUser = currentPage * users;
    const firstUser = lastUser - users;
    setcurrentUsers(data.slice(firstUser, lastUser));
  }, []);

  const [currentUsers, setcurrentUsers] = useState([]);

  const changePagination = (index) => {
    setcurrentPage(index);

    const startIndex = (index - 1) * users;

    setcurrentUsers(data.slice(startIndex, startIndex + 5));
  };

  const [row, setRow] = useState(data);

  return (
    <div>
      <div className="table">
        <div className="header">
          {row &&
            row.length > 0 &&
            Object.keys(row[0]).map((attr, i) => {
              return (
                <div className="cell" key={i}>
                  {attr.replaceAll("_", " ")}
                </div>
              );
            })}
        </div>
        <div>
          {currentUsers.map((row) => {
            return (
              <div className="row">
                {Object.keys(row).map((attr) => {
                  return <div className="cell">{row[attr]}</div>;
                })}
              </div>
            );
          })}
        </div>
      </div>

      <div className="pagination">
        {range.map((value) => {
          return (
            <div
              className={`pagination-link ${
                value == currentPage ? "active" : ""
              }`}
              key={value}
              onClick={() => {
                changePagination(value);
              }}
            >
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table;
