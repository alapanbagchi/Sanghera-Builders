import Link from "next/link";

export const Footer = () => {
  const links = [
    { text: "Discover our Approach", href: "approach" },
    { text: "About Us", href: "our-story" },
    { text: "Contact Us", href: "contact" },
  ];
  return (
    <footer className="w-full h-fit max-[1000px]:-mt-[80px] py-24 bg-primary">
      <ul className="flex space-x-10 max-[600px]:space-x-0 justify-between items-center max-[600px]:flex-col w-full max-w-[1240px] mx-auto">
        <li>
          <img src="/logo.svg" alt="" width={180} />
        </li>
        <div className="w-fit flex gap-4 ml-auto max-[600px]:flex-col max-[600px]:mt-10 max-[600px]:ml-0">
          {links.map(({ text, href }) => (
            <li
              key={text}
              className="font-[brandon-grotesque] text-secondary font-semibold text-md uppercase"
            >
              <Link href={href}>{text}</Link>
            </li>
          ))}
        </div>
      </ul>
    </footer>
  );
};
