export default function FooterComponent (){
    return(
        <section className="bg-white">
            <div className="mx-2 px-4 max-w-448 bg-white text-black justify-center  items-center border-spacing-3 rounded-2xl">
                
            <div className="flex border-b border-black">
                <img src="/images/ADYPSOE_logo.webp" alt="logo" className="mx-3 h-10 mr-3 min-w-48 min-h-44"/>
                <div className="flex py-4">
                <ul className="mx-12 p-2 flex-col">
                    <li className="font-mono hover:text-gray-600 hover:font-serif">
                            <a href="#">OCMP</a>
                    </li>
                    <li className="font-mono hover:text-gray-600 hover:font-serif">
                            <a href="">PRE-SALES FAQ's</a>
                    </li>
                    <li className="font-mono hover:text-gray-600 hover:font-serif">
                            <a href="#">SUBMIT A TICKET</a>
                    </li>
                </ul>

                <ul className="mx-12 p-2 flex-col">
                    <li className="font-mono hover:text-gray-600 hover:font-serif">
                            <a href="#">SERVICES</a>
                    </li>
                    <li className="font-mono hover:text-gray-600 hover:font-serif">
                            <a href="">THEME-TWEAK</a>
                    </li>
                </ul>

                <ul className="mx-12 p-2 flex-col">
                    <li className="font-mono hover:text-gray-600 hover:font-serif">
                            <a href="#">SHOWCASE</a>
                    </li>
                    <li className="font-mono hover:text-gray-600 hover:font-serif">
                            <a href="">WIDGETKIT</a>
                    </li>
                    <li className="font-mono hover:text-gray-600 hover:font-serif">
                            <a href="#">SUPPORT</a>
                    </li>
                </ul>

                <ul className="mx-12 p-2 flex-col">
                    <li className="font-mono hover:text-gray-600 hover:font-serif">
                            <a href="#">HOME</a>
                    </li>
                    <li className="font-mono hover:text-gray-600 hover:font-serif">
                            <a href="">ABOUT</a>
                    </li>
                    <li className="font-mono hover:text-gray-600 hover:font-serif">
                            <a href="#">HELP</a>
                    </li>
                    <li className="font-mono hover:text-gray-600 hover:font-serif">
                            <a href="#">CONTACT US</a>
                    </li>
                </ul>
                </div>
            </div>
            <div className="flex p-4 justify-center">
                <ul className="flex ">
                    <li className="mx-8 p-4 border-2 hover:border-black rounded-full">
                        <a>
                            <img src="#" />
                        </a>
                    </li>
                    <li className="mx-8 p-4 border-2 hover:border-black rounded-full">
                        <a>
                            <img src="#"/>
                        </a>
                    </li>
                    <li className="mx-8 p-4 border-2 hover:border-black rounded-full">
                        <a>
                            <img src="#"/>
                        </a>
                    </li>
                    <li className="mx-8 p-4 border-2 hover:border-black rounded-full">
                        <a>
                            <img src="#"/>
                        </a>
                    </li>
                </ul>
                </div>
                <p className="text-xs text-center" >@Copyright. All rights reserved</p>
            </div>
        </section>
    );
};
