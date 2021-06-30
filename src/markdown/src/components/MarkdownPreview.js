// @flow

import type { Node } from 'react';

import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGFM from 'remark-gfm';

import MarkdownWrapper from './styled/MarkdownWrapper';

type Props = {
  children :Node;
};

const MarkdownPreview = ({ children } :Props) => (
  <MarkdownWrapper>
    <ReactMarkdown
        rehypePlugins={[rehypeHighlight]}
        remarkPlugins={[remarkGFM]}>
      {children}
    </ReactMarkdown>
  </MarkdownWrapper>
);

export default MarkdownPreview;
