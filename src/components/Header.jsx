import Creative from "../assets/Creative.png"
const Header = () => {
    return (
        <div className="w-full mx-auto text-center flex flex-col">
            <div className="gap-[24px] max-w-[1000px] flex flex-col py-[80px] mx-auto">
                <h1 className="font-playfair font-normal text-display-lg md:text-display-2xl">Make <span className="italic">your home</span> an ode to joy</h1>
                <p className="font-Outfit text-body-lg font-light">Kami mengubah rumah kosong menjadi hunian cantik, memaksimalkan area-area kecil dengan furnitur yang cocok. Kami mewujudkan cita rasa unik Anda menjadi kenyataan!</p>
            </div>
            <img className="m-0" src={Creative} alt="" />
            <div className="bg-[#2C2C2C] w-full flex p-4">
                <p className="text-display-xs font-playfair text-[#959595] font-semibold">FLamingo Architecture, since 1998</p>
            </div>
        </div>
    );
}

export default Header;