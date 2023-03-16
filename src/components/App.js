import React from "react";
import './../styles/App.css';
import Form from "./Form";

const fields = [
  { name: "name", type: "text", label: "Name" },
  { name: "email", type: "email", label: "Email" },
  { name: "password", type: "password", label: "Password" }
];

const onSubmit = (formData) => {
  console.log(formData);
};

const App = () => {
  return <Form fields={fields} onSubmit={onSubmit} />;
};

export default App;