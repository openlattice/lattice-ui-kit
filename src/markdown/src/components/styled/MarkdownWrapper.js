import styled from 'styled-components';

const MarkdownWrapper = styled.div`
  code {
    padding: .2em .4em;
    margin: 0;
    font-size: 85%;
    background-color: rgba(27,31,35,.05);
    border-radius: 3px;
  }

  .hljs{
    display: block;
    overflow-x: auto;
    padding: .5em;
    color: #333;
    background: #f8f8f8;
  }

  .hljs-comment, .hljs-quote {
    color: #998;
    font-style: italic;
  }

  .hljs-keyword, .hljs-selector-tag, .hljs-subst {
    color: #333;
    font-weight: 700
  }

  .hljs-literal, .hljs-number, .hljs-tag .hljs-attr, .hljs-template-variable, .hljs-variable{
    color: teal;
  }

  .hljs-doctag, .hljs-string {
    color: #d14;
  }
  .hljs-section, .hljs-selector-id, .hljs-title {
    color: #900;
    font-weight: 700;
  }
  .hljs-subst {
    font-weight: 400;
  }
  .hljs-class .hljs-title, .hljs-type {
    color: #458;
    font-weight: 700;
  }

  .hljs-attribute, .hljs-name, .hljs-tag {
    color: navy;
    font-weight: 400;
  }

  .hljs-link, .hljs-regexp {
    color: #009926;
  }

  .hljs-bullet, .hljs-symbol {
    color: #990073;
  }

  .hljs-built_in, .hljs-builtin-name {
    color: #0086b3;
  }

  .hljs-meta{
    color: #999;
    font-weight: 700;
  }

  .hljs-deletion {
    background: #fdd;
  }

  .hljs-addition{
    background: #dfd;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong{
    font-weight: 700;
  }

  table {
    display: block;
    width: 100%;
    overflow: auto;
    border-spacing: 0;
    border-collapse: collapse;
  }

  table th {
    font-weight: 600;
  }

  table td,
  table th {
    padding: 6px 13px;
    border: 1px solid #dfe2e5;
  }

  table tr {
    background-color: #fff;
    border-top: 1px solid #c6cbd1;
  }

  table tr:nth-child(2n) {
    background-color: #f6f8fa;
  }

`;

export {
  MarkdownWrapper
};
