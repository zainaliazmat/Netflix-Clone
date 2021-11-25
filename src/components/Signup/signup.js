import React, { useContext, useState } from "react";
import "./signup.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Error } from "../error/error";
import { Popup } from "../Screen-PopUp/poup";
import { RootContext } from "../../Context/rootContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

export const Signup = () => {
  const [popup, setPopup] = useState(false);
  const { signup, setSignup } = useContext(RootContext);
  const phoneRegExp =
    /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;

  const SignupSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    lastname: Yup.string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    phonenumber: Yup.string()
      .matches(phoneRegExp, "Invalid Number")
      .required("Required"),
    email: Yup.string().email().required("Required"),
    password: Yup.string().required("Required").min(8).required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      phonenumber: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      let contain = verifySubmit(values);
      if (contain) {
        let users = [...signup];
        users.push(values);
        setSignup(users);
        pop("Registered Successfully", false);
      }
    },
  });

  const verifySubmit = (value) => {
    let users = [...signup];
    let filter = users.filter((user) => user.email === value.email);
    if (filter.length >= 1) {
      pop("You have already registed through this email", true);
      return false;
    }
    return true;
  };

  const pop = (massage, col) => {
    setPopup({ value: true, msg: massage, color: col });
    setTimeout(function () {
      setPopup({ value: false, msg: "", color: "" });
    }, 3000);
  };

  return (
    <div className="su-li-background">
      {popup.value ? <Popup msg={popup.msg} color={popup.color} /> : null}
      <div className="su-li-card">
        <div className="card-info">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3>
            Ready to watch? Create a new accont or login if you already have
            one.
          </h3>
        </div>
        <div className="wrapper-card-form">
          <div className="card-form">
            <h1>Register</h1>
            <form
              action=""
              className="input-from"
              onSubmit={formik.handleSubmit}
            >
              <div className="form-fields">
                <div className="field fn">
                  <span>First Name</span>
                  <input
                    type="text"
                    name="firstname"
                    onChange={formik.handleChange}
                    value={formik.values.firstname}
                  />

                  {formik.errors.firstname && formik.touched.firstname ? (
                    <Error error={formik.errors.firstname} />
                  ) : null}
                </div>

                <div className="field ln">
                  <span>Last Name</span>
                  <input
                    type="text"
                    name="lastname"
                    onChange={formik.handleChange}
                    value={formik.values.lastname}
                  />
                  {formik.errors.lastname && formik.touched.lastname ? (
                    <Error error={formik.errors.lastname} />
                  ) : null}
                </div>

                <div className="field pn">
                  <span>Phone Number</span>
                  <input
                    type="tel"
                    name="phonenumber"
                    onChange={formik.handleChange}
                    value={formik.values.phonenumber}
                  />
                  {formik.errors.phonenumber && formik.touched.phonenumber ? (
                    <Error error={formik.errors.phonenumber} />
                  ) : null}
                </div>

                <div className="field em">
                  <span>Email</span>
                  <input
                    type="text"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <Error error={formik.errors.email} />
                  ) : null}
                </div>

                <div className="field ps">
                  <span>Password</span>
                  <input
                    type="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  {formik.errors.password && formik.touched.password ? (
                    <Error error={formik.errors.password} />
                  ) : null}
                </div>

                <div className="field cps">
                  <span>Confirm Password</span>
                  <input
                    type="password"
                    name="confirmPassword"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                  />
                  {formik.errors.confirmPassword &&
                  formik.touched.confirmPassword ? (
                    <Error error={formik.errors.confirmPassword} />
                  ) : null}
                </div>
              </div>
              <input className="submit" type="submit" value="Create Account" />
            </form>
            <div className="login-link">
              <span>Already have an account? </span>
              <Link to="/login" className="su-li-link">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
