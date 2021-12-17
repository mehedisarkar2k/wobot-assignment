import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import icon from "../assets/wobot-icon.png";

const initialValues = {
  company: "",
  industry: "",
  companySize: "",
};

const validationSchema = Yup.object({
  company: Yup.string().required("required*"),
  industry: Yup.string().required("required*"),
  companySize: Yup.string().required("required*"),
});

const BasicForm = ({ proceedHandler }) => {
  const onSubmit = (values) => {
    console.log(values);
    proceedHandler(true);
  };
  return (
    <div className="w-full">
      <div className="w-full md:w-3/5 lg:w-2/5 mx-auto md:rounded-2xl shadow-xl hover:shadow-2xl px-10 md:px-14 py-5 md:py-7 transition bg-white">
        {/* icon */}
        <img className="h-7 md:h-9 mx-auto mb-2" src={icon} alt={"line icon"} />

        {/* form title */}
        <h2 className="text-slate-900 text-xl md:text-3xl font-semibold text-center mb-2 md:mb-4">
          It’s a delight to have you onboard
        </h2>
        <p className="text-gray-600 text-sm md:text-base text-center mb-4 md:mb-6">
          Help us know you better. (This is how we optimize Wobot as per your
          business needs)
        </p>

        {/* form */}
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            {/* company name field */}
            <div className="mb-4 md:mb-6">
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Company name:{" "}
                <ErrorMessage
                  name="company"
                  className="text-red-500 text-sm italic"
                  component="span"
                />
              </label>
              <Field
                type="text"
                id="company"
                name="company"
                className="bg-white border border-gray-500 text-gray-900 placeholder-gray-400 text-sm rounded-lg focus:outline-gray-500 focus:ring-gray-500 focus:border-gray-500  block w-full p-2.5 "
                placeholder="Company name"
              />
              <p className="hidden mt-2 text-sm text-green-600">
                <span className="font-medium">Alright!</span> Username
                available!
              </p>
            </div>

            {/* industry field */}
            <div className="mb-4 md:mb-6">
              <label
                htmlFor="industry"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Industry:{" "}
                <ErrorMessage
                  name="industry"
                  className="text-red-500 text-sm italic"
                  component="span"
                />
              </label>
              <Field
                as="select"
                name="industry"
                id="industry"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-gray-500 focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                placeholder="select"
              >
                <option disabled value="">
                  Select
                </option>
                <option value="Computer">Computer Industry</option>
                <option value="Telecommunication">
                  Telecommunication industry
                </option>
                <option value="Agriculture">Agriculture Industry</option>
                <option value="Pharmaceutical">Pharmaceutical Industry</option>
              </Field>
            </div>

            {/* company size field */}
            <div className="mb-4 md:mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Company Size:{" "}
                <ErrorMessage
                  name="companySize"
                  className="text-red-500 text-sm italic"
                  component="span"
                />
              </label>
              <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="flex items-center mb-4">
                  <Field
                    id="company-option-1"
                    type="radio"
                    name="companySize"
                    value="1-20"
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                  />
                  <label
                    htmlFor="company-option-1"
                    className="block ml-2 text-sm font-medium text-gray-900"
                  >
                    1-20
                  </label>
                </div>

                <div className="flex items-center mb-4">
                  <Field
                    id="company-option-2"
                    type="radio"
                    name="companySize"
                    value="21-50"
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                  />
                  <label
                    htmlFor="company-option-2"
                    className="block ml-2 text-sm font-medium text-gray-900 "
                  >
                    21-50
                  </label>
                </div>

                <div className="flex items-center mb-4">
                  <Field
                    id="company-option-3"
                    type="radio"
                    name="companySize"
                    value="51-200"
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                  />
                  <label
                    htmlFor="company-option-3"
                    className="block ml-2 text-sm font-medium text-gray-900"
                  >
                    51-200
                  </label>
                </div>

                <div className="flex items-center mb-4">
                  <Field
                    id="company-option-4"
                    type="radio"
                    name="companySize"
                    value="201-500"
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                  />
                  <label
                    htmlFor="company-option-4"
                    className="block ml-2 text-sm font-medium text-gray-900"
                  >
                    201-500
                  </label>
                </div>

                <div className="flex items-center mb-4">
                  <Field
                    id="company-option-5"
                    type="radio"
                    name="companySize"
                    value="500+"
                    className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                  />
                  <label
                    htmlFor="company-option-5"
                    className="block ml-2 text-sm font-medium text-gray-900 "
                  >
                    500+
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Get Started
            </button>
          </Form>
        </Formik>
      </div>
      <p className="text-gray-400 mt-5 md:mt-10 text-center">
        Terms of use | Privacy policy
      </p>
    </div>
  );
};

export default BasicForm;
