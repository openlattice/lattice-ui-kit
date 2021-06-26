// @flow
import React, { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';
import { Tab, Tabs } from '@material-ui/core';
import type { TextFieldProps } from '@material-ui/core';

import MarkdownPreview from './MarkdownPreview';

import TextArea from '../../../text/src/components/TextArea';

const StyledTabPanel = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  padding: 8px 0 0;
`;

const StyledTextArea = styled(TextArea)`
  textarea {
    min-height: 84px;
  }
`;

const EDIT = 'edit';
const PREVIEW = 'preview';

type ViewType = 'edit' | 'preview';

type Props = {
  defaultValue :?string;
  value :string;
  view :ViewType;
  ...TextFieldProps;
};

const MarkdownEditor = ({
  defaultValue,
  onChange = () => {},
  value,
  view = EDIT,
  ...rest
} :Props) => {
  const [content, setContent] = useState(value || defaultValue);
  const [tab, setTab] = useState(view);
  const didMount = useRef(false);
  const inputRef = useRef();

  useEffect(() => {
    if (didMount.current && tab === EDIT && inputRef.current) {
      inputRef.current.focus();
    }
    else {
      didMount.current = true;
    }
  }, [inputRef, tab]);

  const handleChangeTab = (event, newValue) => {
    if (newValue === EDIT && inputRef.current) {
      inputRef.current.focus();
    }
    setTab(newValue);
  };

  const handleChangeContent = (e) => {
    onChange(e);
    setContent(e.target.value);
  };

  return (
    <div>
      <Tabs
          aria-label="markdown editor tabs"
          indicatorColor="primary"
          onChange={handleChangeTab}
          textColor="primary"
          value={tab}>
        <Tab label="Edit" value={EDIT} />
        <Tab label="Preview" value={PREVIEW} />
      </Tabs>
      <StyledTabPanel show={tab === EDIT}>
        <StyledTextArea
            inputRef={inputRef}
            onChange={handleChangeContent}
            rows={4}
            value={content}
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            {...rest} />
      </StyledTabPanel>
      <StyledTabPanel show={tab === PREVIEW}>
        <MarkdownPreview>{content}</MarkdownPreview>
      </StyledTabPanel>
    </div>
  );
};

export default MarkdownEditor;
export {
  StyledTabPanel
};
