// @flow

type ReactSelectValue = Object | Object[] | null;

type ReactSelectAction =
  | "select-option"
  | "deselect-option"
  | "remove-value"
  | "pop-value"
  | "set-value"
  | "clear"
  | "create-option";

type ReactSelectEvent = {
  action :ReactSelectAction;
  name ? :string;
};

export type {
  ReactSelectValue,
  ReactSelectAction,
  ReactSelectEvent,
};
