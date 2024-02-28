import Link from "next/link";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">     
      <h3 className="text-5xl">Auth Page under construction</h3>
      <Link href="/pos" className="bg-green-600 text-white px-5 py-3 mt-3 rounded">Go to POS</Link>
    </main>
  );
}
