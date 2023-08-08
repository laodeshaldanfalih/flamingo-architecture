import {AiOutlineInstagram,AiOutlineWhatsApp} from "react-icons/ai"
const Footer = ()=>{
    return (
        <footer className="py-10 px-4 flex flex-col gap-10 w-full max-w-[1240px] mx-auto">
            <hr className="text-[#D9D9D6]"/>
            <div className="flex flex-col lg:flex-row gap-12 justify-between">
                <div className="font-playfair text-display-sm md:text-display-lg">
                    <h1 className="text-[#2C2C2C]">Kick-start your dream  <br /> home with us</h1>
                    <h1 className="text-primary italic underline decoration-1 underline-offset-4">Send us a hi</h1>
                </div>
                <div className="flex flex-col gap-8 text-[#2C2C2C] lg:w-[30%]">
                    <div>
                        <h1 className="font-playfair text-display-xs">Yogyakarta, Indonesia</h1>
                        <p className="font-Outfit text-body-sm font-light">Jalan Sidomoyo Km 0.5, No.12, RT 002, RW 016, Sidomoyo, Godean, Sleman, Yogyakarta</p>
                    </div>
                    <div>
                        <p className="font-Outfit text-body-sm font-light">Email us at</p>
                        <h1 className="text-primary font-poppins text-display-xs">mizan@gmail.com</h1>
                    </div>
                    <div>
                        <p className="font-Outfit text-body-sm font-light">If you're hurry, quick call for us</p>
                        <h1 className="text-primary font-poppins text-display-xs">+62 813 2578 7170</h1>
                    </div>
                </div>
            </div>
            <hr className="text-[#D9D9D6]"/>
            <div className="flex flex-col gap-8 lg:flex-row justify-between lg:items-center">
                <h1 className="font-Outfit text-body-md font-light text-[#444444]">© 2022 Inteo - Award winning studio. Made with love by Landify</h1>
                <div>
                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="flex flex-row justify-start items-center text-[#444444] gap-4">
                            <p className="font-Outfit font-semibold text-body-sm">CONNECT</p>
                            <hr className="w-20"/>
                        </div>
                        <div className="flex flex-row gap-6 text-primary">
                            <div className="border p-2 rounded-full border-[#E6D8CC]">
                                <AiOutlineInstagram size={30}/>
                            </div>
                            <div className="border p-2 rounded-full border-[#E6D8CC]">
                                <AiOutlineWhatsApp size={30}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;