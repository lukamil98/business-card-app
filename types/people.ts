type Occupation =
  | "Frontend Developer"
  | "Backend Developer"
  | "Fullstack Developer";

export interface Person {
  avatar: string;
  name: string;
  occupation: Occupation;
  alias: string;
  email: string;
  about: string;
  interests: string;
}
