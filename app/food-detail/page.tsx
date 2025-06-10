"use client";

import React, { useState } from "react";
import { GetFood, useGetFood } from "./getfood";
import { SubmitButton } from "../ui/buttons";
import { BodyCard, MainCard, TitleCard } from "../ui/cards";

export default function Page() {
  const [id, setId] = useState<number>(15);
  const [inputValue, setInputValue] = useState<string>("");
  const { data, error } = useGetFood({ id: id });

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newId = Number(inputValue);
    if (!isNaN(newId)) {
      setId(newId);
    }
  }

  return (
    <MainCard>
      <TitleCard>Food Detail</TitleCard>
      <BodyCard>
        <div className="text-gray-500 text-sm">ID</div>
        <form onSubmit={handleFormSubmit}>
          <div className="flex flex-row gap-x-4">
            <div className="flex border-2 border-gray-500 rounded-md">
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
                className="text-gray-900 pl-2 focus:outline-0 w-40"
              />
            </div>
            <div className="flex">
              <SubmitButton text="Search"></SubmitButton>
            </div>
          </div>
        </form>
      </BodyCard>
      <BodyCard>
        <div className="flex flex-row items-start w-full">
          <div className="flex flex-col basis-1/2">
            <div className="text-gray-600 font-bold">Name</div>
            <div className="text-gray-600">
              <GetFood data={data} error={error} field="name" />
            </div>
          </div>
          <div className="flex flex-col basis-1/2">
            <div className="text-gray-600 font-bold">Location</div>
            <div className="text-gray-600">
              <GetFood data={data} error={error} field="location" />
            </div>
          </div>
        </div>

        <div className="flex flex-row items-start w-full">
          <div className="flex flex-col basis-1/2">
            <div className="text-gray-600 font-bold">Type</div>
            <div className="text-gray-600">
              <GetFood data={data} error={error} field="type" />
            </div>
          </div>
          <div className="flex flex-col basis-1/2">
            <div className="text-gray-600 font-bold">Remarks</div>
            <div className="text-gray-600">
              <GetFood data={data} error={error} field="remarks" />
            </div>
          </div>
        </div>

        <div className="flex flex-row items-start w-full">
          <div className="flex flex-col basis-1/2">
            <div className="text-gray-600 font-bold">Intake Status</div>
            <div className="text-gray-600">
              <GetFood data={data} error={error} field="intakeStatus" />
            </div>
          </div>
          <div className="flex flex-col basis-1/2">
            <div className="text-gray-600 font-bold">Created At</div>
            <div className="text-gray-600">
              <GetFood data={data} error={error} field="createdAt" />
            </div>
          </div>
        </div>

        <div className="flex flex-row items-start w-full">
          <div className="flex flex-col basis-1/2">
            <div className="text-gray-600 font-bold">Feeder</div>
            <div className="text-gray-600">
              <GetFood data={data} error={error} field="feeder" />
            </div>
          </div>
          <div className="flex flex-col basis-1/2">
            <div className="text-gray-600 font-bold">Updated At</div>
            <div className="text-gray-600">
              <GetFood data={data} error={error} field="updatedAt" />
            </div>
          </div>
        </div>
      </BodyCard>
    </MainCard>
  );
}
