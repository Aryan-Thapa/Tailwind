const Card = ({image,text1,text2}) => {
  return (
    <div className=" rounded-xl overflow-hidden mx-auto flex flex-col items-center gap-2 p-4 max-w-[] md:max-w-[16rem] hover:scale-105 transition-all mb-20">
        <div className="h-36 w-36 md:h-44 md:w-44 md:rounded-full">
            <img src={image} alt="" />
        </div>

        <div>
            <p className="font-bold text-xl text-white md:text-2xl">{text1}</p>
            <p className="font-semibold text-xl text-slate-700 md:text-2xl">{text2}</p>
        </div>
      
    </div>
  )
}

export default Card
