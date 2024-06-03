import Header from '../../components/Header/Header'
import HomeCard from '../../components/HomeCard/HomeCard'
import imgChart from '../../assets/icon-chat.webp'
import imgMoney from '../../assets/icon-money.webp'
import imgSecurity from '../../assets/icon-security.webp'
import Footer from '../../components/Footer/Footer'

function Home() {
    return (
        <div className='react-div'>
            <Header />
            <main>
                <div className="hero">
                    <section className="hero-content">
                        <h2 className="sr-only">Promoted Content</h2>
                        <p className="subtitle">No fees.</p>
                        <p className="subtitle">No minimum deposit.</p>
                        <p className="subtitle">High interest rates.</p>
                        <p className="text">Open a savings account with Argent Bank today!</p>
                    </section>
                </div>
                <section class="features">
                    <HomeCard img={imgChart} title={"You are our #1 priority"} description={"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."}/>
                    <HomeCard img={imgMoney} title={"More savings means higher rates"} description={"The more you save with us, the higher your interest rate will be!"}/>
                    <HomeCard img={imgSecurity} title={"Security you can trust"} description={"We use top of the line encryption to make sure your data and moneyis always safe."}/>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Home