import React from "react"

import image1 from "@/public/hero.png"
import { MdHome } from "react-icons/md"
import { AiTwotoneFund } from "react-icons/ai"
import { IoIosPricetag } from "react-icons/io"
import { FaPhone } from "react-icons/fa6"

export const links = [
    {
        name: "Home",
        path: "/",
        icon: React.createElement(MdHome)
    },
    {
        name: "Program",
        path: "/program",
        icon: React.createElement(AiTwotoneFund)
    },
    {
        name: "Promotion",
        path: "/promotion",
        icon: React.createElement(IoIosPricetag)
    },
    {
        name: "Contact",
        path: "/contact",
        icon: React.createElement(FaPhone)
    }
] as const

export const carouselImagesData = [
    {
        imageURL: image1 ,
        alt: "carousel image1"
    },
    {
        imageURL: image1 ,
        alt: "carousel image2"
    },
    {
        imageURL: image1 ,
        alt: "carousel image3"
    },
    {
        imageURL: image1 ,
        alt: "carousel image4"
    },
    {
        imageURL: image1 ,
        alt: "carousel image5"
    }

] as const

export const hilightCardsData = [
    {
        title: "",
        description: "",
        imageURL: ""
    }
] as const