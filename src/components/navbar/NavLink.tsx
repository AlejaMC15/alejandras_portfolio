import Link from "next/link";

type NavLinkProps = {
    href: string;
    children: React.ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => {
    return (
        <Link href={href} legacyBehavior>
            <a className="relative inline-block px-4 py-2 text-white rounded-lg transition-all duration-300 group">
                {children}
                <span
                    className="absolute inset-0 rounded-lg p-[1px] z-[-1] opacity-0 group-hover:opacity-100 
          bg-gradient-to-r from-blue-500 to-purple-500 transition-opacity"
                ></span>
            </a>
        </Link>
    );
};

export default NavLink;
