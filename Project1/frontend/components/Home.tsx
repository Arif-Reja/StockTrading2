import Link from "next/link";
import { infoSections } from "@/data/Confidence";
import Universe from "./home/Universe";
import Image from "next/image";
import Price from "./home/Price";

    
export default function HomePage(){
    return (
       <div className="flex gap-10 flex-col">
            {/* hero section */}
            <div className="flex items-center justify-center flex-col gap-10">
                {/* top section */}
                {/* <div>
                    <Image src="https://zerodha.com/static/images/landing.svg" alt="hero" className="object-contain" fill/>
                </div> */}

                <Image
                    src="https://zerodha.com/static/images/landing.svg"
                    alt="hero"
                    width={800}
                    height={500}
                    className="w-full md:h-auto object-contain"
                />


                {/* button section */}
                <div className="flex flex-col gap-6 items-center justify-center">
                    <h1 className="md:text-4xl text-xl font-semibold text-gray-500">Invest in everything</h1>
                    <p className="md:text-xl font-normal text-gray-500 text-[14px]">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button className="bg-[#387ED1] px-6 py-3 rounded-md hover:bg-gray-700 transition-all duration-200">
                        <Link href="/signup" className="md:text-2xl text-[16px] font-semibold text-white">
                            Sign up for free
                        </Link>
                    </button>
                </div>
            </div>

            {/* confidence section */}
            <div className="flex justify-between items-center gap-10 mt-[42px]">

                <div className="max-w-1/3 w-full space-y-8">

                    <h1 className="text-2xl font-medium text-gray-600">Trust with confidence</h1>

                    <div className="flex flex-col gap-8">
                        {
                            infoSections.map((item, index) => (
                                <div key = {index}>
                                    <Universe 
                                        heading={item.title}
                                        description={item.description}
                                    />
                                </div>
                            ))   
                        }
                    </div>


                </div>

                <div className="max-w-1/2 w-full mt-10">
                    <div>
                        <Image src="/ecosystem.png" alt="hero" width={800} height={500} />
                    </div>

                    <div className="flex items-center justify-center gap-20">
                        <Link className="text-[#387ED1] hover:text-black text-xl" href="/products" >
                            Explore our products
                        </Link>

                        <Link className="text-[#387ED1] hover:to-black text-xl" href="/signup">
                            Try Kite demo
                        </Link>
                    </div>
                </div>
            </div>

            {/* Normal images */}

            <div className="flex justify-center items-center mb-10">
                <Image src="/press-logos.png" alt="hero" width={800} height={500} />
            </div>


            {/* Pricing Section */}
            <div className="flex justify-between items-center gap-14 mb-10">
                <div className="max-w-1/2 w-full space-y-5">
                    <h3 className="text-2xl font-medium text-gray-700">Unbeatable pricing</h3>
                    <p className="text-[18px] font-normal">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <Link
                        href="/signup"
                        className="text-[#387ED1] hover:text-black text-xl"
                        >See Pricing Plans</Link>   
                </div>

                <div className="max-w-1/2 w-full">
                    <div className="flex gap-5">

                        <Price 
                            src="/pricing-eq.svg"
                            alt="hero_1"
                            width={80}
                            height={50}
                            text="Free account opening"
                        />

                         <Price 
                            src="/pricing-eq_1.svg"
                            alt="hero_1"
                            width={80}
                            height={50}
                            text=" Free equity delivery and direct mutual funds"
                        />

                         <Price 
                            src="/other-trades.svg"
                            alt="hero_1"
                            width={80}
                            height={50}
                            text="Intraday and F&O"
                        />

                    </div>
                </div>
            </div>

            {/* Education section */}
            <div className="flex justify-between items-center gap-14 mb-10">
                <div>
                    <Image src="/index-education.svg" alt="education" height={500} width={300} />
                </div>                
                <div className="max-w-1/2 w-full space-y-5">
                    <h3 className="text-2xl font-medium text-gray-700">Free and open market education</h3>
                    <p className="text-[18px] font-normal">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <Link
                        href="/signup"
                        className="text-[#387ED1] hover:text-black text-xl"
                        >Varsity</Link>   
                    
                    <p className="text-[18px] font-normal">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <Link
                        href="/signup"
                        className="text-[#387ED1] hover:text-black text-xl"
                        >TradingQ&A</Link>   
                </div>
            </div>

            <div>
                <div className="flex flex-col gap-4 items-center justify-center mt-10 mb-10">
                    <h1 className="text-2xl font-semibold text-gray-700">Open a Zerodha account</h1>
                    <p className="text-xl font-normal text-gray-500">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                    <button className="bg-[#387ED1] px-6 py-2 rounded-md hover:bg-gray-700 transition-all duration-200">
                        <Link href="/signup" className="text-xl font-semibold text-white">
                            Sign up for free
                        </Link>
                    </button>
                </div>
            </div>
       </div>
    )
}