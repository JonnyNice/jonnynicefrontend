import Head from 'next/head';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Jonny Nice Productions</title>
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
            {children}
        </>
    );
}