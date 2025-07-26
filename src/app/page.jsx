import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p>Get started by editing&nbsp;<code className="font-mono font-bold">src/app/page.jsx</code></p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          {/* ... Next.js logos and links, replace with Vendetta content later ... */}
        </div>
      </div>
      {/* ... rest of default Next.js content ... */}
      <h1 className="text-4xl font-bold mt-8">Welcome to Vendetta News Blog!</h1> {/* Your added line */}
    </main>
  );
}