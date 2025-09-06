export default function Card({ projectState, spanClass, pClass, title, goal, img, className, imgClassName, titleClassname }) {
  return (
    <div className={`rounded-xl ${className || "bg-white"} z-10`}>
      <div className="w-full">
        <img
          src={img}
          alt="project image"
          className={imgClassName || 'w-full h-[303px]'}
        />
      </div>
      <div className="w-full h-[200px] flex flex-col justify-around pr-5">
        <span className={`text-lg ${spanClass || "text-black"}`}>{projectState}</span>
        <h2 className={`text-2xl ${titleClassname || "text-black"}`}>
          {title}
        </h2>
        <p className={`text-lg mt-2 ${pClass || "text-black"}`}>{goal}</p>
      </div>
    </div>
  );
}