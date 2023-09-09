import Image from "next/image"

const Portfolio = () => {
    return (
        <>
            <div className="portfolio" id="portfolio">
                <div className="container">
                    <div className="section-title">
                        <h2>Portfolio</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li data-filter="*" className="filter-active">All</li>
                                <li data-filter=".filter-app">App</li>
                                <li data-filter=".filter-card">Card</li>
                                <li data-filter=".filter-web">Web</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row portfolio-container">
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <Image width={ 500 } height={ 500 } src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>App 1</h4>
                                    <p>App</p>
                                    <div className="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <Image width={ 500 } height={ 500 } src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Web 3</h4>
                                    <p>Web</p>
                                    <div className="portfolio-links">
                                        <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                                        <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <Image width={ 500 } height={ 500 } src="" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>App 2</h4>
                                    <p>App</p>
                                    <div className="portfolio-links">
                                        <a href="" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                                        <a href="" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <Image width={ 500 } height={ 500 } src="" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Card 2</h4>
                                    <p>Card</p>
                                    <div className="portfolio-links">
                                        <a href="" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
                                        <a href="" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <Image width={ 500 } height={ 500 } src="" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Web 2</h4>
                                    <p>Web</p>
                                    <div className="portfolio-links">
                                        <a href="" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
                                        <a href="" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <Image width={ 500 } height={ 500 } src="" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>App 3</h4>
                                    <p>App</p>
                                    <div className="portfolio-links">
                                        <a href="" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                                        <a href="" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <Image width={ 500 } height={ 500 } src="" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Card 1</h4>
                                    <p>Card</p>
                                    <div className="portfolio-links">
                                        <a href="" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus"></i></a>
                                        <a href="" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                            <div className="portfolio-wrap">
                                <Image width={ 500 } height={ 500 } src="" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Card 3</h4>
                                    <p>Card</p>
                                    <div className="portfolio-links">
                                        <a href="" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus"></i></a>
                                        <a href="" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <Image src="" width={ 500 } height={ 500 } className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Web 1</h4>
                                    <p>Web</p>
                                    <div className="portfolio-links">
                                        <a href="" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 1"><i className="bx bx-plus"></i></a>
                                        <a href="" title="More Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>{/* End Portfolio Section */ }

        </>
    )
}

export default Portfolio

// ( function () {
//     [...document.querySelectorAll(".control")].forEach(button => {
//         button.addEventListener("click", function() {
//             document.querySelector(".active-btn").classList.remove("active-btn")
//             this.classList.add("active-btn");
//             document.querySelector(".active").classList.remove("active");
//             document.getElementById(button.dataset.id).classList.add("active");
//         })
//     });
//     document.querySelector(".theme-btn").addEventListener("click", () => {
//         document.body.classList.toggle("light-mode");
//     })
// })();
