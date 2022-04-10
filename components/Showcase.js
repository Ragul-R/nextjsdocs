import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { Code } from './MDXProvider';
import { Button } from "@adaptavant/aw-assets";

const exampleSnipet = {
  "button": {
    code: "<Button variant='primary'>Primary</Button>",
    comp: <Button type="primary">Primary</Button>
  }
}

const styles = {
  wrapper: css`
    margin: 14px 0;
    background-color: #e6e9f0;
    border-radius: 8px;
    overflow: hidden;
  `,

  showcaseCode: css`
    padding: 20px 24px;
  `,

  showcaseComponent: css`
    background: #d3d9e5;
    padding: 24px;
  `,
}

function Showcase(props) {
  const { packageName } = props;

  return (
    <article css={styles.wrapper}>
      <div css={styles.showcaseCode}>
        <Code>
          {exampleSnipet[packageName].code}
        </Code>
      </div>
      <div css={styles.showcaseComponent}>
        {exampleSnipet[packageName].comp}
      </div>
    </article>
  );
}

export default Showcase;
