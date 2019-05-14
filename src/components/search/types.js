// @flow
import type { Map } from 'immutable';

export type SearchFieldDefinition = {|
  id :string;
  label :string;
  type ?:string;
  value ?:string;
|};

export type FilterFieldDefinition = {|
  filter :(searchResult :Map, filter :FilterFieldDefinition) => boolean;
  id :string;
  label :string;
  options :string[];
|};
