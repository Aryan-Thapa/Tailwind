import Socials from "./Socials";
const Footer = () => {
  return (
    <div className="w-full h-auto bg-gray-800 px-6 py-3 md:py-12 md:px-40 flex flex-wrap gap-24 ">
      <Socials />
      <div className="max-w-[24rem] flex flex-col gap-7">
        <div>
          <h2 className="font-bold text-white text-2xl">Company</h2>
          <div className="border-2 mt-2 w-[10rem] md:w-[24rem] border-orange-600"></div>
        </div>

        <div className="grid grid-cols-2 text-white font-semibold gap-7">
          <span>About us</span>
          <span>Contact us</span>
          <span>FAQ</span>
          <span>Job assistance </span>
          <span>Privacy policy </span>
          <span>Terms and condition</span>
        </div>
      </div>
      <div className="max-w-[24rem] flex flex-col gap-7">
        <div>
          <h2 className="font-bold text-white text-2xl">Product</h2>
          <div className="border-2 mt-2 w-[10rem] md:w-[24rem] border-orange-600"></div>
        </div>

        <div className="grid grid-cols-2 text-white font-semibold gap-7">
          <span>Skills Lab</span>
          <span>Job Portal </span>
          <span>Experience Portal </span>
          <span>Become an affiliate </span>
          <span>Hall Of fame </span>
          <span>Blog</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
