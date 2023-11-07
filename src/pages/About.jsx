import ClientReview from "../compoments/ClientReview/ClientReview";
import OurCompany from "../compoments/OurCompany/OurCompany";
import PageTitle from "../compoments/PageTitle/PageTitle";
import TeamMember from "../compoments/TeamMember/TeamMember";
import WhyChooseUs from "../compoments/WhyChooseUs/WhyChooseUs";

const About = () => {
    return (
        <>
            <PageTitle title="About Us" />
            <OurCompany />
            <TeamMember />
            <WhyChooseUs />
            <ClientReview />

        </>
    );
};

export default About;