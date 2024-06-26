import Head from "next/head";
import Image from "next/image";
import React from "react";

export const NavBar = () => {
    return (
        <>
            <Head>
                <title>DHIS2</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="DHIS2" />
            </Head>
            <nav className="bg-white shadow-lg">
                <div className="container mx-auto px-6 py-3">
                    <div className="flex items-center justify-between">
                        <Image src={`/images/moh_logo.png`} alt="MOH" width="200" height="200" />

                        <div className="hidden items-center justify-end w-full">
                            <button className="text-gray-600 focus:outline-none mx-4 sm:mx-0">
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                            <button className="text-gray-600 focus:outline-none mx-4 sm:mx-0">
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};