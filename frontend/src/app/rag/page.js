"use client";

import Head from "next/head";
// import styles from "../styles/Home.module.css";
import React from "react";
import { useState, useEffect } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState();
  const [output, setOutput] = useState();

  const get_model = () => {
    console.log("Sendingr ", prompt);

    const postData = {
      query: prompt,
    };
    fetch("http://127.0.0.1:5000/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Handle the data from the API
        console.log("Data from API:", data);
        setOutput(data["response"]);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="bg-gray-50 w-screen h-screen">
      <main className="text-black">
        <h1 clsasName="ml-5 block"> Leetcode Tutor </h1>
        <input
          className="border-2 ml-5"
          type="text"
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          className="bg-green-400 ml-10 text-emerald-900"
          onClick={get_model}
        >
          Submit
        </button>
        <div>
          <p className="border-2 mt-5 ml-5 mr-20 border-cyan-300 mg">
            Prompt output:
          </p>
          {output}
        </div>
      </main>
    </div>
  );
}
