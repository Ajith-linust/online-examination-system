import { useState } from "react";
import AreaChartComp from "@library/charts/area";
import PieChartComp from "@library/charts/pie";
import { useAppSelector } from "@reduxStore/store";

export default function Report() {
  const attendExam = useAppSelector((state) => state.attendExam);
  const attendees = useAppSelector((state) => state.attendees);
  const reports = useAppSelector((state) => state.report);

  const [range, setRange] = useState(5);

  return (
    <div className="p-5 overflow-auto">
      <h3 className="col-span-full">Overview</h3>
      <div className="attend-exam-wrap justify-center">
        <div className=" md:w-full w-[500px] h-[500px] flex flex-col gap-4 p-5 rounded-lg bg-white shadow-[0px_0px_8px_#5565751A] overflow-hidden">
          <div className="flex justify-between items-center ">
            <p className="text-sm">Statistics</p>
            <select className="bg-transparent outline-none text-[12px] cursor-pointer">
              <option value="1 month">1 Month</option>
              <option value="2 months">2 Months</option>
              <option value="3 months">3 Months</option>
              <option value="6 months">6 Months</option>
            </select>
          </div>
          <AreaChartComp data={attendExam} />
        </div>
        <div className="md:w-full w-[500px] h-[500px] flex flex-col gap-4 p-5 rounded-lg bg-white shadow-[0px_0px_8px_#5565751A] overflow-hidden">
          <div className="flex justify-between items-center ">
            <p className="text-sm">Attendees</p>
            <select className="bg-transparent outline-none text-[12px] cursor-pointer">
              <option value="1 month">1 Month</option>
              <option value="2 months">2 Months</option>
              <option value="3 months">3 Months</option>
              <option value="6 months">6 Months</option>
            </select>
          </div>
          <PieChartComp data={attendees} />
        </div>
      </div>
      <div className="lg:w-[90%] mx-auto my-7 p-5 bg-white rounded-lg shadow-[0px_0px_8px_#5565751A] w-full max-w-[1030px]">
        <h3 className="text-[14px]">Report</h3>
        <div className="overflow-auto table-wrap">
          <table className="mt-4 w-full h-full">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="text-gray-400 text-[12px] p-[10px]">Title</th>
                <th className="text-gray-400 text-[12px] p-[10px]">
                  Total questions
                </th>
                <th className="text-gray-400 text-[12px] p-[10px]">
                  Total attendees
                </th>
                <th className="text-gray-400 text-[12px] p-[10px]">
                  Average correct answers
                </th>
                <th className="text-gray-400 text-[12px] p-[10px]">
                  View all answers
                </th>
              </tr>
            </thead>
            <tbody>
              {reports.slice(0, range).map((data) => (
                <tr className="border-b border-gray-100" key={data.title}>
                  <td className="text-[12px] p-3">{data.title}</td>
                  <td className="text-[12px] p-3">{data.totalQuestions}</td>
                  <td className="text-[12px] p-3">{data.totalAttendees}</td>
                  <td className="text-[12px] p-3">
                    {data.averageCorrectAnswers}
                  </td>
                  <td className="text-[12px] p-3">{data.viewAllAnswers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {range < reports.length && (
          <button
            className="text-sm text-blueCs hover:text-blue-400 pt-4"
            onClick={() => setRange((p) => p + 5)}
          >
            show more
          </button>
        )}
      </div>
    </div>
  );
}
