'use client';
import { useEffect, useState } from "react";
import Image from "next/image"
import Link from "next/link";
import bg from "./backgrounds/footer-bg.svg"
import DiscordIcon from "./icons/discord";
import GithubIcon from "./icons/github";
import StickerFooter from "./icons/sticker-footer";
import { Contributor } from "../types/contribuitors.types";


function Footer() {
    const [collaborators, setCollaborators] = useState<Contributor[]>([] as Contributor[]);

    const fetchCollaborators = async (): Promise<void> => {
        const front = await fetch(process.env.NEXT_PUBLIC_GITHUB_URL_FRONT as string);
        const back = await fetch(process.env.NEXT_PUBLIC_GITHUB_URL_BACK as string);
        const data1 = await front.json();
        const data2 = await back.json();
        setCollaborators([...data1, ...data2]);
    }

    useEffect(() => {
        fetchCollaborators();
    }, []);

    return (
        <footer className="relative w- h-auto">
            <div className="absolute inset-0 grid gird grid-rows-fr-auto [&>div]:px-6">
                <div className="flex justify-around items-end h-full pb-16">
                    <div className="relative">
                        <span className="leading-[0.85] text-[9.3rem] text-brand-yellow font-[900] font-monserrat">
                            Contri<br />
                            buido<br />
                            res
                        </span>
                        <div className="absolute flex flex-row flex-wrap">
        {/*                     {collaborators.map((contributor: Contributor, index: number) => {
                                return (
                                    <div key={`${contributor.id}-${index}`}>
                                        <span>{contributor.login}</span>
                                        <Image src={contributor.avatar_url}
                                            alt={contributor.login}
                                            width={72}
                                            height={72}
                                            className="rounded-full"
                                        />
                                    </div>
                                )
                            })} */}
                        </div>
                    </div>
                    <div>
                        <StickerFooter className="w-[396px]" />
                    </div>
                </div>
                <div className="flex justify-between items-center border-solid border-t border-[#FFFFFF1A]">
                    <div className="flex flex-row justify-center items-center gap-3">
                        <Link href="#">
                            <GithubIcon className="w-[28px]" fill="white" />
                        </Link>
                        <Link href="#">
                            <DiscordIcon className="w-[28px]" />
                        </Link>
                    </div>
                    <div className="flex flex-row gap-4 [&>a]:text-white hover:[&>a]:underline font-jet-brains">
                        <Link href="#">
                            Contribuir
                        </Link>
                        <Link href="#">
                            Contacto
                        </Link>
                        <Link href="#">
                            FAQs
                        </Link>
                        <Link href="#">
                            Privacy Policy
                        </Link>
                        <span className="text-white">
                            © {new Date().getFullYear()}
                        </span>
                        <button className="bg-[none] outline-none cursor-pointer">
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0.745117L16 14.7451H0L8 0.745117Z" fill="#F7F1F9" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full overflow-hidden">
                <Image src={bg} alt="background" height={939} className="w-full min-w-max" priority />
            </div>
        </footer>
    )
}

export default Footer;