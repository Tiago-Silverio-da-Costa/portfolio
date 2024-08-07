import About from "@/components/home/about";
import Footer from "@/components/home/footer";
import Header from "@/components/home/header";
import { Country } from "react-phone-number-input";
import { headers } from "next/headers";


export default function RegisterPage() {
    const headersList = headers();
    const countryCode: Country =
        (headersList.get("cf-ipcountry") as Country) ?? "BR";

    return (
        <>
            <Header />
            <About countryCode={countryCode} />
            <Footer />
        </>
    )
}