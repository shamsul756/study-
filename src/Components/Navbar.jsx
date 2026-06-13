"use client";

import { useState, useEffect } from "react";
import {
    BookOpen,
    Menu,
    X,
    User,
    LogOut,
    LayoutDashboard,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@heroui/react";
import Image from "next/image";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`sticky top-0 w-full z-50 border-b border-white/10 transition-all duration-300 ${scrolled
                    ? "bg-white/70 backdrop-blur-md shadow-sm py-2"
                    : "bg-slate-50 py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="p-2 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl shadow-lg shadow-blue-600/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                                <BookOpen className="w-6 h-6 text-white" />
                            </div>

                            <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-blue-700 bg-clip-text text-transparent">
                                StudyNook
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8 items-center">
                        <Link
                            href="/"
                            className="font-medium text-slate-700 hover:text-blue-600 transition-all duration-200 hover:-translate-y-0.5"
                        >
                            Home
                        </Link>

                        <Link
                            href="/allroom"
                            className="font-medium text-slate-700 hover:text-blue-600 transition-all duration-200 hover:-translate-y-0.5"
                        >
                            All Rooms
                        </Link>

                        <Link
                            href="/addroom"
                            className="font-medium text-slate-700 hover:text-blue-600 transition-all duration-200 hover:-translate-y-0.5"
                        >
                            Add Room
                        </Link>

                        <Link
                            href="/my-listing"
                            className="font-medium text-blue-600 hover:text-blue-700 transition-all duration-200 hover:-translate-y-0.5"
                        >
                            My Listing
                        </Link>

                        <Link
                            href="/my-booking"
                            className="font-medium text-blue-600 hover:text-blue-700 transition-all duration-200 hover:-translate-y-0.5"
                        >
                            My Booking
                        </Link>
                    </div>

                    {/* Desktop Right Side */}
                    <div className="hidden md:flex items-center gap-4">
                        <>
                            <Link
                                href="/login"
                                className="font-medium text-slate-700 hover:text-blue-600 transition-all duration-200 hover:-translate-y-0.5"
                            >
                                Login
                            </Link>

                            <Link href="/register">
                                <Button
                                    color="primary"
                                    className="font-bold rounded-full px-8 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 hover:scale-105 transition-all duration-300"
                                >
                                    Registration Free
                                </Button>
                            </Link>
                        </>

                        {/* Profile */}
                        <div className="relative group">
                            <button className="flex items-center gap-3 p-1 rounded-full hover:bg-slate-100 transition-all duration-300 border border-transparent hover:border-slate-200">
                                <Image
                                    width={40}
                                    height={40}
                                    src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"
                                    alt="avatar"
                                    className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-600/20 shadow-md group-hover:ring-blue-600/40 transition-all duration-300"
                                />

                                <div className="text-left hidden lg:block">
                                    <p className="text-sm font-bold truncate max-w-25">
                                        Nazmus Sakib
                                    </p>
                                    <p className="text-[10px] text-slate-500">Student</p>
                                </div>
                            </button>

                            <div className="absolute right-0 top-12 w-56 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] hidden group-hover:flex flex-col py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                <div className="px-4 py-3 border-b border-slate-100">
                                    <p className="font-bold text-sm">Welcome back!</p>
                                    <p className="text-xs truncate text-slate-500">
                                        sakib@gmail.com
                                    </p>
                                </div>

                                <Link
                                    href="/dashboard"
                                    className="px-4 py-2 text-sm hover:bg-slate-50 flex items-center gap-3 transition-all duration-200"
                                >
                                    <LayoutDashboard className="w-4 h-4" />
                                    Dashboard
                                </Link>

                                <Link
                                    href="/settings"
                                    className="px-4 py-2 text-sm hover:bg-slate-50 flex items-center gap-3 transition-all duration-200"
                                >
                                    <User className="w-4 h-4" />
                                    Settings
                                </Link>

                                <button className="px-4 py-2 text-sm text-red-500 hover:bg-red-50 flex items-center gap-3 transition-all duration-200 text-left">
                                    <LogOut className="w-4 h-4" />
                                    Log Out
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-xl hover:bg-slate-100 hover:scale-105 transition-all duration-200"
                        >
                            {isMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden px-4 pt-2 pb-6 space-y-2 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl animate-in slide-in-from-top duration-300">
                    <Link
                        href="/"
                        className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 hover:translate-x-1 transition-all duration-200 rounded-xl"
                    >
                        Home
                    </Link>

                    <Link
                        href="/courses"
                        className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 hover:translate-x-1 transition-all duration-200 rounded-xl"
                    >
                        Courses
                    </Link>

                    <Link
                        href="/add-course"
                        className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 hover:translate-x-1 transition-all duration-200 rounded-xl"
                    >
                        Add Course
                    </Link>

                    <Link
                        href="/my-listing"
                        className="px-4 py-2 text-sm hover:bg-slate-50 flex items-center gap-3 transition-all duration-200 text-black"
                    >
                        <LayoutDashboard className="w-4 h-4" />
                        My Listing
                    </Link>

                    <Link
                        href="/my-booking"
                        className="px-4 py-2 text-sm hover:bg-slate-50 flex items-center gap-3 transition-all duration-200 text-black"
                    >
                        <BookOpen className="w-4 h-4" />
                        My Booking
                    </Link>
                    <div className="pt-4 border-t border-slate-200 mt-4">
                        <div className="grid grid-cols-2 gap-4">
                            <Link href="/login">
                                <Button variant="secondary" className="rounded-xl w-full text-black ">
                                    Login
                                </Button>
                            </Link>

                            <Link href="/register">
                                <Button color="primary" className="rounded-xl w-full">
                                    Registration Free
                                </Button>
                            </Link>
                        </div>

                        <div className="flex flex-col gap-2 mt-4">
                            <p className="px-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                Account
                            </p>

                            <button className="block w-full text-left px-4 py-3 text-base font-medium text-red-500 hover:bg-red-50 hover:translate-x-1 transition-all duration-200 rounded-xl">
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}