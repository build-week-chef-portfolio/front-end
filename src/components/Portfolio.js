import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";

import { axiosWithAuth } from './AxioswithAuth';

const Portfolio = ({ errors, touched, status }) => {

  const [user, setUser] = useState([]);

  useEffect(() => {
    if (status) {
      setUser([...user, status]);
    }
  }, [status]);

  return (
    <div>
      <h1>Create a Post</h1>
      <Form>
        <label>Name</label>
        <Field text="type" name="chef_name" placeholder="Name" />
        {touched.chef_name && errors.chef_name && <p>{errors.chef_name}</p>}

        <label>Recipe Title</label>
        <Field text="type" name="recipe_title" placeholder="Title" />
        {touched.recipe_title && errors.recipe_title && <p>{errors.recipe_title}</p>}

        <button type="submit" value="Login">Submit!</button>
      </Form>
      {user.map(users => (
        <p key={users.id}>{users}</p>
      ))}
    </div>
  )
}

const headers = { "Content-Type": "application/json", Authorization: localStorage.getItem("token") }

const formikHOC = withFormik({
  mapPropsToValues({ chef_name, recipe_title }) {
    return {
      chef_name: chef_name || "",
      recipe_title: recipe_title || ""
    };
  },
  validationSchema: Yup.object().shape({
    chef_name: Yup.string().required(),
    recipe_title: Yup.string().required()
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    console.log(headers);
    axiosWithAuth()
      .post("https://chef-portfolio-buildweeks-be.herokuapp.com/api/posts", values)
      .then(res => {
        console.log(res);
        // localStorage.setItem("chef_name", res.data.chef_name);
      })
      .catch(err => console.error(err));
  }
});

const UserFormWithFormik = formikHOC(Portfolio);

export default UserFormWithFormik;

// { headers: { Authorization: localStorage.chef_name } }