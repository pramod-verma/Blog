import Image from "next/image";
import React from "react";
import styles from './page.module.css' 
import Button from "@/components/Button/Button";
export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's keep in touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="contact image"
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input}/>
          <input type="text" placeholder="Email" className={styles.input}/>
          <textarea className={styles.textArea} placeholder="Message" cols="30" rows="10"></textarea>
          <Button url="#" text="send"/>
        </form>
      </div>
    </div>
  );
}
