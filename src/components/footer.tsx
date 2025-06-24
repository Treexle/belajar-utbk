import { Logo } from "@/components/logo";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const links = [
  {
    title: "Tentang",
    href: "#",
  },
  {
    title: "Subtes",
    href: "#",
  },
  {
    title: "Latihan",
    href: "#",
  },
  {
    title: "Simulasi",
    href: "#",
  },
  {
    title: "Belajar",
    href: "#",
  },
];

export default function FooterSection() {
  return (
    <>
      <footer className="py-16 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <Link href="/" aria-label="go home" className="mx-auto block w-fit">
            <Logo />
          </Link>

          <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-primary block duration-150"
              >
                <span>{link.title}</span>
              </Link>
            ))}
          </div>
          <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="https://github.com/treexle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
              className="text-muted-foreground hover:text-primary block"
            >
              <FaGithub className="size-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/muhamad-fathir-fardan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary block"
            >
              <FaLinkedin className="size-6" />
            </Link>
            <Link
              href="https://instagram.com/fathir.fdn"
              target="_blank" //untuk membuka link di tab baru
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-primary block"
            >
              <FaInstagram className="size-6 " />
            </Link>
          </div>
          <span className="text-muted-foreground block text-center text-sm">
            {" "}
            © {new Date().getFullYear()} M Fathir F, All rights reserved
          </span>
        </div>
      </footer>
    </>
  );
}
