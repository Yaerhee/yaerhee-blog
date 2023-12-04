import Link from "next/link";
import {useRouter} from "next/router";
import Image from 'next/image'
import React, {useEffect, useState} from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const GITHUB = 'Github'

const siteMap = [
    { href: '/', name: 'Home' },
    { href: '/about', name: 'About' },
    // { href: '/posts', name: 'Posts' },
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
            {/* todo: dark mode compatible */}
            <Flex w="full" position="sticky" top={0} zIndex={1000} bgColor="white" shadow="base">
                <Flex w="50%" px={8} mx="auto">
                    <Flex h={16} alignItems="center">
                        <Flex flex={1} alignItems="center" justifyContent="space-between">
                            <Flex gap={16}>
                              {siteMap.map((item, index) => {
                                return (
                                  <Link
                                    key={index}
                                    href={item.href}
                                    className={classNames(
                                      item.href === router.pathname ? 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600'
                                        : 'hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600',
                                      'px-3 py-2 rounded-md text-md font-medium transition ease-in-out delay-80'
                                    )}
                                    target={item.name === GITHUB ? '_blank' : ''}>
                                    <Text color="black">
                                      {item.name}
                                    </Text>
                                  </Link>
                                )
                              })}
                            </Flex>
                        </Flex>
                        <Flex pos="absolute" insetY={0} right={0} alignItems="center" pr={2}>
                          <Box ml={3}>
                            <Box className="icon-effect" onClick={e => HandleTheme(e)}>
                              {setIconPerEachTheme()}
                            </Box>
                          </Box>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}
