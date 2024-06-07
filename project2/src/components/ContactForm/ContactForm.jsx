import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

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
          icon={<FaPhoneAlt fontSize="24px" />} 
          text="hello" />
        </div>
        <Button
          isOutline={true}
          icon={<HiMail fontSize="24px" />} 
          text="VIA EMAIL FORM" />

      <form>
        <div className={styles.form_control}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name"/>
        </div>

        <div className={styles.form_control}>
          <label htmlFor="name">Email</label>
          <input type="text" name="email" />
        </div>

        <div className={styles.form_control}>
          <label htmlFor="name">Text</label>
          <textarea name="text" id="text" rows="8"></textarea>
        </div>

        <div className={styles.submit_button}>
          <Button text="VIA SUPPORT CHAT"/>
        </div>

      </form>
      </div>


      <div className={styles.contact_image}>
        <img src="../../../public/images/Service 24_7-pana 1.png" alt="form_image" />
      </div>
    </section>
  );
};

export default ContactForm;
