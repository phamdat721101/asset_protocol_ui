"use client";
import dynamic from 'next/dynamic';

const ApexChart = dynamic(() => import("./ApexChartjs"), {ssr: false})

export default function ApexChartjs() {
    return (
        <div>
            <ApexChart/>
        </div>
    );
}
