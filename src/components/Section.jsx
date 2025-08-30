export default function Section({ id, title, children }) {
  return (
    <section id={id} className="w-full mx-auto px-4 sm:px-6 lg:px-33 py-16 md:py-24">
      <div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="text-right"
      >
        <div className="flex items-center w-full justify-between mb-11">
          <h3 className="text-lg">{title}</h3>
          <span className="w-[88%] h-0.5 bg-black"></span>
          <p className="text-lg">2025</p>
        </div>
      </div>
      {children}
    </section>
  );
}
