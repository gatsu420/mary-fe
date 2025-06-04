import Form from "next/form";
import { SetTokenToCookies } from "./actions/token";
import { SubmitButton } from "./ui/buttons";

export default function Home() {
  return (
    <div className="relative flex flex-col gap-y-4 min-h-screen bg-gray-400 justify-center items-center">
      <div className="flex flex-col gap-y-6 bg-blue-100 w-96 h-48 rounded-xl shadow-gray-700 shadow-xl justify-center items-center">
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
              <SubmitButton text="Issue Token"></SubmitButton>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
