import About from "@/components/home/about";
import Footer from "@/components/home/footer";
import Header from "@/components/home/header";
import { Country } from "react-phone-number-input";
import { headers } from "next/headers";

const headersList = headers();
const countryCode: Country =
(headersList.get("cf-ipcountry") as Country) ?? "BR";

export default function RegisterPage() {

    return (
        <>
            <Header />
            <About countryCode={countryCode} />
            <Footer />
        </>
    )
}