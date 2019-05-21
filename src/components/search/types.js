// @flow
import type { Map } from 'immutable';
import type { ReactSelectValue } from '../../select/types';

export type SearchFieldDefinition = {|
  id :string;
  label :string;
  type ?:string;
  value ?:string;
|};

export type FilterFieldDefinition = {|
  filterCallback :(searchResult :Map, selectedValues :ReactSelectValue) => boolean;
  id :string;
  label :string;
  options :string[];
|};
