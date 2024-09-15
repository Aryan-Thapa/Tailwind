import Card from "./Card"
const HeroSection = () => {
  return (
    <div className="w-full h-auto flex flex-col flex-wrap text-center mt-7">
        <div className="w-full h-auto flex flex-col items-center gap-4">
            <p className="text-indigo-900 text-2xl md:text-3xl font-bold">Pure Hardwork,No Shortcuts!</p>
            <div className="w-36 h-1 border-b-4 border-yellow-500 mb-12"></div>
        </div>

        <div className="cardContainer w-full flex flex-wrap rounded-xl">
            <Card image={"https://icons.veryicon.com/png/o/education-technology/educational-icon/online-course.png"}
            text1={"600 +"}
            text2={"Different Courses"}/>

            <Card image={"https://cdn-icons-png.flaticon.com/512/2784/2784403.png"}
            text1={"700,000 +"}
            text2={"Students Enrolled"}/>

            <Card image={"https://cdn.iconscout.com/icon/free/png-256/free-job-change-people-icon-download-in-svg-png-gif-file-formats--exchange-exchanging-pack-miscellaneous-icons-2014389.png?f=webp&w=256"}
            text1={"10,000 +"}
            text2={"Successful Transition"}/>
        </div>
    </div>
  )
}

export default HeroSection
