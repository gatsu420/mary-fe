"use client";

import { useEffect, useState } from "react";
import { GetTokenFromCookies } from "../actions/token";

type GetFoodResponse = {
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

export function useGetFood({ id }: { id: number }) {
  const [data, setData] = useState<GetFoodResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        setData(null);
        setError(null);

        const token = await GetTokenFromCookies();
        const resp = await fetch(`http://localhost:9001/v1/food?id=${id}`, {
          headers: {
            "Content-Type": "application/json",
            authorization: `${token}`,
          },
        });

        if (!resp.ok) {
          setError("food is not found");
        }

        const json: GetFoodResponse = await resp.json();
        setData({
          id: json.id,
          name: json.name,
          type: json.type,
          intakeStatus: json.intakeStatus,
          feeder: json.feeder,
          location: json.location,
          remarks: json.remarks,
          createdAt: new Date(json.createdAt).toLocaleString(),
          updatedAt: new Date(json.updatedAt).toLocaleString(),
        });
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("internal error");
        }
      }
    };

    fetchFood();
  }, [id]);

  return { data, error };
}

type GetFoodField = keyof GetFoodResponse;

export function GetFood({
  data,
  error,
  field,
}: {
  data: GetFoodResponse | null;
  error: string | null;
  field: GetFoodField;
}) {
  if (error) {
    return <p>{error}</p>;
  }
  if (!data) {
    return <p>Loading...</p>;
  }
  if (data.remarks == "") {
    return (data.remarks = "No remarks");
  }
  return <p>{data[field]}</p>;
}
