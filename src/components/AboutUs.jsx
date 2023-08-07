import Section from "../assets/Section.png"

const AboutUs = () => {
    return (
        <div className="w-full max-w-[1240px] mx-auto px-4 py-12 flex flex-col gap-[24px]">
            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col gap-[24px]">
                    <div className="flex flex-row justify-start items-center gap-4 text-primary">
                        <hr className="w-20"/>
                        <p className="font-Outfit font-semibold text-body-sm ">ABOUT US</p>
                    </div>
                    <h1 className="text-[#2C2C2C] font-playfair text-display-md md:text-display-xl">We help to bring your dream home to reality</h1>
                    <p className="text-body-md font-Outfit font-light text-[#444444]">Di Flamingo Architecture, kami berkomitmen untuk mewujudkan rumah impian Anda menjadi kenyataan yang nyata. Dengan gairah terhadap desain dan komitmen terhadap keunggulan, kami mengkhususkan diri dalam menciptakan ruang-ruang yang mencerminkan kepribadian dan gaya hidup unik Anda.</p>
                    <p className="text-body-md font-Outfit font-light text-[#444444]">Dengan pendekatan yang berpusat pada klien, kami mengutamakan komunikasi efektif dan kolaborasi sepanjang proses desain dan konstruksi. Kepuasan Anda adalah tujuan utama kami, dan kami bangga memberikan proyek-proyek yang tidak hanya memenuhi, tetapi melebihi harapan Anda.</p>
                </div>
                <img className="py-12" src={Section} alt="" />
            </div>
            <div className="flex flex-col gap-8 mb-12 md:flex-row justify-between">
                <div className="flex flex-row gap-4 text-[#2C2C2C] items-center">
                    <p className="font-playfair text-display-lg">100%</p>
                    <p className="text-body-sm font-Outfit">KEPUASAN <br /> KLIEN</p>
                </div>
                <div className="flex flex-row gap-4 text-[#2C2C2C] items-center">
                    <p className="font-playfair text-display-lg">100%</p>
                    <p className="text-body-sm font-Outfit">TIM PROFESIONAL DAN <br /> BERPENGALAMAN</p>
                </div>
                <div className="flex flex-row gap-4 text-[#2C2C2C] items-center">
                    <p className="font-playfair text-display-lg">5000+</p>
                    <p className="text-body-sm font-Outfit">PROYEK DI SELURUH <br /> INDONESIA</p>
                </div>
            </div>
            <hr className="text-[#D9D9D6]"/>
        </div>
    );
}

export default AboutUs;