import { GetTokenFromCookies } from "../actions/token";

export default function Page() {
  return <Token />;
}

export function Token() {
  const token = GetTokenFromCookies();
  return <p>{token}</p>;
}
