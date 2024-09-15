import Card from "./Card";
const ProductSection = () => {
  return (
    <div className="w-full h-auto flex flex-wrap text-center">
      <div className="w-full h-auto flex flex-col items-center gap-4">
        <p className="text-indigo-900 text-2xl md:text-3xl font-bold">
          Our Products
        </p>
        <div className="w-36 h-1 border-b-4 border-yellow-500 mb-12"></div>
      </div>

      <div className="cardContainer w-full flex flex-wrap rounded-xl">
        <Card
          image={
            "https://icons.veryicon.com/png/o/education-technology/educational-icon/online-course.png"
          }
          text1={"SkillSurge Lab"}
          text2={"Supercharge your product dev with our robust lab"}
        />
        <Card
          image={
            "https://icons.veryicon.com/png/o/education-technology/educational-icon/online-course.png"
          }
          text1={"Job Portal"}
          text2={
            "Use exceptional resume templates to standout among candidates"
          }
        />
        <Card
          image={
            "https://icons.veryicon.com/png/o/education-technology/educational-icon/online-course.png"
          }
          text1={"Experience Portal"}
          text2={
            "The portal prioritises hands on training with 570+ internship projects"
          }
        />
        <Card
          image={
            "https://icons.veryicon.com/png/o/education-technology/educational-icon/online-course.png"
          }
          text1={"Become an Affiliate"}
          text2={"Explore affiliate marketing opportunities with SkillSurge"}
        />
        <Card
          image={
            "https://icons.veryicon.com/png/o/education-technology/educational-icon/online-course.png"
          }
          text1={"Hall of Fame"}
          text2={"Our student placements speak volumes about our courses"}
        />
      </div>
    </div>
  );
};

export default ProductSection;
