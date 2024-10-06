import React from "react"

const Navbar = () => {
    const handleScroll = (e, target) => {
        e.preventDefault();
        document.getElementById(target).scrollIntoView({ behavior: "smooth" });
    }

    return (
        <nav className="m-auto sticky top-1 flex justify-center bg-white w-full h-20">
            <div className="flex gap-4 items-center justify-center p-3 outline outline-gray-200 bg-white rounded-2xl max-w-full sm:max-w-4xl h-10">
                <a href="/" onClick={(e) => handleScroll(e, "home")} className="p-2 hover:bg-[#EEEEEE] hover:bg-opacity-50 hover:rounded-lg">Home</a>
                <a href="#" onClick={(e) => handleScroll(e, "about")} className="p-2 hover:bg-[#EEEEEE] hover:bg-opacity-50 hover:rounded-lg">About</a>
                <a href="#" onClick={(e) => handleScroll(e, "projects")} className="p-2 hover:bg-[#EEEEEE] hover:bg-opacity-50 hover:rounded-lg">Projects</a>
            </div>
        </nav>
    )
}

export default Navbar
