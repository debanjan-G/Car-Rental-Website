import HeroImage from "../../public/sven-d-a4S6KUuLeoM-unsplash.jpg"
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center md:flex-row md:items-center gap-2 md:justify-end m-10 md:m-0">

      <div className="w-full p-4 md:w-1/3 flex flex-col gap-4 items-center justify-center ">
        <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left">Drive Your Way – Rent the Perfect Car Today!</h1>
        <p className="text-lg text-center md:text-left md:text-2xl font-extralight">Affordable rates, flexible rentals, and a wide selection of vehicles to fit your needs. Reserve your car in minutes and hit the road with confidence.</p>
        <button className="text-sm md:text-xl bg-blue-700 p-3 rounded-md text-white font-semibold hover:bg-indigo-600 duration-300 transition">Browse Cars</button>
      </div>

      <div className="flex justify-center md:items-center md:justify-start md:h-full md:w-1/2">
        <Image src={HeroImage} alt='hero-image' className=" w-fit h-fit md:h-1/2" priority />
      </div>

    </div>

  );
}
