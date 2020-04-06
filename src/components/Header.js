import React, { useState } from "react";
import "../css/bootstrap.min.css";
import "../css/styles.css";
import "../css/header.css";
import "../css/button.css";
import "../bootstrap.min.js";

const apiCategoryURL =
  "https://www.themealdb.com/api/json/v1/1/list.php?c=list";

function fetchCategories() {
  fetch(apiCategoryURL)
    .then(response => response.json())
    .then(console.log(data));
}

function getRandomRecipe() {
  console.log("Random Recipe");
}

export default function Header() {
  return (
    <div id="header-wrapper">
      HEADER
      {/* fetchCategories */}
      <div id="menu-wrapper">
        {/* Categories dropdown menu */}
        <div className="dropdown cb-dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Category
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button className="dropdown-item" type="button">
              Beef
            </button>
            <button className="dropdown-item" type="button">
              Pork
            </button>
            <button className="dropdown-item" type="button">
              Vegetarian
            </button>
          </div>
          {/* end Categories dropdown menu */}
        </div>
        {/* Countries dropdown menu */}
        <div className="dropdown cb-dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Countries / Area
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button className="dropdown-item" type="button">
              Japan
            </button>
            <button className="dropdown-item" type="button">
              Greece
            </button>
            <button className="dropdown-item" type="button">
              Mexico
            </button>
          </div>
          {/* end Countries dropdown menu */}
        </div>
        <div>
          <button
            type="button"
            onClick={getRandomRecipe}
            className="btn btn-info cb-button"
          >
            Surprise me!
          </button>
        </div>
        <label>
          <div className="input-group mb-3 cb-search">
            <input
              type="text"
              className="form-control"
              placeholder="Search for recipes..."
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </div>
        </label>
        {/* end menu-wrapper */}
      </div>
      {/* end header-wrapper */}
    </div>
  );
}
