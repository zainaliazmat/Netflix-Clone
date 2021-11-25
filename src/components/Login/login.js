import React, { useContext, useState } from "react";
import "./login.css";
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
  useHistory,
} from "react-router-dom";

export const Login = () => {
  const [popup, setPopup] = useState(false);
  const { signup, setSignup } = useContext(RootContext);
  const { user, setUser } = useContext(RootContext);
  let history = useHistory();
  const loginSchema = Yup.object().shape({
    email: Yup.string().email().required("Required"),
    password: Yup.string().required("Required").min(8).required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      verifySubmit(values);
    },
  });

  const verifySubmit = (value) => {
    let users = [...signup];
    let filter = users.filter(
      (user) => user.email === value.email && user.password === value.password
    );
    if (filter.length >= 1) {
      localStorage.setItem("token", "B5~R'U7Bj2pG>za_1DPmr8ETEs");
      localStorage.setItem("username", filter[0].firstname);
      history.push("./home");
      return;
    }
    pop(
      "This email or passowrd does't match, Please register before login",
      true
    );
    return;
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
          <div className="li-card-form">
            <h1>Login to your account</h1>
            <form
              action=""
              className="input-from"
              onSubmit={formik.handleSubmit}
            >
              <div className="li-form-fields">
                <div className="li-field ">
                  <span>Username</span>
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

                <div className="li-field ">
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
              </div>
              <input className="li-submit" type="submit" value="Log In" />
            </form>
            <div className="login-link">
              <span>Don't have an account yet? </span>
              <Link to="/signup" className="su-li-link">
                Join Netflix
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
