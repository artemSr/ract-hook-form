import React from "react";
// import Form from './components/Form';
// import {Input} from "./components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {schema} from "./components/validation";

export default function App() {
  const {register, handleSubmit, formState: { errors } , reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data)
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="bankName" placeholder="Enter bank name" {...register('bankName')}/>
      <p>{errors.bankName?.message}</p>
      <input type="email" placeholder="Enter email" {...register('email')}/>
      <p>{errors.email?.message}</p>
      <input type="phone" placeholder="Enter phone" {...register('phone')}/>
      <p>{errors.phone?.message}</p>

      <input type="submit"/>
    </form>
  );
}

// <Form onSubmit={onSubmit}>
//   <Input name="firstName" />
//   <Input name="lastName" />
//
//   <Input type="submit" value="Submit" />
// </Form>
