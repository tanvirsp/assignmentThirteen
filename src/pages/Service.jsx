import BannerOne from "../compoments/BannerOne/BannerOne";
import PageTitle from "../compoments/PageTitle/PageTitle";
import PriceTable from "../compoments/PriceTable/PriceTable";
import ServiceBanner from "../compoments/ServiceBanner/ServiceBanner";
import Skills from "../compoments/Skills/Skills";


const Service = () => {
    return (
        <>
            <PageTitle title="Service" />
            <ServiceBanner />
            <PriceTable />
            <Skills />
            <BannerOne />
        </>
    );
};

export default Service;