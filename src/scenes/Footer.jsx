import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
    return(
        <footer className="h-65 bg-green py-10">
            <div className="w-5/6 mx-auto">
                <SocialMediaIcons/>
                <div className="md:flex justify-center md:justify-between text-center">
                <p className="font-dmserifdisplay font-semibold text-2xl text-deep-blue"> Kelly Phan </p>
                <p className="font-dmserifdisplay text-md text-deep-blue"> @2023 Phan. All Rights Reserved. </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;