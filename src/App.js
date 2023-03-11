import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [year, setYear] = useState('2020');
  const items = [
    {
      name: 'Book',
      year: 2020,
    },
    {
      name: 'Computer',
      year: 2022,
    },
    {
      name: 'Pen',
      year: 2020,
    },
    {
      name: 'Mouse',
      year: 2022,
    },
  ];

  const filterValue = (value) => {
    setYear(value);
  };
  // console.log(year);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <FitlerItems onFilterValue={filterValue} />
      <ListItems items={items} filterYear={parseInt(year)} />
    </div>
  );
}

const ListItems = (props) => {
  const content = <p>No Expese found </p>;
  return (
    <ul>
      {props.items.length > 0
        ? props.items.map((item) =>
            props.filterYear === item.year ? (
              <li>
                {item.name} {item.year}
              </li>
            ) : (
              ''
            )
          )
        : content}
    </ul>
  );
};

const FitlerItems = (props) => {
  // const [year, setYear] = useState("");
  const changeItemHandler = (e) => {
    props.onFilterValue(e.target.value);
    // setYear(e.target.value);
  };
  return (
    <div>
      <select name="" id="" onChange={changeItemHandler}>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
};
