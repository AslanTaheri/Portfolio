import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import NumberedBlock from "../NumberedBlock";
const Footer = () => {
  return (
    <div className="container mx-auto mt-6 grid gap-16 p-6">
      <footer className="justify-left z-50 flex flex-col space-y-2 p-2  text-sm leading-6 sm:w-1/2 ">
        <p className="">
          Designed in <b>Figma</b>. Coded by Aslan in the Land of Narnia by
          <b> VS Code. </b>Built with <b>Typescript</b> in <b>React</b> and
          styled with <b>Tailwind</b>. Deployed on the last day of summer 2023
          with
          <b> Netlify</b>.
        </p>
        <p> </p>
      </footer>
    </div>
  );
};

export default Footer;
