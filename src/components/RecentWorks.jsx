
import Work from "./Work";
const RecentWorks = () => {
    return (
        <div className="w-full max-w-[1240px] mx-auto px-4 grid lg:grid-cols-2 lg:gap-8 py-12">
            <div className="flex flex-col gap-12 items-start">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-row justify-start items-center gap-4 text-primary">
                        <hr className="w-20"/>
                        <p className="font-Outfit font-semibold text-body-sm ">RECENT WORKS</p>
                    </div>
                    <p className="font-playfair text-display-md md:text-display-xl">Some of our crafts made with love</p>
                </div>
                <div className="flex flex-col gap-10">
                    <Work />
                    <div className="lg:hidden">
                        <Work />
                        <Work />
                    </div>
                </div>
                <div className="bg-primary flex flex-row justify-center items-center py-4 px-6">
                    <h1 className="text-white font-Outfit font-semibold">CONTACT US</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none">
                        <g clip-path="url(#clip0_2665_563)">
                        <path d="M14.1663 5.83301L5.83301 14.1663" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.66699 5.83301H14.167V13.333" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_2665_563">
                        <rect width="20" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className="hidden lg:flex flex-col px-14">
                <Work />
                <Work />
            </div>
        </div>
    );
}

export default RecentWorks;