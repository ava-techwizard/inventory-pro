import BaseFieldType from "./baseField";

/* eslint-disable no-unused-vars */
export enum AuthState {
  SIGN_IN = "SIGN_IN",
  SIGN_UP = "SIGN_UP",
}
export interface FieldType extends BaseFieldType {
  authState?: AuthState;
}

export const fields: FieldType[] = [
  {
    labelText: "Name",
    id: "name",
    name: "name",
    type: "text",
    isRequired: true,
    authState: AuthState.SIGN_UP,
  },
  {
    labelText: "Email address",
    id: "email",
    name: "email",
    type: "email",
    isRequired: true,
  },
  {
    labelText: "Password",
    id: "password",
    name: "password",
    type: "password",
    isRequired: true,
  },
];
