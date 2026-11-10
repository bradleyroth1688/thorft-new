export default function MeetLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="gradient-navy text-white py-14 md:py-16">
        <div className="container-max mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-gold-400/10 border border-gold-400/30 text-gold-400 rounded-full text-sm font-medium mb-4">
            Schedule
          </span>
          <h1 className="text-3xl md:text-5xl font-bold">
            Book time with <span className="text-gold-400">Brad Roth</span>
          </h1>
        </div>
      </section>
      <section className="py-12 md:py-16 bg-gray-50 min-h-[60vh]">
        <div className="container-max mx-auto px-4">{children}</div>
      </section>
    </>
  )
}
