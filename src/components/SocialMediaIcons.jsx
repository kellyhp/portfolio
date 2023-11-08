
const SocialMediaIcons = () => {
    return(
        <div className="flex justify-center md:justify-start my-10 gap-7 bg-gradient-rainblue px-5 py-3 rounded-lg w-fit">
            <a
            className="hover:opacity-50 transition duration-500"
            href = "https://www.linkedin.com/in/kellyphan03/"
            target="_blank"
            rel="noreferrer"
            >
                <img alt="linkedin-link" src={require("../assets/linkedin.png")}/>
            </a>
            <a
            className="hover:opacity-50 transition duration-500"
            href = "https://github.com/kellyhp"
            target="_blank"
            rel="noreferrer"
            >
                <img alt="github-link" src={require("../assets/github.png")}/>
            </a>
            <a
            className="hover:opacity-50 transition duration-500"
            href = "https://www.instagram.com/kelly_saucy/"
            target="_blank"
            rel="noreferrer"
            >
                <img alt="instagram-link" src={require("../assets/instagram.png")}/>
            </a>
        </div>
    )

}
export default SocialMediaIcons