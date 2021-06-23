// @flow
import React, { forwardRef, useState } from 'react';

import styled from 'styled-components';
import { Tab } from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import type { TextFieldProps } from '@material-ui/core';

import MarkdownPreview from './MarkdownPreview';

import TextArea from '../../../text/src/components/TextArea';

const StyledTabPanel = styled(TabPanel)`
  padding: 8px 0 0;
`;

type Props = {
  forwardedRef :any;
  value :string;
  view :'edit' | 'preview';
  ...TextFieldProps;
};

const MarkdownEditor = ({
  forwardedRef,
  view = 'edit',
  value = '',
  ...rest
} :Props) => {
  const [tab, setTab] = useState(view);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <div>
      <TabContext value={tab}>
        <TabList
            aria-label="markdown editor tabs"
            indicatorColor="primary"
            onChange={handleChange}
            textColor="primary"
            value={tab}>
          <Tab label="Edit" value="edit" />
          <Tab label="Preview" value="preview" />
        </TabList>
        <StyledTabPanel value="edit">
          <TextArea
              rows={4}
              ref={forwardedRef}
              value={value}
              /* eslint-disable-next-line react/jsx-props-no-spreading */
              {...rest} />
        </StyledTabPanel>
        <StyledTabPanel value="preview">
          <MarkdownPreview>{value}</MarkdownPreview>
        </StyledTabPanel>
      </TabContext>
    </div>
  );
};

export default forwardRef<Props, TextFieldProps>((props, ref) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MarkdownEditor {...props} forwardedRef={ref} />
));
