"use client";

import { useEffect, useState } from "react";
import { GetTokenFromCookies } from "../actions/token";

type ListFoodResponseRow = {
  id: number;
  name: string;
  type: string;
  intakeStatus: string;
  feeder: string;
  location: string;
  remarks: string;
  createdAt: string;
  updatedAt: string;
};

type ListFoodResponse = {
  food: ListFoodResponseRow[];
};

export function useListFood({
  startTimestamp,
  endTimestamp,
  type,
  intakeStatus,
  feeder,
  location,
}: {
  startTimestamp: string;
  endTimestamp: string;
  type: string;
  intakeStatus: string;
  feeder: string;
  location: string;
}) {
  const [data, setData] = useState<ListFoodResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResp = async () => {
      try {
        setData(null);
        setError(null);

        const token = await GetTokenFromCookies();

        let url = `http://localhost:9001/v1/food-list?start_timestamp=${startTimestamp}&end_timestamp=${endTimestamp}`;
        if (type != "") {
          url = `${url}&type=${type}`;
        }
        if (intakeStatus != "") {
          url = `${url}&intakeStatus=${intakeStatus}`;
        }
        if (feeder != "") {
          url = `${url}&feeder=${feeder}`;
        }
        if (location != "") {
          url = `${url}&location=${location}`;
        }

        const resp = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
            authorization: `${token}`,
          },
        });
        if (!resp.ok) {
          setError("zero result");
        }

        const respJson: ListFoodResponse = await resp.json();
        respJson.food.forEach((row) => {
          row.createdAt = new Date(row.createdAt).toLocaleString();
        });
        setData(respJson);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("internal error");
        }
      }
    };

    fetchResp();
  }, [startTimestamp, endTimestamp, type, intakeStatus, feeder, location]);

  return { data, error };
}
