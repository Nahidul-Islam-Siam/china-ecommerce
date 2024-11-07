'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const toggleMegaMenu = () => setMegaMenuOpen(!megaMenuOpen);
    const handleMegaMenuEnter = () => setMegaMenuOpen(true);
    const handleMegaMenuLeave = () => setMegaMenuOpen(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Company', href: '#', hasMegaMenu: true },
        { name: 'Marketplace', href: '#' },
        { name: 'Resources', href: '#' },
        { name: 'Contact', href: '#' },
    ];

    const megaMenuColumns = [
        [
            'Online Stores',
            'Segmentation',
            'Marketing CRM',
            'Online Stores',
        ],
        [
            'Our Blog',
            'Terms & Conditions',
            'License',
            'Resources',
        ],
    ];

    return (
        <nav className="relative bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MySite</span>
                </Link>

                <button onClick={toggleMenu} className="inline-flex items-center p-2 w-10 h-10 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:ring-2 dark:text-gray-400 dark:hover:bg-gray-700">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>

                <div className={`items-center justify-between ${menuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto`}>
                    <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                        {navLinks.map((link, index) => (
                            <li key={index} onMouseEnter={link.hasMegaMenu ? handleMegaMenuEnter : undefined} onMouseLeave={link.hasMegaMenu ? handleMegaMenuLeave : undefined}>
                                <Link href={link.href} className="block py-2 px-3 text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">
                                    {link.name}
                                    {link.hasMegaMenu && (
                                        <svg className="w-2.5 h-2.5 ml-1" fill="none" viewBox="0 0 10 6" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4"/>
                                        </svg>
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {(megaMenuOpen || menuOpen) && (
                <div onMouseEnter={handleMegaMenuEnter} onMouseLeave={handleMegaMenuLeave} className="absolute left-0 right-0 w-screen top-full bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 z-50">
                    <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
                        {megaMenuColumns.map((column, i) => (
                            <ul key={i} className={`space-y-4 ${i === 0 ? 'hidden md:block' : ''}`}>
                                {column.map((item, j) => (
                                    <li key={j}><Link href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">{item}</Link></li>
                                ))}
                            </ul>
                        ))}
                        <Link href="#" className="p-8 bg-local bg-gray-500 bg-center bg-cover rounded-lg hover:bg-blend-soft-light" style={{ backgroundImage: 'url(/docs/images/dashboard-overview.png)' }}>
                            <p className="max-w-xl mb-5 font-extrabold text-white">Preview the new Flowbite dashboard navigation.</p>
                            <button className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4">
                                Get started
                                <svg className="w-3 h-3 ml-2 rtl:rotate-180" fill="none" viewBox="0 0 14 10" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
