function Footer() {
    return (
        <footer className="bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-6 d-flex align-items-center">
                        <p>&copy;All Right Reserved</p>
                    </div>
                    <div className="col-6">
                        <ul className="d-flex justify-content-end align-items-center">
                            <li class="list-group-item">
                                <a href="#" className="text-decoration-none fs-5"><i
                                    className="fa-brands fa-facebook-f px-4 py-2 text-white"></i></a>
                            </li>
                            <li class="list-group-item">
                                <a href="#" className="text-decoration-none fs-5"><i
                                    className="fa-brands fa-instagram px-4 py-2 text-white"></i></a>
                            </li>
                            <li class="list-group-item">
                                <a href="#" className="text-decoration-none fs-5"><i
                                    className="fa-brands fa-whatsapp px-4 py-2 text-white"></i></a>
                            </li>
                            <li class="list-group-item"><a href="#"></a></li>
                            <li class="list-group-item"><a href="#"></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=" bg-white text-dark d-flex justify-content-center">
                <p className="m-0">Designed by Bishal kushma</p>
            </div>
        </footer>
    );

}
export default Footer;