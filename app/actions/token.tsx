"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function SetTokenToCookies(formData: FormData) {
  const username = formData.get("query");

  const resp = await fetch("http://localhost:9001/v1/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username }),
  });

  if (!resp.ok) {
    throw new Error("failed to issue token");
  }

  const data = await resp.json();
  const cookieStore = await cookies();
  cookieStore.set("signedToken", data.signedToken);

  redirect("/food-detail");
}

export async function GetTokenFromCookies() {
  const cookieStore = await cookies();
  return cookieStore.get("signedToken")?.value;
}
