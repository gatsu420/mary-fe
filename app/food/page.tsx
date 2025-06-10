"use client";

import React, { useState } from "react";
import { useListFood } from "./listfood";
import { BodyCard, MainCard, TitleCard } from "../ui/cards";
import { SubmitButton } from "../ui/buttons";

export default function Page() {
  const defaultStartTimestamp = "2020-01-01T00:00:00Z";
  const defaultEndTimestamp = "2025-06-01T00:00:00Z";
  const defaultType = "Lunch";
  const defaultIntakeStatus = "Not Eaten";
  const defaultFeeder = "Kak Upi";
  const defaultLocation = "Restaurant";

  const [startTimestamp, setStartTimestamp] = useState<string>(
    defaultStartTimestamp
  );
  const [startTimestampInputValue, setStartTimestampInputValue] =
    useState<string>(defaultStartTimestamp.slice(0, 16));
  const [endTimestamp, setEndTimestamp] = useState<string>(defaultEndTimestamp);
  const [endTimestampInputValue, setEndTimestampInputValue] = useState<string>(
    defaultEndTimestamp.slice(0, 16)
  );
  const [type, setType] = useState<string>(defaultType);
  const [typeInputValue, setTypeInputValue] = useState<string>("");

  const [intakeStatus, setIntakeStatus] = useState<string>(defaultIntakeStatus);
  const [intakeStatusInputValue, setIntakeStatusInputValue] =
    useState<string>("");

  const [feeder, setFeeder] = useState<string>(defaultFeeder);
  const [feederInputValue, setFeederInputValue] = useState<string>("");

  const [location, setLocation] = useState<string>(defaultLocation);
  const [locationInputValue, setLocationInputValue] = useState<string>("");

  const { data, error } = useListFood({
    startTimestamp: startTimestamp,
    endTimestamp: endTimestamp,
    type: type,
    intakeStatus: intakeStatus,
    feeder: feeder,
    location: location,
  });

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStartTimestamp(new Date(startTimestampInputValue).toISOString());
    setEndTimestamp(new Date(endTimestampInputValue).toISOString());
    setType(typeInputValue);
    setIntakeStatus(intakeStatusInputValue);
    setFeeder(feederInputValue);
    setLocation(locationInputValue);
  }

  function renderFoodListTable() {
    if (error) {
      return <div className="text-gray-600">{error}</div>;
    }
    if (!data) {
      return <div className="text-gray-600">Loading...</div>;
    }
    return (
      <table className="table-auto w-full">
        <thead>
          <tr className="border-y border-gray-400 text-gray-600 font-bold">
            <th className="p-1">Date</th>
            <th className="p-1">Name</th>
            <th className="p-1">Type</th>
            <th className="p-1">Intake Status</th>
            <th className="p-1">Feeder</th>
            <th className="p-1">Location</th>
            <th className="p-1">Remarks</th>
          </tr>
        </thead>
        <tbody className="text-gray-600">
          {data?.food.map((row) => (
            <tr key={row.id}>
              <td className="border-r border-gray-400 p-1">{row.createdAt}</td>
              <td className="border-r border-gray-400 p-1">{row.name}</td>
              <td className="border-r border-gray-400 p-1">{row.type}</td>
              <td className="border-r border-gray-400 p-1">
                {row.intakeStatus}
              </td>
              <td className="border-r border-gray-400 p-1">{row.feeder}</td>
              <td className="border-r border-gray-400 p-1">{row.location}</td>
              <td className="p-1">{row.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <MainCard>
      <TitleCard>Food</TitleCard>
      <BodyCard>
        <form className="flex flex-col gap-y-4" onSubmit={handleFormSubmit}>
          <div className="flex flex-row gap-x-4">
            <div className="flex flex-col">
              <div className="text-gray-500 text-sm">Start Timestamp</div>
              <div className="flex border-2 border-gray-500 rounded-md">
                <input
                  type="datetime-local"
                  className="text-gray-900 pl-2 focus:outline-0 w-40"
                  value={startTimestampInputValue}
                  onChange={(e) => setStartTimestampInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                ></input>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-gray-500 text-sm">End Timestamp</div>
              <div className="flex border-2 border-gray-500 rounded-md">
                <input
                  type="datetime-local"
                  className="text-gray-900 pl-2 focus:outline-0 w-40"
                  value={endTimestampInputValue}
                  onChange={(e) => setEndTimestampInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                ></input>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-gray-500 text-sm">Type</div>
              <div className="flex border-2 border-gray-500 rounded-md">
                <input
                  className="text-gray-900 pl-2 focus:outline-0 w-40"
                  value={typeInputValue}
                  onChange={(e) => setTypeInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                ></input>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-x-4">
            <div className="flex flex-col">
              <div className="text-gray-500 text-sm">Intake Status</div>
              <div className="flex border-2 border-gray-500 rounded-md">
                <input
                  className="text-gray-900 pl-2 focus:outline-0 w-40"
                  value={intakeStatusInputValue}
                  onChange={(e) => setIntakeStatusInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                ></input>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-gray-500 text-sm">Feeder</div>
              <div className="flex border-2 border-gray-500 rounded-md">
                <input
                  className="text-gray-900 pl-2 focus:outline-0 w-40"
                  value={feederInputValue}
                  onChange={(e) => setFeederInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                ></input>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="text-gray-500 text-sm">Location</div>
              <div className="flex border-2 border-gray-500 rounded-md">
                <input
                  className="text-gray-900 pl-2 focus:outline-0 w-40"
                  value={locationInputValue}
                  onChange={(e) => setLocationInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                ></input>
              </div>
            </div>
            <div className="flex flex-col mt-5">
              <SubmitButton text="Search"></SubmitButton>
            </div>
          </div>
        </form>
      </BodyCard>
      <BodyCard>{renderFoodListTable()}</BodyCard>
    </MainCard>
  );
}
