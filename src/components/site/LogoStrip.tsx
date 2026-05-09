export function LogoStrip() {
  const logos = ["Logoipsum", "LOGOIPSUM", "Logoipsum", "Logosum", "Logoipsum", "LOGOIPSUM"];
  return (
    <section className="bg-lavender py-14">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-[13px] font-semibold tracking-[0.18em] uppercase text-slate-body">
          Connected by 100+ Companies
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-14 gap-y-6 opacity-55">
          {logos.map((l, i) => (
            <span key={i} className="font-display font-bold text-2xl text-primary-deep">
              ◆ {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
