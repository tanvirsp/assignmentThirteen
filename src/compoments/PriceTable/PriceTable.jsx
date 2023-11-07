import './PriceTable.css';

const PriceTable = () => {
    return (
        <section className="price-section" >
            <div className="container">
                <div className='price-card-grid'>
                    <div className='price-card-item'>
                        <h6>HOURLEY BASIS</h6> 
                        <h3>25$ <span>Hour</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iusto ea nobis culpa quaerat voluptate.</p>
                        <button>Contact</button> 
                    </div>
                    <div className='price-card-item'>
                        <h6>FREELANCER</h6> 
                        <h3>259$ <span>Week</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iusto ea nobis culpa quaerat voluptate.</p>
                        <button>Contact</button> 
                    </div>
                    <div className='price-card-item'>
                        <h6>FULL TIME</h6> 
                        <h3>1,250$ <span>Month</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iusto ea nobis culpa quaerat voluptate.</p>
                        <button>Contact</button> 
                    </div>



                </div>
            </div>
            
        </section>
    );
};

export default PriceTable;