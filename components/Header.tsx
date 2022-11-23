import Link from "next/link"

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
        <div className="flex items-center space-x-5">
            <h1 className="font-wow font-bold">Excel Voter</h1>
            <div className="hidden md:inline-flex items-center space-x-5 ">
                
            </div>

        </div>
       
      
    </header>
  )
}

export default Header
