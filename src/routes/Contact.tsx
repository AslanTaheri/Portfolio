import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import NumberedBlock from "../components/NumberedBlock";
const Contact = () => {
  return (
    <div className="container mx-auto mt-6 grid gap-16 p-6">
      <div className="flex flex-col space-y-2 rounded-2xl border p-2 leading-6 shadow-sm backdrop-blur-xl">
        <NumberedBlock>
          <h2 className="">
            My inbox is always open. Please reach out for inquiries,
            collaborations, or opportunities:
          </h2>
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="px-2 font-bold">aslan.taheri@gmail.com</span>
        </NumberedBlock>
        <section className="space-x-6 py-2 text-center">
          <a
            href={"https://github.com/AslanTaheri"}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative ml-4 inline-block"
          >
            <FontAwesomeIcon icon={faGithub} size="2xl" />
          </a>
          <a
            href={"https://www.linkedin.com/in/aslantaheri"}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative ml-4 inline-block"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </a>
        </section>
      </div>
    </div>
  );
};

export default Contact;
