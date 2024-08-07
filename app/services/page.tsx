import Necessity from "@/components/home/createNecessity";
import Footer from "@/components/home/footer";
import Header from "@/components/home/header";
import Solutions from "@/components/home/solutions";
import { Country } from "react-phone-number-input";
import { headers } from "next/headers";

const headersList = headers();
const countryCode: Country =
    (headersList.get("cf-ipcountry") as Country) ?? "BR";

export default function Services() {

    return (
        <>
            <Header />
            <Solutions />
            <Necessity countryCode={countryCode} />
            <Footer />
        </>
    )
}