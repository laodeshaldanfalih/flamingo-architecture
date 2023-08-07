import Image from "../assets/Image.png"
const Work = () =>{ 
    return (
        <div className="flex flex-col gap-6">
            <img src={Image} alt="" />
            <div className="flex flex-col gap-4">
                <h1 className="font-playfair text-display-xs md:text-display-md">Villa Furnishing & Interior</h1>
                <p className="font-Outfit text-body-sm font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.</p>
            </div>
        </div>
    )
}

export default  Work;