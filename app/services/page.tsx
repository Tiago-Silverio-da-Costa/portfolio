import Necessity from "@/components/home/promoteServices";
import Footer from "@/components/home/footer";
import Header from "@/components/home/header";
import Solutions from "@/components/home/solutions";
import { Country } from "react-phone-number-input";
import { headers } from "next/headers";


export default function Services() {
    const headersList = headers();
    const countryCode: Country =
        (headersList.get("cf-ipcountry") as Country) ?? "BR";

    return (
        <>
            <Header />
            <Solutions />
            <Necessity countryCode={countryCode} />
            <Footer />
        </>
    )
}