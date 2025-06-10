import { ReactNode } from "react";

export function MainCard({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-col gap-y-4 min-h-screen bg-gray-400 justify-center items-center">
      <div className="flex flex-col gap-y-2 bg-blue-100 min-w-2/5 h-fit rounded-xl shadow-gray-700 shadow-xl justify-items-center items-center p-5">
        {children}
      </div>
    </div>
  );
}

export function TitleCard({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start w-full text-blue-900 font-bold text-2xl">
      {children}
    </div>
  );
}

export function BodyCard({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-start w-full border-2 border-gray-500 rounded-md p-3">
      {children}
    </div>
  );
}
