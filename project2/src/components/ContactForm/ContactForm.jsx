import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import {FaPhoneAlt} from "react-icons/fa"

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            icon={<MdMessage fontSize="24px" />}
            text="VIA SUPPORT CHAT"
          />
          <Button 
          icon={<FaPhoneAlt fontSize="24px" />} text="hello"></Button>
        </div>
      </div>
      <div className={styles.contact_image}></div>
    </section>
  );
};

export default ContactForm;
