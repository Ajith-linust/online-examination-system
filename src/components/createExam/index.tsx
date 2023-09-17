import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import cx from "classNames";
import ImageWithFallback from "@library/image";
import Input from "@library/input";
import PlusIcon from "@assets/plus.svg";
import CloseSvg from "@assets/svgr/CloseSvg";

function CreateExam() {
  /**
   * We can directly read this from store.
   */
  //   const { clients, profile, referrer, salesDistribution, statistics } =
  //     useAppSelector((state) => state.dashboard.dashboard);

  const [examDetails, setExamDetails] = useState<{
    examTitle: string;
    question: string;
    options: string[];
  }>({
    examTitle: "",
    question: "",
    options: [""],
  });
  const [errorMessage, setErrorMessage] = useState({
    examTitle: "",
    question: "",
    options: "",
  });
  const [submissionTimeout, setSubmissionTimeout] = useState(false);

  const optionDeleteHandler = (index: number) => {
    let temp: string[] = Object.assign([], examDetails.options);

    temp.splice(index, 1);

    setExamDetails((p) => ({ ...p, options: temp }));
  };

  const optionsHandler = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    setErrorMessage(p => ({
      ...p,
      options: ''
    }));

    let temp: string[] = Object.assign([], examDetails.options);

    if (temp[index] === undefined || temp[index] === null) return;

    temp[index] = e.target.value;

    setExamDetails((p) => ({ ...p, options: temp }));
  };

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(p => ({
      ...p,
      [e.target.name]: ''
    }));
    setExamDetails((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let copyErrorMessage: any = structuredClone(errorMessage);

    let hasError = false;

    Object.entries(examDetails).forEach(([key, value]) => {
      if (value.length === 0) {
        copyErrorMessage[key] = `Please fill ${key}`;
        hasError = true;
        return;
      }

      if (key !== "options") return;

      if (value.length < 4) {
        copyErrorMessage.options = `four options fields are required`;
        hasError = true;
        return;
      }

      for (let i = 0; i < value.length; i++) {
        if (value[i]?.length === 0) {
          copyErrorMessage.options = `Please fill option fields`;
          hasError = true;
          return;
        }
      }
    });

    setErrorMessage(copyErrorMessage);

    if (hasError) return;

    setSubmissionTimeout(true);
    setExamDetails({
      examTitle: '',
      question: '',
      options: [''],
    });

    setTimeout(() => {
      setSubmissionTimeout(false);
    }, 3000);
  };

  return (
    <form onSubmit={submitHandler} className="md:h-full md:rounded-none md:m-0 bg-white rounded-lg p-6 flex flex-col max-w-[400px] mt-6 mx-auto w-full">
      {submissionTimeout && (
        <div className="fixed bottom-2 w-max max-w-[300px] p-3 break-words leading-4 bg-limeGreen rounded-sm text-white left-[50%] translate-x-[-50%]">
          Thanks for the submission
        </div>
      )}
      <Input
        label="Exam Title"
        name="examTitle"
        placeholder="Enter title"
        value={examDetails.examTitle}
        onChange={inputHandler}
        error={errorMessage.examTitle}
      />
      <Input
        label="Question"
        name="question"
        placeholder="Enter Question"
        value={examDetails.question}
        onChange={inputHandler}
        className="mt-4"
        error={errorMessage.question}
      />
      <div className="mt-4">
        <label className={cx("flex justify-between")}>
          <span className={cx("text-sm", errorMessage.options && "text-redCs")}>
            Options
          </span>
          {examDetails.options.length < 4 && (
            <ImageWithFallback
              src={PlusIcon}
              alt="plus"
              onClick={() =>
                setExamDetails((p) => ({
                  ...p,
                  options: [...p.options, ""],
                }))
              }
            />
          )}
        </label>
        {examDetails.options.map((data, index) => (
          <div key={index}>
            <Input
              placeholder="Type option here..."
              value={data}
              onChange={(e) => optionsHandler(e, index)}
              rightElement={
                examDetails.options.length > 1 ? (
                  <CloseSvg
                    className="absolute right-2 top-2"
                    pathClassName="fill-gray-400"
                    onClick={() => optionDeleteHandler(index)}
                  />
                ) : undefined
              }
            />
          </div>
        ))}
        {errorMessage.options && (
          <span className="text-redCs text-[12px] capitalize">
            {errorMessage.options}
          </span>
        )}
      </div>
      <button className="md:mx-auto bg-blueCs hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-6">
        Button
      </button>
    </form>
  );
}

export default CreateExam;
