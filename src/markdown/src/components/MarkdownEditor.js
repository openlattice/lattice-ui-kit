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
  defaultValue :?string;
  forwardedRef :any;
  value :string;
  view :'edit' | 'preview';
  ...TextFieldProps;
};

const MarkdownEditor = ({
  defaultValue,
  forwardedRef,
  onChange,
  value,
  view = 'edit',
  ...rest
} :Props) => {
  const [tab, setTab] = useState(view);
  const [content, setContent] = useState(value || defaultValue);

  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };

  const handleChangeContent = (e) => {
    if (onChange) {
      onChange(e);
    }
    setContent(e.target.value);
  };

  return (
    <div>
      <TabContext value={tab}>
        <TabList
            aria-label="markdown editor tabs"
            indicatorColor="primary"
            onChange={handleChangeTab}
            textColor="primary"
            value={tab}>
          <Tab label="Edit" value="edit" />
          <Tab label="Preview" value="preview" />
        </TabList>
        <StyledTabPanel value="edit">
          <TextArea
              rows={4}
              ref={forwardedRef}
              onChange={handleChangeContent}
              value={content}
              /* eslint-disable-next-line react/jsx-props-no-spreading */
              {...rest} />
        </StyledTabPanel>
        <StyledTabPanel value="preview">
          <MarkdownPreview>{content}</MarkdownPreview>
        </StyledTabPanel>
      </TabContext>
    </div>
  );
};

export default forwardRef<Props, TextFieldProps>((props, ref) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MarkdownEditor {...props} forwardedRef={ref} />
));
