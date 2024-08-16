const HeaderComponent = () => {
    return (
        <header className="bg-white text-black pb-8">
            <div className="container mx-auto py-4 flex flex-col lg:flex-row items-center lg:justify-between border-b border-gray-200">
                {/* Logo Section */}
                <img src="/images/ADYPSOE_logo.webp" alt="logo" className="h-24 mb-4 lg:mb-0" />

                {/* Centered Title Section */}
                <div className="flex-grow text-center lg:text-left">
                    <span className="text-2xl font-serif font-bold">
                        Ajeenkya DY Patil School of Engineering
                    </span>
                </div>

                    {/* User Icon Section */}
                <div className="hidden lg:flex items-center space-x-4">
                    <button onClick={<userDetails/>}>
                        <img src="/images/userImg.jpg" alt="userLogo" className="h-24"/>
                    </button>
                </div>
            </div>
            <nav className="container mx-auto py-4">
                {/* Navigation */}
                <ul className="flex flex-col lg:flex-row justify-center lg:space-x-6 space-y-4 lg:space-y-0">
                    <li>
                        <a href="#" className="font-mono hover:text-gray-400 hover:font-serif">Home</a>
                    </li>
                    <li>
                        <a href="#" className="font-mono hover:text-gray-400 hover:font-serif">About</a>
                    </li>
                    <li>
                        <a href="#" className="font-mono hover:text-gray-400 hover:font-serif">Help</a>
                    </li>
                    <li>
                        <a href="#" className="font-mono hover:text-gray-400 hover:font-serif">Contact us</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderComponent;
