import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

const initialValues = {
  company: "",
};
const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  company: Yup.string().required("required*"),
});

const BasicForm = () => {
  const [selected, setSelected] = useState("");

  return (
    <div className="w-1/3 mx-auto">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div className="mb-6">
            <label
              htmlFor="company"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Company name
            </label>
            <Field
              type="text"
              id="company"
              name="company"
              className="bg-white border border-gray-500 text-gray-900 placeholder-gray-400 text-sm rounded-lg focus:outline-gray-500 focus:ring-gray-500 focus:border-gray-500  block w-full p-2.5 "
              placeholder="Company name"
            />
            <p className="hidden mt-2 text-sm text-green-600 dark:text-green-500">
              <span className="font-medium">Alright!</span> Username available!
            </p>
          </div>

          <div className="mb-6">
            <label
              htmlFor="industry"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Industry
            </label>
            <Field
              as="select"
              value={selected}
              name="industry"
              onChange={(e) => setSelected(e.target.value)}
              id="industry"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-gray-500 focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
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

          <label
            htmlFor="companySize"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Company Size
          </label>
          <div className="flex mb-6">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-700 focus:text-blue-700 active:bg-blue-500 active:text-gray-800"
            >
              1-20
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-700 focus:text-blue-700 active:bg-blue-500 active:text-gray-800"
            >
              21-50
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-700 focus:text-blue-700 active:bg-blue-500 active:text-gray-800"
            >
              51-200
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-700 focus:text-blue-700 active:bg-blue-500 active:text-gray-800"
            >
              201-500
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-700 focus:text-blue-700 active:bg-blue-500 active:text-gray-800"
            >
              500+
            </button>
          </div>

          <button
            type="submit"
            className="w-full text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get Started
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default BasicForm;
