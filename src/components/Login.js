import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/AuthService";

const required = (value) => {
  if (!value) {
    return <div role="alert">This field is required!</div>;
  }
};

const Login = (props) => {
  const form = useref();
  const CheckButton = useref();
};
