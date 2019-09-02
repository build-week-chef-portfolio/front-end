import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from "formik";
import * as Yup from 'yup';
import styled from 'styled-components';
import { axiosWithAuth } from './AxioswithAuth';

const Button = styled.button`
  background: black;
  border-style: solid;
  border-color: black;
  color: white;

  
`;

const CreatePost = ({ errors, touched, status }) => {

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

        <label>Chef Location</label>
        <Field text="type" name="chef_location" placeholder="Location" />
        {touched.chef_location && errors.chef_location && <p>{errors.chef_location}</p>}

        <label>Recipe Ingredients</label>
        <Field text="type" name="item_ingredients" placeholder="ingredient1; ingredient2;" />
        {touched.item_ingredients && errors.item_ingredients && <p>{errors.item_ingredients}</p>}

        <label>Pic</label>
        {/* {AddDropZoneHere} */}
        <Field text="type" name="pic" placeholder="Lotion" />
        {touched.pic && errors.pic && <img src={errors.pic}/>}

        <Button type="submit" value="Login">Submit!</Button>
      </Form>
      {user.map(users => (
        <p key={users.id}>{users}</p>
      ))}
    </div>
  )
}

const formikHOC = withFormik({
  mapPropsToValues({ chef_name, recipe_title, chef_location, item_ingredients }) {
    return {
      chef_name: chef_name || "",
      recipe_title: recipe_title || "",
      chef_location: chef_location || "",
      item_ingredients: item_ingredients || "",
    };
  },
  validationSchema: Yup.object().shape({

    chef_name: Yup.string().required("Name"),
    recipe_title: Yup.string().required("Recipe"),
    chef_location: Yup.string().required("Location"),
    item_ingredients: Yup.string().required("Ingredients"),


  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axiosWithAuth()
      .post("https://chef-portfolio-buildweeks-be.herokuapp.com/api/posts", values)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.error(err));
  },
});

const UserFormWithFormik = formikHOC(CreatePost);

export default UserFormWithFormik;