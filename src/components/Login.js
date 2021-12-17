import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import icon from "../assets/wobot-icon.png";

const initialValues = {
  email: "name@test.com",
  password: "",
  remember: true,
};
const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  email: Yup.string().required("required*"),
  password: Yup.string().required("required*"),
});

const Login = () => {
  return (
    <div className="w-full">
      <div className="w-2/5 mx-auto rounded-2xl shadow-xl hover:shadow-2xl px-14 py-7 transition relative bg-white">
        {/* icon */}
        <img className="h-9 mx-auto mb-0" src={icon} alt={"line icon"} />
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <div className="mb-6">
              <h2 className="text-slate-900 text-3xl font-semibold text-center mb-4">
                Login
              </h2>
              <p className="text-gray-400 text-base text-center mb-6">
                Enter your credentials to continue
              </p>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your email:{" "}
                <ErrorMessage
                  name="email"
                  className="text-red-500 text-sm italic"
                  component="span"
                />
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Password:{" "}
                <ErrorMessage
                  name="password"
                  className="text-red-500 text-sm italic"
                  component="span"
                />
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <Field
                  id="remember"
                  name="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="font-medium text-gray-900">
                  Remember me
                </label>
              </div>
            </div>

            <div className="flex items-center justify-center w-full">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Register
              </button>
            </div>
          </Form>
        </Formik>
      </div>
      <p className="text-gray-400 mt-10 text-center">
        Terms of use | Privacy policy
      </p>
    </div>
  );
};

export default Login;
