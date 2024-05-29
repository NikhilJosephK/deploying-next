"use client";

import * as Yup from "yup";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";

import pool from "@/utils/postgres";

async function fetchDB() {
  const firstname = "asdf";
  const lastname = "asdfasfasd";
  const emails = "qqrq@asfd.af";

  try {
    const client = await pool.connect();
    console.log("connected");
    // console.log(firstName, lastName, email);
    const result =
      await client.query(`INSERT INTO userdata (id,firstname,lastname,email)
        VALUES (10,'${firstname}','${lastname}','${emails}');`);
    const data = result.rows;
    console.log("fetched data", data);

    client.release();
    return data;
  } catch (error) {
    console.log("error fetching data", error);
    throw error;
  }
}

fetchDB().then((data) => {
  console.log("reveived data", data);
  capital = data;
  return capital;
});

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  const onSubmit = async (data) => {
    // await fetchDB();

    console.log("bottom data", data);
  };

  const [inputVal, setInputValue] = useState("");

  useEffect(() => {}, [inputVal]);

  function inputValue(e) {
    setInputValue(e.target.value);
  }

  return (
    <div className="h-[88svh] flex justify-center items-center bg-white">
      <form
        className="flex flex-col gap-5 max-w-sm justify-center items-center mx-auto text-black "
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register("firstName")}
          value={inputVal}
          onChange={inputValue}
          placeholder="firstname"
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}

        <input {...register("lastName")} placeholder="lastname" />
        {errors.lastName && <p>{errors.lastName.message}</p>}

        <input {...register("email")} placeholder="email" />
        {errors.email && <p>{errors.email.message}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
