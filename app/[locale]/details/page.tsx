"use client";
import dynamic from "next/dynamic";
import LayoutSecond from "@/components/Details/LayoutSecond";

const Detail = dynamic(() => import("@/components/Details/Details"), { ssr: false });
const MorePools = dynamic(() => import("@/components/Details/MorePools"), {
    ssr: false,
});

export default function Details() {
    return (
        <LayoutSecond>
            <Detail></Detail>
            <MorePools></MorePools>
        </LayoutSecond>
    );
}
