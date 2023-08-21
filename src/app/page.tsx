import Clock from "@/components/clock";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-items-center p-24">
      <h2 className="p-10">This a demo of placing elements around the circle</h2>
      <div className="border-dashed border-red-400"  >
        <Clock></Clock>
      </div>
      <div>
      </div>
    </main>
  )
}
