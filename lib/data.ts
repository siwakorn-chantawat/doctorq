import React from "react"

import image1 from "@/public/hero.png"
import highlight1 from "@/public/oldman1.jpg";

import first from "@/public/doctor q fb post-3.png";
import second from "@/public/doctor q fb post-1_new.jpg";
import third from "@/public/doctor q fb post-2_new.jpg";

import { MdHome } from "react-icons/md"
import { AiTwotoneFund } from "react-icons/ai"
import { FaPhone } from "react-icons/fa6"
import { BsBookFill } from "react-icons/bs";

export const links = [
    {
        name: "หน้าหลัก",
        path: "/",
        icon: React.createElement(MdHome)
    },
    {
        name: "ข้อมูลสุขภาพ",
        path: "/blogs",
        icon: React.createElement(BsBookFill)
    },
    {
        name: "โปรแกรม",
        path: "/program",
        icon: React.createElement(AiTwotoneFund)
    },
    // {
    //     name: "โปรโมชั่น",
    //     path: "/promotion",
    //     icon: React.createElement(IoIosPricetag)
    // },
    {
        name: "ติดต่อเรา",
        path: "/contact",
        icon: React.createElement(FaPhone)
    }
] as const

export const PromotionImagesData = [
    {
        imageURL: first ,
        alt: "carousel image1"
    },
    {
        imageURL: second ,
        alt: "carousel image2"
    },
    {
        imageURL: third ,
        alt: "carousel image3"
    },

] as const

export const hilightCardsData = [
    {
        title: "ถ้าอยากเดินได้เองไปจนแก่ คุณต้องมีฮอร์โมนเพศชายเพียงพอ 🤩",
        description: `✅ ปฎิเสธไม่ได้เลยว่า กล้ามเนื้อเป็นสิ่งสำคัญมาก โดยเฉพาะในคนสูงอายุ
        ✅ กล้ามเนื้อช่วยในเรื่องการ ยืน เดิน ลุก นั่ง
        ทุกอริยาบถในการเคลื่อนไหว 💪💪💪
        ✅ ถ้าคุณมีกล้ามเนื้อที่แข็งแรงเพียงพอ คุณจะทำสิ่งเหล่านี้ได้แบบสบายๆ ไม่ต้องนั่งรถเข็น หรือให้ลูกหลานพยุง
        ✅ กล้ามเนื้อช่วยป้องกันอาการบาดเจ็บโดยเฉพาะบริเวณหลัง และ หัวเข่า 
        ✅ ถ้าคุณมีกล้ามเนื้อที่แข็งแรงพอทั้งข้อเข่าและกระดูกสันหลังจะไม่ต้องรับแรงหนัก เนื่องจากมีกล้ามเนื้อมาคอยซัพพอร์ต 
        ✅ ทำให้อาการข้อเสื่อมและกระดูกสันหลังเสื่อมเกิดช้าลง 
        ✅ กล้ามเนื้อที่มากพอยังช่วยป้องกันโรคที่พบบ่อย เช่น เบาหวาน ความดัน ไขมัน หัวใจ
        ✅ เนื่องจากกล้ามเนื้อช่วยส่งเสริมให้ระบบเผาผลาญเราดีขึ้น 
        การจัดการกับระดับนํ้าตาล และ ไขมันในเลือด 
        ของร่างกาย ก็จะทำได้ดีขึ้นเช่นกัน 
        ✅ ฉะนั้นกล้ามเนื้อจึงสำคัญมากในคนสูงอายุ แต่คนสูงอายุส่วนใหญ่จะสูญเสียกล้ามเนื้อไปรวดเร็วมาก 
        ❌ เนื่องจากระดับฮอร์โมนเพศชายที่ลดลง
        ✅ แต่ถ้าเรามีฮอร์โมนเพศชายในระดับที่ดี ร่วมกับการกินโปรตีนและออกกำลังกายอย่างเพียงพอ
        ✅ คุณก็จะมีกล้ามเนื้อที่มากพอหรือเทียบเท่ากับคนหนุ่มเลยก็เป็นไปได้ เท่านี้คุณจะเดินได้เองไปจนแก่ อย่างไม่ต้องสงสัย`,
        imageURL:{highlight1},
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