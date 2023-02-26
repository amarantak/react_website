import './Contact.css';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';

export default function Contact(){
    
    let para = "Have questions? Shoot us an Email.";
    return (
        <div class="contact-container">
            <Header heading="/ Contact us" text={para}/>
            <ContactForm />
        </div>
     
    )

};

