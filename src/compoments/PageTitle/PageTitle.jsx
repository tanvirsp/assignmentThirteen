import "./PageTitle.css"



// eslint-disable-next-line react/prop-types
const PageTitle = ({title}) => {
    return (
        <section className="page-title">
            <h2>{title}</h2>
        </section>
    );
};

export default PageTitle;