import { useEffect, useState } from "react";
import { useAppSelector } from "@reduxStore/store";
import cx from "classNames";

export default function AttendExam() {
  const questions = useAppSelector((state) => state.questions);

  const [answers, setAnswers] = useState<
    {
      question: string;
      answer: string;
    }[]
  >([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [submissionTimeout, setSubmissionTimeout] = useState(false);

  function answerUpdate() {
    let arr = questions.map((d) => {
      return {
        question: d.question,
        answer: "",
      };
    });
    setAnswers(arr);
  }

  useEffect(() => {
    answerUpdate();
  }, [JSON.stringify(questions)]);

  const optionHandler = (questionIndex: number, answer: string) => {
    let temp: {
      question: string;
      answer: string;
    }[] = Object.assign([], answers);

    temp[questionIndex].answer = answer;
    setAnswers(temp);
    setErrorMessage("");
  };

  const submitHandler = (e: any) => {
    e.preventDefault();

    let temp: {
      question: string;
      answer: string;
    }[] = Object.assign([], answers);

    let errorMsg = "";

    for (let i = 0; i < temp?.length; i++) {
      if (temp[i]?.answer?.length === 0) {
        errorMsg = "Please fill all the answers";
      }
    }

    setErrorMessage(errorMsg);
    setSubmissionTimeout(true);
    answerUpdate();

    setTimeout(() => {
      setSubmissionTimeout(false);
    }, 3000);
  };

  return (
    <div className="p-5 overflow-auto">
      {submissionTimeout && (
        <div className="fixed bottom-2 w-max max-w-[300px] p-3 break-words leading-4 bg-limeGreen rounded-sm text-white left-[50%] translate-x-[-50%]">
          Thanks for the submission
        </div>
      )}
      <h3 className="col-span-full">Answer the questions</h3>
      <ol className="mb-4">
        {questions?.map((data, qsIndex) => (
          <li key={data.question} className="mt-4">
            <p className="text-gray-500">{`${qsIndex + 1}. ${
              data.question
            }`}</p>
            <div>
              {data.options.map((data, index) => (
                <p
                  className="cursor-pointer mt-2 flex gap-2 items-center"
                  key={index}
                  onClick={() => optionHandler(qsIndex, data)}
                >
                  <span
                    className={cx(
                      "inline-block w-[10px] h-[10px] rounded-full border border-gray-400",
                      answers[qsIndex]?.answer === data &&
                        "border-blueCs border-[3px]"
                    )}
                  ></span>
                  <label className="pointer-events-none text-gray-500">
                    {data}
                  </label>
                </p>
              ))}
            </div>
          </li>
        ))}
      </ol>
      <footer>
        {errorMessage && (
          <p className="mb-4 text-sm text-redCs">{errorMessage}</p>
        )}
        <button
          className="md:mx-auto bg-blueCs hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-0"
          onClick={submitHandler}
        >
          Submit
        </button>
      </footer>
    </div>
  );
}
