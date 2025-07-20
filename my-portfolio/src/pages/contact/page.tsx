import React from 'react'
import styles from './styles.module.css'

const Contact = () => {
  return (
    <>
    <h3 style={{textAlign: 'center', fontSize: '30px', color:'white', marginTop: '200px'}}>Contact</h3>
   <section className={styles.contactContainer}>
    
    <div className={styles.formContainer}>
        <form action="" method='post' className={styles.theForm}>
            <div className={styles.formSection}>
                <label htmlFor='name'>Name</label>
                <input style={{width: '90%'}} type="text" id='name' name='name' placeholder='Your name here...' required/>
            </div>
             <div className={styles.formSection}>
                <label htmlFor='email'>Email</label>
                <input style={{width: '90%'}} type="text" id='email' name='email' placeholder='Your email here...' required/>
            </div>
             <div className={styles.formSection}>
                <label htmlFor='message'>Message</label>
                <textarea id="message" name="message" placeholder="Your message here..." required rows={5} 
                style={{
                  width: '90%',
                  padding: '12px',
                  fontSize: '16px',
                  lineHeight: '1.4',
                  boxSizing: 'border-box',
                  resize: 'none' 
                }}
                ></textarea>
            </div>
            <input style={{alignSelf: 'center', border: 'solid 1px #ccc', marginTop: '10px', width: '100px'}} type='submit' value='Submit'/>
        </form>
    </div>
    <div className={styles.infoContainer}>
        <div className={styles.contactSection}>
        <p>VART DU BOR STOCKHOLM</p>
        </div>

         <div className={styles.contactSection}>
            <p>SOCIALS</p>
        </div>

         <div className={styles.contactSection}>
            <p>EV NÅ EXTRA</p>
        </div>
    </div>
   </section>
   </>
  )
}

export default Contact