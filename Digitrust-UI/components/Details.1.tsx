import { useEffect, useState } from "react";

export default function Details() {
    // Call Api
    const [dataDetails, setDataDetails] = useState([]);

    useEffect(() => {
        const fetchDataDetails = async () => {
            // Api Default
            const response = await fetch(
                "https://dgt-dev.vercel.app/v1/vault_detail?vault_id=dgt1&fbclid=IwAR1Z7yE9yIjhcbPds_6_CSr-R487BHzqDiy4SufmyRmozuLmXnN2SJp_S94",
            );
            const data = await response.json();

            setDataDetails(data);
        };

        fetchDataDetails();
    }, []);
    // End call api
    return (
        <main>
            <section className="bg-blue-50">
                <div className="container mx-auto">
                    <div className="flex items-center gap-x-6">
                    </div>
                </div>
            </section>
        </main>
    );
}
