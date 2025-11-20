import Banner from "./Banner"

const Home = () => {
    return (
        <>
            <div>
                <Banner />
            </div>
            <div class="home-container">
                <h1 class="home-title">The Heist Begins…</h1>
                <p class="home-dialogue">In this world, you don’t need luck. You need strategy.</p>
                <p class="home-dialogue">We are not just a team… we are a family.</p>
                <p class="home-dialogue">If you don’t take risks… you don’t create history.</p>
            </div>

        </>
    )
}

export default Home;