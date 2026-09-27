import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-3xl mx-auto px-4 md:px-8 py-24 md:py-32 text-center flex flex-col items-center">
      <div
        className="w-12 h-12 md:w-16 md:h-16 bg-red-500 rotate-45 mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        aria-hidden="true"
      ></div>
      <p className="text-sm font-black uppercase tracking-widest mb-4">
        404 — Page not found
      </p>
      <h1 className="text-5xl md:text-7xl font-lora tracking-tighter mb-6">
        Lost in space.
      </h1>
      <p className="text-base md:text-lg font-medium text-black/70 max-w-md mb-12">
        The page you&apos;re looking for doesn&apos;t exist or was moved.
      </p>
      <Link
        href="/"
        className="bg-black text-white px-8 py-4 font-black uppercase tracking-widest border-4 border-black hover:bg-white hover:text-black transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px]"
      >
        Back home
      </Link>
    </main>
  );
}
