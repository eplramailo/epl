import React from 'react'
import styles from '../styles/Register.module.scss'

export default function Register() {
    return (
        <div>
        <div className={styles.register}>
            <h2>Register form for Epl ramailo league</h2>



            <div className={styles.contactform}>
            
   
            <form >
                 
                        <div >
                            <input type="text"  placeholder="First Name" name="name" required minLength='2' maxLength='20'/>
                            <input type="text"  placeholder="First Name" name="name" required minLength='2' maxLength='20'/>
                        </div>
                        <div >
                            <input type="text" placeholder="Phone No"  required minLength='8' maxLength='14'/>
                            <input type="text" placeholder="Phone No"  required minLength='8' maxLength='14'/>
                        </div>
                        <div >
                            <input type="text"  placeholder="Country" name="subject" minLength='2' maxLength='40'/>
                            <input type="text"  placeholder="District" name="subject" minLength='2' maxLength='40'/>
                         
                    
                        </div>
                        <div>
                            <p>File for ...</p>
                        <input type="file"   id='file-inp'/>
                         
                           
                         </div>

                     
                 


                        <div>
                          <button type='submit' >Submit</button><br/>

                        </div>
                   
                </form>
                </div>









        </div>
        </div>
    )
}
