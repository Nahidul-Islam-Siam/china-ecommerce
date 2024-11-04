'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
<div className=''>
<header className="bg-gray-800 text-white p-4">
            <div className="flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">MySite</Link>
                <nav>
                    <ul className={`flex items-center space-x-6 md:space-x-8 ${menuOpen ? 'flex-col md:flex-row' : 'hidden md:flex'}`}>
                        <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
                        <li className="relative group">
                            <a href="#" className="hover:text-blue-500">Products</a>
                            <div className="absolute left-0 mt-2 hidden group-hover:flex flex-col md:flex-row bg-white text-gray-800 p-4 shadow-lg w-full md:w-auto">
                                <div className="p-4">
                                    <h3 className="font-semibold mb-2">Category 1</h3>
                                    <Link href="/" className="block py-1 hover:text-blue-500">Item 1</Link>
                                    <Link href="/" className="block py-1 hover:text-blue-500">Item 2</Link>
                                    <Link href="/" className="block py-1 hover:text-blue-500">Item 3</Link>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold mb-2">Category 2</h3>
                                    <Link href="/" className="block py-1 hover:text-blue-500">Item 4</Link>
                                    <Link href="/" className="block py-1 hover:text-blue-500">Item 5</Link>
                                    <Link href="/" className="block py-1 hover:text-blue-500">Item 6</Link>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold mb-2">Category 3</h3>
                                    <Link href="/" className="block py-1 hover:text-blue-500">Item 7</Link>
                                    <Link href="/" className="block py-1 hover:text-blue-500">Item 8</Link>
                                    <Link href="/" className="block py-1 hover:text-blue-500">Item 9</Link>
                                </div>
                            </div>
                        </li>
                        <li><Link href="/" className="hover:text-blue-500">About</Link></li>
                        <li><Link href="/" className="hover:text-blue-500">Contact</Link></li>
                    </ul>
                </nav>
                <button onClick={toggleMenu} className="text-2xl md:hidden">
                    ☰
                </button>
            </div>
        </header>
</div>
    );
}
