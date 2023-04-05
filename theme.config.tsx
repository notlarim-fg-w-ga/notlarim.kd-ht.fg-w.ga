import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Head from 'next/head';

const config: DocsThemeConfig = {
    logo: <span style={{ fontSize: "24px" }}><strong>Feign Game Wiki</strong>DOCS</span>,
    project: {
        link: 'https://github.com/feignwiki/feign-wiki-docs',
    },
    chat: {
        link: 'https://fg-w.ga/discord'
    },
    docsRepositoryBase: 'https://github.com/feignwiki/feign-wiki.docs',
    useNextSeoProps() {
        return {
            titleTemplate: '%s - Feign Wiki DOCS',
            openGraph: {
                type: 'website',
                locale: 'en_IE',
                url: 'https://docs.feign-wiki.tk',
                site_name: 'FeignAPI',
            }
        }
    },
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700" />
                <style>{`
                    body {
                        margin: 0;
                        padding: 0;
                        font-family: "Poppins", sans-serif;
                    }

                `}</style>
            </Head>
        </>
    ),
    footer: {
        component: <></>
    },
    i18n: [
        { locale: 'tr', text: 'Türkçe' }
    ]
}

export default config;
