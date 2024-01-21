import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./AddPage.scss";
import { Helmet } from "react-helmet-async";
function AddPage() {
    const [search, setSearch] = useState('')
  const [dbData, setDbData] = useState([]);
  async function getFetch() {
    const response = await fetch("http://localhost:3003/");
    const data = await response.json();
    setDbData(data);
  }
  useEffect(() => {
    getFetch();
  }, []);
  async function postFunction(values) {
    await fetch("http://localhost:3003/", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await getFetch();
  }
  async function deleteProduct(id) {
    await fetch("http://localhost:3003/" + id, {
      method: "DELETE",
    });
    await getFetch();
  }
  return (
    <>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <Formik
        initialValues={{ title: "", detail: "", price: 0, category: "" }}
        validationSchema={Yup.object({
          title: Yup.string()
            .max(150, "Must be 15 characters or less")
            .required("Required"),
          detail: Yup.string()
            .max(200, "Must be 20 characters or less")
            .required("Required"),
          price: Yup.number()
            .required("Required"),
          category: Yup.string()
            .max(50, "Must be 20 characters or less")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting ,resetForm}) => {
           postFunction(values)
           resetForm()
            setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="title">Title</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" />

          <label htmlFor="detail">Detail</label>
          <Field name="detail" type="text" />
          <ErrorMessage name="detail" />

          <label htmlFor="price">Price </label>
          <Field name="price" type="number" />
          <ErrorMessage name="price" />
          <label htmlFor="category">Category</label>
          <Field name="category" type="text" />
          <ErrorMessage name="category" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <input type="text" name="" id="" onChange={(e)=>setSearch(e.target.value)} placeholder="search by name.." />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Detail</th>
            <th>Price</th>
            <th>Category</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {dbData
          .filter((x)=>x.title.toLowerCase().includes(search.toLowerCase()))
          .map((item) => (
            <tr>
              <td>{item.title}</td>
              <td>{item.detail}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>
                <i onClick={()=>deleteProduct(item._id)} class="fa-regular fa-trash-can"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default AddPage;
