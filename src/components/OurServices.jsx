import Service from "./Service";

const OurServices = () => { 
    return (
        <div className="w-full max-w-[1240px] mx-auto py-12 px-4 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-start items-center gap-4 text-primary">
                    <hr className="w-20"/>
                    <p className="font-Outfit font-semibold text-body-sm ">OUR SERVICES</p>
                </div>
                <p className="font-playfair text-display-md md:text-display-xl">
                    We provide the <span className="italic">best solutions</span> for your dream home
                </p>
            </div>
            <div className="flex flex-col py-12 gap-8 lg:flex-row">
                <Service />
                <Service />
                <Service />
            </div>
        </div>
    );
}

export default OurServices;