export interface IForm {
  name: string;
  email: string;
  message: string;
}

export type FormState = {
  state: "idle" | "pending" | "success" | "error";
  message?: string;
};
