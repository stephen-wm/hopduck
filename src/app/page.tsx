import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-background">
      <header className="h-18 w-full max-w-full flex items-center justify-center fixed top-0 inset-x-0 border-b border-white/8 bg-background">
        <div className="container max-w-7xl self-stretch px-4 sm:px-6 lg:px-8 flex items-center justify-start">
          <Link href="/">
            <Image
              className="hover:opacity-80 duration-150 transition-opacity"
              src="/hopduck.svg"
              alt="Next.js logo"
              width={0}
              height={0}
              style={{ height: "auto", width: "120px" }}
              priority
            />
          </Link>

          <div className="ml-auto">
            <Link
              className="group/button inline-flex shrink-0 items-center justify-center rounded-lg bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 bg-foreground text-background font-semibold hover:bg-foreground/80"
              href="https://github.com/stephen-wm/hopduck#REAMDE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="invert-0"
                src="/github.svg"
                alt="Vercel logomark"
                width={16}
                height={16}
              />
              GitHub Repository
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 grid place-items-center">
        <div className="p-4 flex flex-col gap-2 items-center text-center">
          <h1
            className="text-3xl lg:text-4xl text-medium text-foreground tracking-tight leading-10 text-balance"
            style={{ fontWeight: "500" }}
          >
            Something great is on its way.
          </h1>

          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400 text-balance max-w-md md:max-w-max">
            To learn more about this project, visit the{" "}
            <Link
              href="https://github.com/stephen-wm/hopduck#README"
              className="text-white underline underline-offset-8 decoration-transparent hover:underline-offset-5 hover:decoration-white transition-all duration-150"
            >
              GitHub repository
            </Link>
            .
          </p>
        </div>
      </main>

      <footer className="w-full max-w-full flex items-center justify-center h-18 border-t border-white/8 bg-background">
        <div className="container px-4 sm:px-6 lg:px-8 self-stretch flex items-center justify-center">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()}
            HopDuck. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
