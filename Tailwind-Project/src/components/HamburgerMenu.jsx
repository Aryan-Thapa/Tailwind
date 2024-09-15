const HamburgerMenu = () => {
  return (
    <div className="absolute top-14 right-0 p-8  bg-indigo-200 sm:hidden rounded-xl">
      <ul className="flex flex-col gap-3 text-lg font-bold hover:opacity-80 cursor-pointer">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </div>
  )
}

export default HamburgerMenu
