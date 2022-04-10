import React from 'react'
import {MDXProvider} from '@mdx-js/react'

/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula, googlecode, github, githubGist } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const styles = {
  h1: css`
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 24px;
  `,

  h2: css`
    font-weight: 600;
    font-size: 28px;
    line-height: 40px;
  `,

  p: css`
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 24px;
    span {
      display: inline-block;
      vertical-align: middle;
    }
  `,

  code: css`
    font-family: 'Monaco';
    font-size: 16px;
    line-height: 22px;
    display: inline-block;
    vertical-align: middle;

    > pre {
      background: unset !important;
      padding: 0 !important;
    }
  `,

  h3: css`
  font-size: 22px;
  line-height: 32px;
  margin: 14px 0;
  `,

  img: css`
    margin: 24px auto;
    max-width: calc(100% - 100px);

    > img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  `,
}

const mdComponents = {
  h1: props => <h1 css={styles.h1} {...props} />,
  h2: props => <h2 css={styles.h2} {...props} />,
  h3: props => <h3 css={styles.h3} {...props} />,
  p: props => <p css={styles.p} {...props} />,
  code: props => <Code {...props} />,
  img: props => <figure css={styles.img}><img {...props} /></figure>,
}

function Code(props) {
  return (
    <div className='code-snippet' css={styles.code}>
      <SyntaxHighlighter language='jsx' style={githubGist}>
        {props.children}
      </SyntaxHighlighter>
    </div>
  )
}

export default ({children}) => (
  <MDXProvider components={mdComponents}>
    {children}
  </MDXProvider>
)

export { Code };
