import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      ©2023 Lamamia. All rights reserved.
      <div className={styles.social}>
        <Image src="/1.png"  height={15} width={15} className={styles.icon}  alt="Namma facebook" />
        <Image src="/2.png"  height={15} width={15} className={styles.icon} alt="Namma instagram" />
        <Image src="/3.png"  height={15} width={15} className={styles.icon} alt="Namma twitter" />
        <Image src="/4.png"  height={15} width={15} className={styles.icon} alt="Namma youtube" />
      </div>
    </div>
  );
}

export default Footer;
