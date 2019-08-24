import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <Form>
        <label>Username</label>
        <Field text="type" name="username" placeholder="Username" />
        <label>Password</label>
        <Field text="type" name="password" placeholder="Password" />
        <button type="submit" value="Login">Submit!</button>
      </Form>
    </div>
  )
}

const formikHOC = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  }
});

const UserFormWithFormik = formikHOC(Login);

export default UserFormWithFormik;