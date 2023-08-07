const OurServices = () => { 
    return (
        <div className="w-full max-w-[1240px] mx-auto py-12 px-4">
            <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-start items-center gap-4 text-primary">
                    <hr className="w-20"/>
                    <p className="font-Outfit font-semibold text-body-sm ">OUR SERVICES</p>
                </div>
                <p className="font-playfair text-display-md md:text-display-xl">
                    We provide the <span className="italic">best solutions</span> for your dream home
                </p>
            </div>
            <div className="flex flex-col py-12 gap-8 border">
                <div className="flex flex-col p-8 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M36 0H15V6H3V18H0V36H3V21H15V36H18V3H33V36H36V0ZM6 9H15V18H6V9ZM6 24V27H12V24H6ZM9 12H12V15H9V12ZM24 12H21V15H24V12ZM21 24H24V27H21V24ZM24 30H21V33H24V30ZM21 6H24V9H21V6ZM24 18H21V21H24V18ZM27 6H30V9H27V6ZM30 18H27V21H30V18ZM27 12H30V15H27V12ZM30 24H27V27H30V24ZM27 30H30V33H27V30ZM12 33V30H6V33H12Z" fill="#996830"/>
                    </svg>
                    <div>
                        <p>Architectural & Interior design</p>
                        <p>Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurServices;