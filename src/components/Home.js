import React from 'react';
import { withFormik, Form, Field } from "formik";

/*
Do we want to add a search bar? 
Our Home page will display cards from semantic-ui like foodgawker.com

*/

export default function Home() {
  return (
    <div>
      <section className="top-content">
        <div>
          <h1>Welcome to Chef Protfolio</h1>
          <h3>Become a Chef</h3>
          <button>Hi</button>
          <h3>View Protfolio's</h3>
          <button>Hi</button>
          <img />
          {/* <Field /> */}
        </div>
      </section>
      <section className="middle-cta">
        <div>
          <img />
          <div>text</div>
        </div>
      </section>
      <footer>
        <p>&copy; 2019 Chef Protfolio</p>
      </footer>
    </div>
  )
}