import BannerTwo from "../compoments/BannerTwo/BannerTwo";
import ContactForm from "../compoments/ContactForm/ContactForm";
import ContactNumber from "../compoments/ContactNumber/ContactNumber";
import GoogleMap from "../compoments/GoogleMap/GoogleMap";
import PageTitle from "../compoments/PageTitle/PageTitle";

const Contact = () => {
    return (
        <>
            <PageTitle title="Contact" />
            <GoogleMap />
            <ContactNumber />
            <ContactForm />
            <BannerTwo />
        </>
    );
};

export default Contact;