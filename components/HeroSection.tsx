import React, { useState } from "react";
import Image from "next/image";

export const HeroSection = () => {
    return (
        <div
            className="relative h-screen bg-cover bg-center"
            style={{ backgroundImage: `url('/images/dhis_hero_image.jpg')` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-start items-center">
                <div className="text-center text-white pt-44 pb-20">
                    <h1 className="text-4xl font-semibold mb-4">
                        DHIS Services Directory
                    </h1>
                    <p className="text-lg mb-6">
                        Available services
                    </p>
                    <button className="px-6 py-2 bg-primaryColor text-white rounded-md">
                        Get Started
                    </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6 md:px-20 px-10">

                    <div
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                        <Image
                            src='/images/ark-lab-kenya-coat-of-arms-detailed.jpg'
                            alt="Directory DHIS"
                            width={64}
                            height={64}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg text-black font-semibold mb-2">
                                HIS Kenya
                            </h3>
                            <a href="https://hiskenya.org">
                                Link
                            </a>
                        </div>
                    </div>

                    <div
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                        <Image
                            src='/images/ark-lab-kenya-coat-of-arms-detailed.jpg'
                            alt="Directory DHIS"
                            width={64}
                            height={64}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg text-black font-semibold mb-2">
                                HIS Kenya Test Portal
                            </h3>
                            <a href="https://test.hiskenya.org">
                                Link
                            </a>
                        </div>
                    </div>

                    <div
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                        <Image
                            src='/images/ark-lab-kenya-coat-of-arms-detailed.jpg'
                            alt="Directory DHIS"
                            width={64}
                            height={64}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg text-black font-semibold mb-2">
                                HIS Tracker Portal
                            </h3>
                            <a href="https://histracker.health.go.ke">
                                Link
                            </a>
                        </div>
                    </div>

                    <div
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                        <Image
                            src='/images/ark-lab-kenya-coat-of-arms-detailed.jpg'
                            alt="Directory DHIS"
                            width={64}
                            height={64}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg text-black font-semibold mb-2">
                                KMHFL Portal
                            </h3>
                            <a href="https://kmhfl.health.go.ke">
                                Link
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};