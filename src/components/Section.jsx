export default function Section({ id, title, children, line = true, leadingText = false }) {
  return (
    <section id={id} className="w-full mx-auto px-3 lg:px-29 lg:py-12 py-1 z-10 white-background">
      <div
        initial={{ opacity: 0, y: 24 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="text-right z-10"
      >
        <div className="flex items-center w-full justify-between mb-11 z-10">
          <h3 className="text-lg z-10">{title}</h3>
          {line &&
            <>
              <span className="w-full flex-1 mx-5 h-0.5 bg-black z-10"></span>
              {leadingText &&
                <p className="text-lg z-10">2025</p>
              }
            </>
          }
        </div>
      </div>
      {children}
    </section>
  );
}
