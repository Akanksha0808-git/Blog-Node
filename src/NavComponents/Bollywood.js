import React, { useContext } from 'react'
import { Store } from '../ContextAPI/DataStore'
import LatestArticle from '../GenericComponents/LatestArticle';
import Advert from '../GenericComponents/Advert';
import TopPost from '../GenericComponents/TopPost';
import Footer from '../GenericComponents/Footer';
function Bollywood() {
    const [BollyData] = useContext(Store);

    return (
        <>

            <div className="TheLatest Section_Contanier">

                {/* This is Latest Articles Contanier  */}

                <div className="left_contanier" >
                    <h2>
                        Bollywood
                        <hr style={{ width: "120px", height: "3px", background: "red", border: "none", outline: "none", borderRadius: "5px", position: "absolute" }} />
                    </h2>
                    {
                        BollyData.filter((data) => data.id % 3 === 0 && data.category === 'Bollywood').map((item, index) => {
                            return (
                                <LatestArticle key={index}
                                    Heading={item.heading.slice(0, 50)}
                                    id={item.id} image={item.image} Category={item.category} description={item.description.slice(0, 100)} />
                            )
                        })
                    }
                </div>


                {/* This is Top Post Container  */}
                <div className="rightContanier" >

                    <h2>
                        Top Posts
                        <hr style={{ width: "100px", height: "3px", background: "red", border: "none", outline: "none", borderRadius: "5px", position: "absolute" }} />
                    </h2>

                    {
                        BollyData.filter((data) => data.id % 4 === 0 && data.category === 'Bollywood').map((item, index) => {
                            return (
                                <TopPost key={index}
                                    Heading={item.heading.slice(0, 78)}
                                    id={item.id}
                                    image={item.image}
                                    Category={item.category}
                                    description={item.description.slice(0, 80)}
                                    index={index} />
                            )
                        })
                    }

                    <Advert embedId="rokGy0huYEA" />
                </div>
            </div>
            <Footer />
        </>
    )
};
export default Bollywood;