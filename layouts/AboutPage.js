import React from 'react';
import Head from 'next/head';

/** @jsx jsx */
import { css, Global, jsx } from '@emotion/react';
import MDXProvider from '../components/MDXProvider';

import { Button } from '@adaptavant/aw-assets';

export const pages = {
    "get_started": { link: '', title: 'Get Started' },
    "button": { link: 'button', title: 'Button' },
    "input": { link: 'input', title: 'Input' }
};

export default function AboutPage({children}) {
    return (
        <div style={{textAlign:"center"}}>
            {children}
        </div>
    )
}

const styles = {
    main: css`display: flex;height: 100vh;overflow: hidden;`,
    section: css`
        width: calc(100% - 320px);
        height: 100vh;
        overflow: auto;
        padding: 40px 52px 0;
    `,
    brandlogo: css`
    width: 200px;
    height: auto;
    margin: auto;
    padding: 30px 0 24px;
     > img {
         height: 100%;
         width: 100%;
     }
    `,
    header: css`
    text-align: center;
    `,
    font: css`
    @font-face {
        font-family: 'Monaco';
        font-display: swap;
        font-weight: 400;
        src: url(https://storage.googleapis.com/full-assets/DesignSystem/font/Monaco.woff);
    }
    `,
}

export function BaseLayout({ children, currentPage = { } }) {
    return(
        <>
            <Head>
                <title>{currentPage}</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://storage.googleapis.com/front-office/global-styles/v0.6/main.css" />
            </Head>
            <main css={styles.main}>
                <Global styles={styles.font} />
                <Sidebar currentPage={currentPage} />
                <MainLayout>
                    {children}
                </MainLayout>
            </main>
        </>
    );
}

function MainLayout(props) {
    return (<section css={styles.section}  {...props} />);
}

export function Sidebar({ children, currentPage }) {
    return(
        <aside className='g-sidebar'>
            <header css={styles.header}>
                <figure css={styles.brandlogo}>
                    <img src='https://storage.googleapis.com/full-assets/anywhereworks/images/aw_logo-horizontal-black-1x.png' alt="brand-logo" />
                </figure>
            </header>
            <ul className='g-sidebar-list'>
                {Object.values(pages).map(page => <li className={currentPage == page.title ? 'selected' : ''} onClick={() => {window.location.href = `\/${page.link}`}}><div><span>{page.title}</span></div></li>)}
            </ul>
        </aside>
    )
}