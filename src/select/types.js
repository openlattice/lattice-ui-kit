// @flow

type ReactSelectOption = {|
  label :string;
  value :any;
|};

type ReactSelectValue = ReactSelectOption | ReactSelectOption[];

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
  ReactSelectAction,
  ReactSelectEvent,
  ReactSelectOption,
  ReactSelectValue,
};
