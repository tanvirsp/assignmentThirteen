import BigText from "../compoments/BigText/BigText";
import Count from "../compoments/Count/Count";
import HireMe from "../compoments/HireMe/HireMe";
import PageTitle from "../compoments/PageTitle/PageTitle";
import RecentWork from "../compoments/RecentWork/RecentWork";


const Project = () => {
    return (
        <>
            <PageTitle title="Project" />
            <RecentWork />
            <BigText />
            <Count />
            <HireMe />
        </>
    );
};

export default Project;