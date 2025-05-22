"use client";

import Form from "next/form";
import { SetTokenToCookies } from "../actions/token";

export function IssueTokenForm() {
  return (
    <div className="relative flex flex-col gap-y-4 min-h-screen bg-gray-400 justify-center items-center">
      <div className="flex flex-col space-y-6 gap-y-2 bg-blue-100 w-96 h-48 rounded-xl shadow-gray-700 shadow-xl justify-center items-center">
        <div className="text-blue-900 font-bold">Input username</div>
        <Form action={SetTokenToCookies}>
          <div className="flex flex-row space-x-2 h-8">
            <div className="flex border-2 border-gray-500 rounded-md">
              <input
                name="query"
                className="text-gray-900 pl-2 focus:outline-0 w-40"
              />
            </div>
            <div className="flex">
              <button
                type="submit"
                className="text-white border-2 border-gray-700 rounded-md ring-1 bg-blue-500 hover:bg-blue-800 shadow-lg px-1.5"
              >
                Issue Token
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
