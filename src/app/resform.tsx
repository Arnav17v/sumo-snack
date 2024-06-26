"use client";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaConciergeBell } from "react-icons/fa";
import { PiBowlFoodFill } from "react-icons/pi";

const ResForm = (props: { trigger: boolean; setTrigger: any }) => {
  const [date, setDate] = useState(new Date());
  const [session, setSession] = useState("Lunch");

  const isFutureDate = (date: Date) => {
    const today = new Date();
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + 15);
    return date <= futureDate;
  };

  const handleTodayClick = () => {
    setDate(new Date());
  };

  const handleLunchClick = () => {
    setSession("Lunch");
  };

  const handleDinnerClick = () => {
    setSession("Dinner");
  };

  const handleTomorrowClick = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setDate(tomorrow);
  };

  const [lol, setlol] = useState(false);

  const dothis = (e: any) => {
    e.preventDefault();
    if (e.target[1].value.length !== 10) {
      e.preventDefault();
      setlol(true);
    } else {
      setlol(false);
    }
    console.log("Form submitted");
    props.setTrigger(false);
    alert("Table reserved successfully!!! We will contact you soon!!!");
  };
  return (
    <div className="text-black p-6 bg-white rounded-2xl max-w-[25rem]">
      <p className="text-2xl font-bold p-2">Reserve Your Table Now!!</p>
      <p className="text-gray-500 p-2">
        Skip the line and savor your meal stress-free!!
      </p>
      <form onSubmit={dothis}>
        <div>
          <div className="p-2">
            <input
              type="text"
              placeholder="Enter your name"
              className="p-2 w-full border border-slate-900 rounded-full outline-none"
              required
            />
          </div>
          <div className="p-2">
            <input
              type="number"
              placeholder="Enter your mobile number"
              pattern="\d{10}"
              required
              className="p-2 w-full border border-slate-900 rounded-full outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />
            <div className={lol ? "text-sm text-red-600" : "hidden"}>
              pls enter a valid mobile number
            </div>
          </div>
          <div className="p-2">
            <input
              type="number"
              placeholder="Enter number of people"
              className="p-2 w-full border border-slate-900 rounded-full outline-none"
              min="1"
              max="10"
              required
            />
          </div>
          <div className="p-2">
            <p className="text-lg">Date</p>
            <div className="flex p-3 items-center gap-x-2 justify-around w-full">
              <button
                type="button"
                className={`p-2 px-4 rounded-full ${
                  date.toDateString() === new Date().toDateString()
                    ? "bg-[rgb(33,78,72)] text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={handleTodayClick}
              >
                Today
              </button>
              <button
                type="button"
                className={`p-2 px-4 rounded-full ${
                  date.toDateString() ===
                  new Date(
                    new Date().setDate(new Date().getDate() + 1)
                  ).toDateString()
                    ? "bg-[rgb(33,78,72)] text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={handleTomorrowClick}
              >
                Tomorrow
              </button>
              <DatePicker
                filterDate={isFutureDate}
                selected={date}
                onChange={(date) => setDate(date || new Date())}
                minDate={new Date()}
                maxDate={
                  new Date(new Date().setDate(new Date().getDate() + 15))
                }
                className="max-w-[8rem] p-2 border border-slate-900 rounded-full outline-none"
              />
            </div>
          </div>
          <div className="p-2">
            <p className="text-lg">Session</p>
            <div className="flex p-3 items-center gap-x-2 justify-center w-full">
              <button
                type="button"
                className={`p-2 px-8 rounded-full ${
                  session === "Lunch"
                    ? "bg-[rgb(33,78,72)] text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={handleLunchClick}
              >
                Lunch
              </button>
              <button
                type="button"
                className={`p-2 px-8 rounded-full ${
                  session === "Dinner"
                    ? "bg-[rgb(33,78,72)] text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={handleDinnerClick}
              >
                Dinner
              </button>
            </div>
          </div>
        </div>
        <hr className="w-full h-[1px] mx-auto my-2 bg-gray-100 border-0 rounded dark:bg-gray-300" />
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="rounded-xl bg-[rgb(33,78,72)] text-white p-3 font-bold font-Raleway mx-auto mt-4"
          >
            <div className="w-full flex flex-col">
              <PiBowlFoodFill className=" text-2xl m-auto" />
              <p>Reserve Table</p>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResForm;
