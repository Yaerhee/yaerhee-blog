import Link from "next/link";
import {useRouter} from "next/router";
import Image from 'next/image'
import React, {useEffect, useState} from "react";

const GITHUB = 'GITHUB'

const siteMap = [
    { href: '/', name: 'HOME' },
    { href: '/about', name: 'ABOUT' },
    { href: '/posts', name: 'POSTS' },
    { href: 'https://github.com/yaerhee', name: GITHUB },
]

const classNames = (...classes: string[]) => {
    // merge classNames with spread operator
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const router = useRouter()

    const [theme, setTheme] = useState<'dark' | 'light'>('dark')
    const HandleTheme = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        document.documentElement.classList.toggle('dark')
    }

    useEffect(() => {
        document.body.dataset.theme = theme
        window.localStorage.setItem('theme', theme)
    }, [theme])

    const setIconPerEachTheme = () => {
        const characterName = theme === 'dark' ? 'Waddle' : 'Kirby'
        return (
            <Image
                className="h-8 w-8 rounded-full"
                src={`/${characterName}.png`}
                width="256" height="256"
                priority={true}
                alt={`${characterName}`}
            />
        )
    }

    return (
        <>
            <nav className="sticky top-0 w-full">
                <div className="w-1/2 mx-auto sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {siteMap.map((item, index) => {
                                        return (
                                            <Link
                                                key={index}
                                                href={item.href}
                                                className={classNames(
                                                    item.href === router.pathname ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-700 hover:text-white',
                                                    'px-3 py-2 rounded-md text-sm font-medium transition ease-in-out delay-80'
                                                )}
                                            target={item.name === GITHUB ? '_blank' : ''}>
                                                {item.name}
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <div className="relative ml-3">
                                <div className="cursor-pointer" onClick={e => HandleTheme(e)}>
                                    {setIconPerEachTheme()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}