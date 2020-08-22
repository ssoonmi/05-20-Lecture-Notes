import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWithContext from './AppWithContext';

const data = {
  company: {
    name: "Company, Inc.",
    established: 1874,
    description: "Company, Inc. makes great products for you and your family.",
    about: {
      story: `
        It was the year 1874. The marvels of science had just shown that
        selenium was photoconductive! The brilliant minds at Company, Inc, did
        not know what that meant, but knew they could do something to capitalize
        on it. They created the first selenium mineral additive and it took the
        world by storm! Unfortunately, it was soon realized that selenium, in
        large amounts, was toxic. Surviving the impending lawsuits, Company,
        Inc. created the new product Boop!, a goose-powered grist mill that
        could turn out tens of pounds of flour per month. From there, Company,
        Inc. has grown to many more products that make your life better.
      `
    },
    staff: [
      { id: 1, name: "Tonya", title: "TANYA!", photo: 'https://via.placeholder.com/150' },
      { id: 2, name: "Bill", title: "That guy, Bill", photo: 'https://via.placeholder.com/150' },
      { id: 3, name: "Robot", title: "Beeper. Booper.", photo: 'https://via.placeholder.com/150' },
      { id: 4, name: "Kitty", title: "Meower!", photo: 'https://via.placeholder.com/150' },
    ]
  }
};

ReactDOM.render(
  <React.StrictMode>
    <AppWithContext data={data} />
  </React.StrictMode>,
  document.getElementById('root')
);
