import Author from "../compoments/Author/Author";
import BlogCategory from "../compoments/BlogCategory/BlogCategory";
import BlogSection from "../compoments/BlogSection/BlogSection";
import PageTitle from "../compoments/PageTitle/PageTitle";
import RecentPost from "../compoments/RecentPost/RecentPost";




const Blog = () => {
   

    


    return (
        <div>
            <PageTitle title="Blog" />
            <div className="container">
                <div className="blog-grid">
                    <section>
                        <BlogSection />

                    </section>
                    <aside>
                        <Author />
                        <BlogCategory />
                        <RecentPost />
                        

                    </aside>
                </div>
            </div>
            
            
        </div>
    );
};

export default Blog;