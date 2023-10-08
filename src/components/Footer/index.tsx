import Link from "next/link";

export default function Footer(): JSX.Element {
  return (
    <footer className="bottom-0 left-0 w-full p-5 text-center text-gray-400 border-t border-slate-50/[0.06]">
      <span className="text-sm ">
        <Link
          href="https://www.tiagoconte.com.br/"
          className="hover:text-gray-200 transition-colors duration-200"
        >
          Tiago Conte
        </Link>{" "}
        © {new Date().getFullYear()}. All Rights Reserved.
      </span>
    </footer>
  );
}
