import React from "react"

import image1 from "@/public/hero.png"
import highlight1 from "@/public/oldman1.jpg";

import { MdHome } from "react-icons/md"
import { AiTwotoneFund } from "react-icons/ai"
import { IoIosPricetag } from "react-icons/io"
import { FaPhone } from "react-icons/fa6"
import { BsBookFill } from "react-icons/bs";

export const links = [
    {
        name: "Home",
        path: "/",
        icon: React.createElement(MdHome)
    },
    {
        name: "Blogs",
        path: "/blogs",
        icon: React.createElement(BsBookFill)
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
        title: "Test1",
        description: "Doublo S Hifu เทคโนโลยียกกระชับผิว Hifu เทคโนโลยียกกระชับผิวที่มีประสิทธิภาพสูง พร้อมทั้งช่วยป้องกันความหย่อนคล้อยของผิวหนังบริเวณใบหน้า ลำคอ ใต้คาง",
        imageURL: {highlight1},
        id: 1 
    },
    {
        title: "Test2",
        description: "Doublo S Hifu เทคโนโลยียกกระชับผิว Hifu เทคโนโลยียกกระชับผิวที่มีประสิทธิภาพสูง พร้อมทั้งช่วยป้องกันความหย่อนคล้อยของผิวหนังบริเวณใบหน้า ลำคอ ใต้คาง",
        imageURL: {highlight1},
        id: 2 
    },
    {
        title: "Test3 ",
        description: "Doublo S Hifu เทคโนโลยียกกระชับผิว Hifu เทคโนโลยียกกระชับผิวที่มีประสิทธิภาพสูง พร้อมทั้งช่วยป้องกันความหย่อนคล้อยของผิวหนังบริเวณใบหน้า ลำคอ ใต้คาง",
        imageURL: {highlight1},
        id: 3
    },
    {
        title: "Test4",
        description: "Doublo S Hifu เทคโนโลยียกกระชับผิว Hifu เทคโนโลยียกกระชับผิวที่มีประสิทธิภาพสูง พร้อมทั้งช่วยป้องกันความหย่อนคล้อยของผิวหนังบริเวณใบหน้า ลำคอ ใต้คาง",
        imageURL: {highlight1},
        id: 4
    },
] as const