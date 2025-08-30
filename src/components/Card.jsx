export default function Card({ projectState, title, goal, img, className, imgClassName, titleClassname }) {
  return (
    <div className={`rounded-xl ${className}`}>
      <div className="w-full">
        <img
          src={img}
          alt="project image"
          className={imgClassName || 'w-full h-[303px]'}
        />
      </div>
      <div className="w-full h-[200px] flex flex-col justify-around pr-5">
        <span className="text-lg text-neutral-100">{projectState}</span>
        <h2 className={`text-white font-semibold text-2xl`}>
          {title}
        </h2>
        <p className="text-lg text-neutral-100 mt-2">{goal}</p>
      </div>
    </div>
  );
}