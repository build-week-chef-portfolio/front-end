import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";

const Signup = ({ errors, touched, status }) => {

  const [user, setUser] = useState([]);

  useEffect(() => {
    if (status) {
      setUser([...user, status]);
    }
  }, [status]);

  return (
    <div>
      <h1>Sign Up</h1>
      <Form>
        <label>Username</label>
        <Field text="type" name="username" placeholder="Username" />
        {touched.username && errors.username && <p>{errors.username}</p>}

        <label>Password</label>
        <Field text="type" name="password" placeholder="Password" />
        {touched.password && errors.password && <p>{errors.password}</p>}

        <label>Email</label>
        <Field text="type" name="email" placeholder="Email" />
        {touched.email && errors.email && <p>{errors.email}</p>}

        <label>Location</label>
        <Field text="type" name="location" placeholder="Location" />

        <button type="submit" value="Login">Submit!</button>
      </Form>
      {user.map(users => (
        <p key={users.id}>{users.username}</p>
      ))}
    </div>
  )
}

const formikHOC = withFormik({
  mapPropsToValues({ username, password, email, location }) {
    return {
      username: username || "",
      password: password || "",
      email: email || "",
      location: location || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required(),
    email: Yup.string().required()
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://chef-portfolio-buildweeks-be.herokuapp.com/api/auth/register", values)
      .then(res => {
        console.log(res);
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.error(err));
  }
});

const UserFormWithFormik = formikHOC(Signup);

export default UserFormWithFormik;