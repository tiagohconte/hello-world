import { Ubuntu_Mono } from "next/font/google";

const ubuntuMono = Ubuntu_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function Intro() {
  return (
    <div className="h-screen flex justify-between">
      <div
        className={`${ubuntuMono.className} mx-auto mt-[35vh] text-center font-bold`}
      >
        <p className="text-5xl">
          Tiago Conte<span className="bold text-6xl animate-blink">|</span>
        </p>
        <h2 className="text-lg">Software Developer</h2>
      </div>
    </div>
  );
}
