import { useState } from "react";


const links = [
{ name: "Home", href: "#home" },
{ name: "About", href: "#about" },
{ name: "Skills", href: "#skills" },
{ name: "Education", href: "#education" },
{ name: "Projects", href: "#projects" },
{ name: "Contact", href: "#contact" },
];


export default function Navbar() {
const [open, setOpen] = useState(false);


return (
<nav className="fixed top-0 w-full text-cyan-400 font-bold bg-gray-700 shadow z-50">
<div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
<h1 className="text-xl text-cyan-400 font-bold">My Portfolio</h1>
<button
className="md:hidden"
onClick={() => setOpen(!open)}
>
☰
</button>
<ul className="hidden md:flex space-x-6">
{links.map((link) => (
<li key={link.name}>
<a href={link.href} className="hover:text-gray-300">
{link.name}
</a>
</li>
))}
</ul>
</div>


{open && (
<ul className="md:hidden bg-white px-4 pb-4 space-y-2">
{links.map((link) => (
<li key={link.name}>
<a
href={link.href}
onClick={() => setOpen(false)}
className="block py-2 border-b"
>
{link.name}
</a>
</li>
))}
</ul>
)}
</nav>
);
}