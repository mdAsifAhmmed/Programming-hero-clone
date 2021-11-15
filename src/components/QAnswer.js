import React, { useState } from "react";
import { Container } from "react-bootstrap";
import QAnswerApi from "./json/QAnswerApi.json";
const QAnswer = () => {
  const [questionAnswer, setQuestionAnswer] = useState();
  return (
    <section className="py-10 bg-gradient-to-b from-indigo-600 to-purple-500">
      <Container>
        <h1 className="text-center font-bold text-3xl text-gray-50 py-10">
          কোর্স সম্পর্কিত সাধারণ জিজ্ঞাসা
        </h1>
        <div className="grid grid-cols-1 md:mx-2 lg:mx-2 xl:mx-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <ul className="flex flex-col">
            {QAnswerApi.map(({ Answer, question, id }) => {
              return (
                <li
                  onClick={() => setQuestionAnswer(id)}
                  className="my-2 text-lg shadow-xl height_fit dark:bg-gray-800  rounded-xl"
                >
                  <div className="p-3 flex items-center q_bg  rounded-xl cursor-pointer text-gray-50">
                    {questionAnswer === id ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-minus"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-plus mr-3"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    )}

                    <p className="m-0">{question}</p>
                  </div>
                  {questionAnswer === id ? (
                    <p className="m-0 w-full pb-5 px-5 pt-2  rounded-xl text-gray-50 ">
                      {Answer}
                    </p>
                  ) : null}
                </li>
              );
            })}
          </ul>
          <div className="w-full height_fit md:mx-10 lg:mx-10 xl:mx-10">
            <img className=" w-full h-full" src="/img/QImg.png" alt="img" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default QAnswer;
