import React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

const token = {
  button: {
    primary: {
      img: "https://storage.googleapis.com/full-assets/DesignSystem/button/button-token-1.png",
      content: "Used Design tokens: Colors: &solid-white-100, &solid-blue-500, &solid-blue-600, &solid-blue-700 Fonts styles: &font-desktop-t3p, &font-desktop-t3p"
    },
    secondary: {
      img: "https://storage.googleapis.com/full-assets/DesignSystem/button/button-token-2.png",
      content: "Used Design tokens:Colors: &solid-white-100, &solid-grey-100, &solid-grey-200, &border-grey-300 Fonts styles: &font-desktop-t3p,  &font-desktop-t3p"
    },
    tertiary: {
      img: "https://storage.googleapis.com/full-assets/DesignSystem/button/button-token-3.png",
      content: "Used Design tokens:Colors: &text-blue-500, &solid-blue-100, &solid-blue-200, Fonts styles: &font-desktop-t3p,  &font-desktop-t3p",
    }
  }
}

const styles = {
  table: css`
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
  `,

  row: css`
    display: flex;
    justify-content: space-between;

    & + li {
      margin-top: 24px;
    }

    .content-col {
      max-width: 500px;
      flex-grow: 1;
      font-size: 16px;
      line-height: 22px;
    }
  `
}

function TokenTable(props) {
  const { packageName } = props;
  const rows = Object.values(token[packageName]);
  return (
    <ul className='token-table' css={styles.table}>
      {rows.map((row) => <TokenRows row={row} />)}
    </ul>
  );
}

function TokenRows(props) {
  const { row } = props;
  return (
    <li css={styles.row}>
      <div className="img-col">
        <figure>
          <img src={row.img} />
        </figure>
      </div>
      <div className="content-col">
        <p>
          {row.content}
        </p>
      </div>
    </li>
  )
}

export default TokenTable;
