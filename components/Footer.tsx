import React from "react";

export const Footer = () => {
    return (
        <div>
            <footer className="bg-primaryColor text-white py-6 md:px-20 px-10 text-start">
                <div className="flex flex-col md:flex-row justify-center items-start">
                    <div className="w-1/2">
                        <h2 className="text-2xl font-semibold pb-1">
                            DHIS2
                        </h2>
                        <p className="text-sm">Digitally accessible healthcare for all.</p>
                    </div>
                    <div className="w-1/2">
                        <h2 className="text-2xl font-semibold pb-1">Contact Us</h2>
                        <p className="text-sm">
                            Email:
                            <a href="mailto:info@halal.com" className="text-white">
                                info@dhis2.org
                            </a>
                        </p>
                        <p className="text-sm">Phone: 123-456-7890</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};