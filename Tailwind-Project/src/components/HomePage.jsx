const HomePage = () => {
  return (
    <div className="w-full h-auto">
      <div className="img1 hidden md:block">
        <img
          src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/web.jpg"
          alt=""
        />
      </div>

      <div className="img2 md:hidden">
        <img
          src="https://cdn.pwskills.com/assets/uploads/banners/63a18cca807628f5968f528a/mobile.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomePage;
