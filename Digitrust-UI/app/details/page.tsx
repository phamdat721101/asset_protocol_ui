"use client";
import dynamic from "next/dynamic";
import LayoutSecond from "@/components/LayoutSecond";

const Detail = dynamic(() => import("@/components/Details"), { ssr: false });
const MorePools = dynamic(() => import("@/components/MorePools"), {
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
