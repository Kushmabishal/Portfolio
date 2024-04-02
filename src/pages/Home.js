const Home = () => {
    return (
        <>
            <section id="intro-section">
                <div className="container">
                    <div className="row d-flex justify-content-end">
                        <div className="col-lg-8 col-sm-12">
                            <div id="intro" className="d-flex flex-column align-items-end justify-content-center text-white">
                                <h4 className="fs-5">Hey, I'am Bishal kushma</h4>
                                <p className="py-3 fs-1">I enjoy designing tech website and digital
                                    products</p>
                                <button className="btn btn-contact" type="button"
                                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                                    aria-controls="offcanvasRight">CONTACT ME</button>

                                <div className="offcanvas offcanvas-end opacity-75" tabindex="-1" id="offcanvasRight"
                                    aria-labelledby="offcanvasRightLabel">
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title" id="offcanvasRightLabel">CONTACT ME</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body px-4">
                                        <div className="profile d-flex justify-content-center">
                                            <img src="Sketch-18-13-34-2-22-2024.jpg" height="auto" width="100"
                                                alt="profile" className="img-fluid rounded-circle" />
                                        </div>
                                        <div className="directcontact d-flex flex-column pt-4 pb-2">
                                            <a href="tel:9800588537" className="text-decoration-none fs-6"><i
                                                className="fa-solid fa-phone px-2 py-2"></i>9800588537</a>
                                            <a href="mailto:kushmabishal537@gmail.com"
                                                className="text-decoration-none fs-6"><i
                                                    className="fa-regular fa-envelope px-2 py-2"></i>kushmabishal537@gmail.com</a>
                                        </div>
                                        <div className="socialmedialink d-flex flex-column py-2">
                                            <a href="#" className="text-decoration-none fs-6"><i
                                                className="fa-brands fa-facebook-f px-2 py-2"></i>Facebook</a>
                                            <a href="#" className="text-decoration-none fs-6"><i
                                                className="fa-brands fa-instagram px-2 py-2"></i>Instagram</a>
                                            <a href="#" className="text-decoration-none fs-6 "><i
                                                className="fa-brands fa-whatsapp px-2 py-2"></i>Whatsapp</a>
                                        </div>
                                        <div className="message py-2">
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                                    placeholder="Enter yourname" />
                                            </div>
                                            <div className="mb-3">
                                                <label for="exampleFormControlInput1" className="form-label">Email
                                                    address</label>
                                                <input type="email" className="form-control" id="exampleFormControlInput1"
                                                    placeholder="name@example.com" />
                                            </div>
                                            <div class="form-floating mb-3">
                                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                                <label for="floatingTextarea">Comments</label>
                                            </div>
                                            <button type="button" class="btn btn-outline-secondary">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;