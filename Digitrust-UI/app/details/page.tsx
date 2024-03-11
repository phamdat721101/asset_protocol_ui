"use client";
import Layout from "@/components/Layout";
import MorePools from "@/components/MorePools";
import Detail from "@/components/Details";

import { useEffect, useState } from "react";

export default function Details() {
    // const [dataDetails, setDataDetails] = useState([]);

    // useEffect(() => {
    //     const fetchDataDetails = async () => {
    //         // Api Default
    //         // const response = await fetch(
    //         //     "https://dgt-dev.vercel.app/v1/vault_detail?vault_id=dgt1&fbclid=IwAR1Z7yE9yIjhcbPds_6_CSr-R487BHzqDiy4SufmyRmozuLmXnN2SJp_S94",
    //         // );

    //         // Api test
    //         const response = await fetch(
    //             "https://jsonplaceholder.typicode.com/todos?fbclid=IwAR2PUnypMsl3cVJjBolPoguQwQjnjZT1yo2lPJNLo4PdQZ-peEOnGGZPtcs",
    //         );
    //         const data = await response.json();

    //         setDataDetails(data);
    //         // Log dataDetails
    //         console.log(data);
    //     };

    //     fetchDataDetails();
    // }, []);

    return (
        <Layout>
            <div>
                <Detail></Detail>

                {/* <MorePools></MorePools> */}
            </div>
        </Layout>
    );
}
