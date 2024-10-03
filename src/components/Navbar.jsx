import React from "react"

const Navbar = () => {
    const handleScroll = (e, target)=>{
        e.preventDefault();
        document.getElementById(target).scrollIntoView({behavior: "smooth"});
    }
  return (
    <nav className=" max-w-[600px] m-auto sticky top-0 flex item-center justify-center bg-white w-full h-10">
        <div className="flex gap-4 items-center justify-center p-3 outline outline-gray-200 bg-white rounded-2xl max-w-2xl ">
            <a href="/" onClick={(e) => handleScroll(e, "home")} className="p-2 hover:bg-[#EEEEEE] hover:bg-opacity-50 hover:rounded-lg">Home</a>
            <a href="#" onClick={(e) => handleScroll(e, "about")} className="p-2 hover:bg-[#EEEEEE] hover:bg-opacity-50 hover:rounded-lg">About</a>
            <a href="#" onClick={(e) => handleScroll(e, "projects")} className="p-2 hover:bg-[#EEEEEE] hover:bg-opacity-50 hover:rounded-lg">Projects</a>
        </div>
    </nav>
  )
}

export default Navbar
