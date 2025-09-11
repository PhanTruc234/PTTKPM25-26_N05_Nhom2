@extends('Layout.userLayout')
@section('content')

    <body>
        <!-- Single Page Header start -->
        <div class="container-fluid page-header py-5">
            <h1 class="text-center text-white display-6 wow fadeInUp" data-wow-delay="0.1s">Shop Page</h1>
            <ol class="breadcrumb justify-content-center mb-0 wow fadeInUp" data-wow-delay="0.3s">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Pages</a></li>
                <li class="breadcrumb-item active text-white">Shop</li>
            </ol>
        </div>
        <!-- Single Page Header End -->

        <!-- Searvices Start -->
        <div class="container-fluid px-0">
            <div class="row g-0">
                <div class="col-6 col-md-4 col-lg-2 border-start border-end wow fadeInUp" data-wow-delay="0.1s">
                    <div class="p-4">
                        <div class="d-inline-flex align-items-center">
                            <i class="fa fa-sync-alt fa-2x text-primary"></i>
                            <div class="ms-4">
                                <h6 class="text-uppercase mb-2">Free Return</h6>
                                <p class="mb-0">30 days money back guarantee!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-4 col-lg-2 border-end wow fadeInUp" data-wow-delay="0.2s">
                    <div class="p-4">
                        <div class="d-flex align-items-center">
                            <i class="fab fa-telegram-plane fa-2x text-primary"></i>
                            <div class="ms-4">
                                <h6 class="text-uppercase mb-2">Free Shipping</h6>
                                <p class="mb-0">Free shipping on all order</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-4 col-lg-2 border-end wow fadeInUp" data-wow-delay="0.3s">
                    <div class="p-4">
                        <div class="d-flex align-items-center">
                            <i class="fas fa-life-ring fa-2x text-primary"></i>
                            <div class="ms-4">
                                <h6 class="text-uppercase mb-2">Support 24/7</h6>
                                <p class="mb-0">We support online 24 hrs a day</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-4 col-lg-2 border-end wow fadeInUp" data-wow-delay="0.4s">
                    <div class="p-4">
                        <div class="d-flex align-items-center">
                            <i class="fas fa-credit-card fa-2x text-primary"></i>
                            <div class="ms-4">
                                <h6 class="text-uppercase mb-2">Receive Gift Card</h6>
                                <p class="mb-0">Recieve gift all over oder $50</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-4 col-lg-2 border-end wow fadeInUp" data-wow-delay="0.5s">
                    <div class="p-4">
                        <div class="d-flex align-items-center">
                            <i class="fas fa-lock fa-2x text-primary"></i>
                            <div class="ms-4">
                                <h6 class="text-uppercase mb-2">Secure Payment</h6>
                                <p class="mb-0">We Value Your Security</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-4 col-lg-2 border-end wow fadeInUp" data-wow-delay="0.6s">
                    <div class="p-4">
                        <div class="d-flex align-items-center">
                            <i class="fas fa-blog fa-2x text-primary"></i>
                            <div class="ms-4">
                                <h6 class="text-uppercase mb-2">Online Service</h6>
                                <p class="mb-0">Free return products in 30 days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Searvices End -->


        <!-- Products Offer Start -->
        <div class="container-fluid bg-light py-5">
            <div class="container">
                <div class="row g-4">
                    <div class="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
                        <a href="#"
                            class="d-flex align-items-center justify-content-between border bg-white rounded p-4">
                            <div>
                                <p class="text-muted mb-3">Find The Best Camera for You!</p>
                                <h3 class="text-primary">Smart Camera</h3>
                                <h1 class="display-3 text-secondary mb-0">40% <span
                                        class="text-primary fw-normal">Off</span></h1>
                            </div>
                            <img src="img/product-1.png" class="img-fluid" alt="">
                        </a>
                    </div>
                    <div class="col-lg-6 wow fadeInRight" data-wow-delay="0.3s">
                        <a href="#"
                            class="d-flex align-items-center justify-content-between border bg-white rounded p-4">
                            <div>
                                <p class="text-muted mb-3">Find The Best Whatches for You!</p>
                                <h3 class="text-primary">Smart Whatch</h3>
                                <h1 class="display-3 text-secondary mb-0">20% <span
                                        class="text-primary fw-normal">Off</span></h1>
                            </div>
                            <img src="img/product-2.png" class="img-fluid" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Products Offer End -->


        <!-- Shop Page Start -->
        <div class="container-fluid shop py-5">
            <div class="container py-5">
                <div class="row g-4">
                    <div class="col-lg-3 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="product-categories mb-4">
                            <h4>Products Categories</h4>
                            <ul class="list-unstyled">
                                <li>
                                    <div class="categories-item">
                                        <a href="#" class="text-dark"><i
                                                class="fas fa-apple-alt text-secondary me-2"></i>
                                            Accessories</a>
                                        <span>(3)</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="categories-item">
                                        <a href="#" class="text-dark"><i
                                                class="fas fa-apple-alt text-secondary me-2"></i>
                                            Electronics & Computer</a>
                                        <span>(5)</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="categories-item">
                                        <a href="#" class="text-dark"><i
                                                class="fas fa-apple-alt text-secondary me-2"></i>Laptops & Desktops</a>
                                        <span>(2)</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="categories-item">
                                        <a href="#" class="text-dark"><i
                                                class="fas fa-apple-alt text-secondary me-2"></i>Mobiles & Tablets</a>
                                        <span>(8)</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="categories-item">
                                        <a href="#" class="text-dark"><i
                                                class="fas fa-apple-alt text-secondary me-2"></i>SmartPhone & Smart TV</a>
                                        <span>(5)</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="price mb-4">
                            <h4 class="mb-2">Price</h4>
                            <input type="range" class="form-range w-100" id="rangeInput" name="rangeInput"
                                min="0" max="500" value="0" oninput="amount.value=rangeInput.value">
                            <output id="amount" name="amount" min-velue="0" max-value="500"
                                for="rangeInput">0</output>
                            <div class=""></div>
                        </div>
                        <div class="product-color mb-3">
                            <h4>Select By Color</h4>
                            <ul class="list-unstyled">
                                <li>
                                    <div class="product-color-item">
                                        <a href="#" class="text-dark"><i
                                                class="fas fa-apple-alt text-secondary me-2"></i>
                                            Gold</a>
                                        <span>(1)</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="product-color-item">
                                        <a href="#" class="text-dark"><i
                                                class="fas fa-apple-alt text-secondary me-2"></i>
                                            Green</a>
                                        <span>(1)</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="product-color-item">
                                        <a href="#" class="text-dark"><i
                                                class="fas fa-apple-alt text-secondary me-2"></i>
                                            White</a>
                                        <span>(1)</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="additional-product mb-4">
                            <h4>Additional Products</h4>
                            <div class="additional-product-item">
                                <input type="radio" class="me-2" id="Categories-1" name="Categories-1"
                                    value="Beverages">
                                <label for="Categories-1" class="text-dark"> Accessories</label>
                            </div>
                            <div class="additional-product-item">
                                <input type="radio" class="me-2" id="Categories-2" name="Categories-1"
                                    value="Beverages">
                                <label for="Categories-2" class="text-dark"> Electronics & Computer</label>
                            </div>
                            <div class="additional-product-item">
                                <input type="radio" class="me-2" id="Categories-3" name="Categories-1"
                                    value="Beverages">
                                <label for="Categories-3" class="text-dark"> Laptops & Desktops</label>
                            </div>
                            <div class="additional-product-item">
                                <input type="radio" class="me-2" id="Categories-4" name="Categories-1"
                                    value="Beverages">
                                <label for="Categories-4" class="text-dark"> Mobiles & Tablets</label>
                            </div>
                            <div class="additional-product-item">
                                <input type="radio" class="me-2" id="Categories-5" name="Categories-1"
                                    value="Beverages">
                                <label for="Categories-5" class="text-dark"> SmartPhone & Smart TV</label>
                            </div>
                        </div>
                        <div class="featured-product mb-4">
                            <h4 class="mb-3">Featured products</h4>
                            <div class="featured-product-item">
                                <div class="rounded me-4" style="width: 100px; height: 100px;">
                                    <img src="img/product-3.png" class="img-fluid rounded" alt="Image">
                                </div>
                                <div>
                                    <h6 class="mb-2">SmartPhone</h6>
                                    <div class="d-flex mb-2">
                                        <i class="fa fa-star text-secondary"></i>
                                        <i class="fa fa-star text-secondary"></i>
                                        <i class="fa fa-star text-secondary"></i>
                                        <i class="fa fa-star text-secondary"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                    <div class="d-flex mb-2">
                                        <h5 class="fw-bold me-2">2.99 $</h5>
                                        <h5 class="text-danger text-decoration-line-through">4.11 $</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="featured-product-item">
                                <div class="rounded me-4" style="width: 100px; height: 100px;">
                                    <img src="img/product-4.png" class="img-fluid rounded" alt="Image">
                                </div>
                                <div>
                                    <h6 class="mb-2">Smart Camera</h6>
                                    <div class="d-flex mb-2">
                                        <i class="fa fa-star text-secondary"></i>
                                        <i class="fa fa-star text-secondary"></i>
                                        <i class="fa fa-star text-secondary"></i>
                                        <i class="fa fa-star text-secondary"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                    <div class="d-flex mb-2">
                                        <h5 class="fw-bold me-2">2.99 $</h5>
                                        <h5 class="text-danger text-decoration-line-through">4.11 $</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="featured-product-item">
                                <div class="rounded me-4" style="width: 100px; height: 100px;">
                                    <img src="img/product-5.png" class="img-fluid rounded" alt="Image">
                                </div>
                                <div>
                                    <h6 class="mb-2">Camera Leance</h6>
                                    <div class="d-flex mb-2">
                                        <i class="fa fa-star text-secondary"></i>
                                        <i class="fa fa-star text-secondary"></i>
                                        <i class="fa fa-star text-secondary"></i>
                                        <i class="fa fa-star text-secondary"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                    <div class="d-flex mb-2">
                                        <h5 class="fw-bold me-2">2.99 $</h5>
                                        <h5 class="text-danger text-decoration-line-through">4.11 $</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center my-4">
                                <a href="#" class="btn btn-primary px-4 py-3 rounded-pill w-100">Vew More</a>
                            </div>
                        </div>
                        <a href="#">
                            <div class="position-relative">
                                <img src="img/product-banner-2.jpg" class="img-fluid w-100 rounded" alt="Image">
                                <div class="text-center position-absolute d-flex flex-column align-items-center justify-content-center rounded p-4"
                                    style="width: 100%; height: 100%; top: 0; right: 0; background: rgba(242, 139, 0, 0.3);">
                                    <h5 class="display-6 text-primary">SALE</h5>
                                    <h4 class="text-secondary">Get UP To 50% Off</h4>
                                    <a href="#" class="btn btn-primary rounded-pill px-4">Shop Now</a>
                                </div>
                            </div>
                        </a>
                        <div class="product-tags py-4">
                            <h4 class="mb-3">PRODUCT TAGS</h4>
                            <div class="product-tags-items bg-light rounded p-3">
                                <a href="#" class="border rounded py-1 px-2 mb-2">New</a>
                                <a href="#" class="border rounded py-1 px-2 mb-2">brand</a>
                                <a href="#" class="border rounded py-1 px-2 mb-2">black</a>
                                <a href="#" class="border rounded py-1 px-2 mb-2">white</a>
                                <a href="#" class="border rounded py-1 px-2 mb-2">tablats</a>
                                <a href="#" class="border rounded py-1 px-2 mb-2">phone</a>
                                <a href="#" class="border rounded py-1 px-2 mb-2">camera</a>
                                <a href="#" class="border rounded py-1 px-2 mb-2">drone</a>
                                <a href="#" class="border rounded py-1 px-2 mb-2">talevision</a>
                                <a href="#" class="border rounded py-1 px-2 mb-2">slaes</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-9 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="rounded mb-4 position-relative">
                            <img src="img/product-banner-3.jpg" class="img-fluid rounded w-100" style="height: 250px;"
                                alt="Image">
                            <div class="position-absolute rounded d-flex flex-column align-items-center justify-content-center text-center"
                                style="width: 100%; height: 250px; top: 0; left: 0; background: rgba(242, 139, 0, 0.3);">
                                <h4 class="display-5 text-primary">SALE</h4>
                                <h3 class="display-4 text-white mb-4">Get UP To 50% Off</h3>
                                <a href="#" class="btn btn-primary rounded-pill">Shop Now</a>
                            </div>
                        </div>
                        <div class="row g-4">
                            <div class="col-xl-7">
                                <div class="input-group w-100 mx-auto d-flex">
                                    <input type="search" class="form-control p-3" placeholder="keywords"
                                        aria-describedby="search-icon-1">
                                    <span id="search-icon-1" class="input-group-text p-3"><i
                                            class="fa fa-search"></i></span>
                                </div>
                            </div>
                            <div class="col-xl-3 text-end">
                                <div class="bg-light ps-3 py-3 rounded d-flex justify-content-between">
                                    <label for="electronics">Sort By:</label>
                                    <select id="electronics" name="electronicslist"
                                        class="border-0 form-select-sm bg-light me-3" form="electronicsform">
                                        <option value="volvo">Default Sorting</option>
                                        <option value="volv">Nothing</option>
                                        <option value="sab">Popularity</option>
                                        <option value="saab">Newness</option>
                                        <option value="opel">Average Rating</option>
                                        <option value="audio">Low to high</option>
                                        <option value="audi">High to low</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-4 col-xl-2">
                                <ul class="nav nav-pills d-inline-flex text-center py-2 px-2 rounded bg-light mb-4">
                                    <li class="nav-item me-4">
                                        <a class="bg-light" data-bs-toggle="pill" href="#tab-5">
                                            <i class="fas fa-th fa-3x text-primary"></i>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="bg-light" data-bs-toggle="pill" href="#tab-6">
                                            <i class="fas fa-bars fa-3x text-primary"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="tab-content">
                            <div id="tab-5" class="tab-pane fade show p-0 active">
                                <div class="row g-4 product">
                                    <div class="col-lg-4">
                                        <div class="product-item rounded wow fadeInUp" data-wow-delay="0.1s">
                                            <div class="product-item-inner border rounded">
                                                <div class="product-item-inner-item">
                                                    <img src="img/product-3.png" class="img-fluid w-100 rounded-top"
                                                        alt="">
                                                    <div class="product-new">New</div>
                                                    <div class="product-details">
                                                        <a href="#"><i class="fa fa-eye fa-1x"></i></a>
                                                    </div>
                                                </div>
                                                <div class="text-center rounded-bottom p-4">
                                                    <a href="#" class="d-block mb-2">SmartPhone</a>
                                                    <a href="#" class="d-block h4">Apple iPad Mini <br> G2356</a>
                                                    <del class="me-2 fs-5">$1,250.00</del>
                                                    <span class="text-primary fs-5">$1,050.00</span>
                                                </div>
                                            </div>
                                            <div
                                                class="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                                                <a href="#"
                                                    class="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i
                                                        class="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="d-flex">
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                    <div class="d-flex">
                                                        <a href="#"
                                                            class="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                                class="rounded-circle btn-sm-square border"><i
                                                                    class="fas fa-random"></i></i></a>
                                                        <a href="#"
                                                            class="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                                class="rounded-circle btn-sm-square border"><i
                                                                    class="fas fa-heart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="product-item rounded wow fadeInUp" data-wow-delay="0.3s">
                                            <div class="product-item-inner border rounded">
                                                <div class="product-item-inner-item">
                                                    <img src="img/product-4.png" class="img-fluid w-100 rounded-top"
                                                        alt="">
                                                    <div class="product-new">New</div>
                                                    <div class="product-details">
                                                        <a href="#"><i class="fa fa-eye fa-1x"></i></a>
                                                    </div>
                                                </div>
                                                <div class="text-center rounded-bottom p-4">
                                                    <a href="#" class="d-block mb-2">SmartPhone</a>
                                                    <a href="#" class="d-block h4">Apple iPad Mini <br> G2356</a>
                                                    <del class="me-2 fs-5">$1,250.00</del>
                                                    <span class="text-primary fs-5">$1,050.00</span>
                                                </div>
                                            </div>
                                            <div
                                                class="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                                                <a href="#"
                                                    class="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i
                                                        class="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="d-flex">
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                    <div class="d-flex">
                                                        <a href="#"
                                                            class="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                                class="rounded-circle btn-sm-square border"><i
                                                                    class="fas fa-random"></i></i></a>
                                                        <a href="#"
                                                            class="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                                class="rounded-circle btn-sm-square border"><i
                                                                    class="fas fa-heart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="product-item rounded wow fadeInUp" data-wow-delay="0.5s">
                                            <div class="product-item-inner border rounded">
                                                <div class="product-item-inner-item">
                                                    <img src="img/product-5.png" class="img-fluid w-100 rounded-top"
                                                        alt="">
                                                    <div class="product-new">New</div>
                                                    <div class="product-details">
                                                        <a href="#"><i class="fa fa-eye fa-1x"></i></a>
                                                    </div>
                                                </div>
                                                <div class="text-center rounded-bottom p-4">
                                                    <a href="#" class="d-block mb-2">SmartPhone</a>
                                                    <a href="#" class="d-block h4">Apple iPad Mini <br> G2356</a>
                                                    <del class="me-2 fs-5">$1,250.00</del>
                                                    <span class="text-primary fs-5">$1,050.00</span>
                                                </div>
                                            </div>
                                            <div
                                                class="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                                                <a href="#"
                                                    class="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i
                                                        class="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="d-flex">
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                    <div class="d-flex">
                                                        <a href="#"
                                                            class="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                                class="rounded-circle btn-sm-square border"><i
                                                                    class="fas fa-random"></i></i></a>
                                                        <a href="#"
                                                            class="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                                class="rounded-circle btn-sm-square border"><i
                                                                    class="fas fa-heart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="product-item rounded wow fadeInUp" data-wow-delay="0.1s">
                                            <div class="product-item-inner border rounded">
                                                <div class="product-item-inner-item">
                                                    <img src="img/product-6.png" class="img-fluid w-100 rounded-top"
                                                        alt="">
                                                    <div class="product-new">New</div>
                                                    <div class="product-details">
                                                        <a href="#"><i class="fa fa-eye fa-1x"></i></a>
                                                    </div>
                                                </div>
                                                <div class="text-center rounded-bottom p-4">
                                                    <a href="#" class="d-block mb-2">SmartPhone</a>
                                                    <a href="#" class="d-block h4">Apple iPad Mini <br> G2356</a>
                                                    <del class="me-2 fs-5">$1,250.00</del>
                                                    <span class="text-primary fs-5">$1,050.00</span>
                                                </div>
                                            </div>
                                            <div
                                                class="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                                                <a href="#"
                                                    class="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i
                                                        class="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="d-flex">
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                    <div class="d-flex">
                                                        <a href="#"
                                                            class="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                                class="rounded-circle btn-sm-square border"><i
                                                                    class="fas fa-random"></i></i></a>
                                                        <a href="#"
                                                            class="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                                class="rounded-circle btn-sm-square border"><i
                                                                    class="fas fa-heart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="product-item rounded wow fadeInUp" data-wow-delay="0.3s">
                                            <div class="product-item-inner border rounded">
                                                <div class="product-item-inner-item">
                                                    <img src="img/product-7.png" class="img-fluid w-100 rounded-top"
                                                        alt="">
                                                    <div class="product-new">New</div>
                                                    <div class="product-details">
                                                        <a href="#"><i class="fa fa-eye fa-1x"></i></a>
                                                    </div>
                                                </div>
                                                <div class="text-center rounded-bottom p-4">
                                                    <a href="#" class="d-block mb-2">SmartPhone</a>
                                                    <a href="#" class="d-block h4">Apple iPad Mini <br> G2356</a>
                                                    <del class="me-2 fs-5">$1,250.00</del>
                                                    <span class="text-primary fs-5">$1,050.00</span>
                                                </div>
                                            </div>
                                            <div
                                                class="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                                                <a href="#"
                                                    class="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i
                                                        class="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="d-flex">
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                    <div class="d-flex">
                                                        <a href="#"
                                                            class="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                                class="rounded-circle btn-sm-square border"><i
                                                                    class="fas fa-random"></i></i></a>
                                                        <a href="#"
                                                            class="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                                class="rounded-circle btn-sm-square border"><i
                                                                    class="fas fa-heart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="product-item rounded wow fadeInUp" data-wow-delay="0.5s">
                                            <div class="product-item-inner border rounded">
                                                <div class="product-item-inner-item">
                                                    <img src="img/product-8.png" class="img-fluid w-100 rounded-top"
                                                        alt="">
                                                    <div class="product-new">New</div>
                                                    <div class="product-details">
                                                        <a href="#"><i class="fa fa-eye fa-1x"></i></a>
                                                    </div>
                                                </div>
                                                <div class="text-center rounded-bottom p-4">
                                                    <a href="#" class="d-block mb-2">SmartPhone</a>
                                                    <a href="#" class="d-block h4">Apple iPad Mini <br> G2356</a>
                                                    <del class="me-2 fs-5">$1,250.00</del>
                                                    <span class="text-primary fs-5">$1,050.00</span>
                                                </div>
                                            </div>
                                            <div
                                                class="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                                                <a href="#"
                                                    class="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i
                                                        class="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="d-flex">
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                    <div class="d-flex">
                                                        <a href="#"
                                                            class="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                                class="rounded-circle btn-sm-square border"><i
                                                                    class="fas fa-random"></i></i></a>
                                                        <a href="#"
                                                            class="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                                class="rounded-circle btn-sm-square border"><i
                                                                    class="fas fa-heart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="product-item rounded wow fadeInUp" data-wow-delay="0.1s">
                                            <div class="product-item-inner border rounded">
                                                <div class="product-item-inner-item">
                                                    <img src="img/product-9.png" class="img-fluid w-100 rounded-top"
                                                        alt="">
                                                    <div class="product-new">New</div>
                                                    <div class="product-details">
                                                        <a href="#"><i class="fa fa-eye fa-1x"></i></a>
                                                    </div>
                                                </div>
                                                <div class="text-center rounded-bottom p-4">
                                                    <a href="#" class="d-block mb-2">SmartPhone</a>
                                                    <a href="#" class="d-block h4">Apple iPad Mini <br> G2356</a>
                                                    <del class="me-2 fs-5">$1,250.00</del>
                                                    <span class="text-primary fs-5">$1,050.00</span>
                                                </div>
                                            </div>
                                            <div
                                                class="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                                                <a href="#"
                                                    class="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i
                                                        class="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="d-flex">
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                    <div class="d-flex">
                                                        <a href="#"
                                                            class="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                                class="rounded-circle btn-sm-square border"><i
                                                                    class="fas fa-random"></i></i></a>
                                                        <a href="#"
                                                            class="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                                class="rounded-circle btn-sm-square border"><i
                                                                    class="fas fa-heart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="product-item rounded wow fadeInUp" data-wow-delay="0.3s">
                                            <div class="product-item-inner border rounded">
                                                <div class="product-item-inner-item">
                                                    <img src="img/product-10.png" class="img-fluid w-100 rounded-top"
                                                        alt="">
                                                    <div class="product-new">New</div>
                                                    <div class="product-details">
                                                        <a href="#"><i class="fa fa-eye fa-1x"></i></a>
                                                    </div>
                                                </div>
                                                <div class="text-center rounded-bottom p-4">
                                                    <a href="#" class="d-block mb-2">SmartPhone</a>
                                                    <a href="#" class="d-block h4">Apple iPad Mini <br> G2356</a>
                                                    <del class="me-2 fs-5">$1,250.00</del>
                                                    <span class="text-primary fs-5">$1,050.00</span>
                                                </div>
                                            </div>
                                            <div
                                                class="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                                                <a href="#"
                                                    class="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i
                                                        class="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="d-flex">
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                    <div class="d-flex">
                                                        <a href="#"
                                                            class="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                                class="rounded-circle btn-sm-square border"><i
                                                                    class="fas fa-random"></i></i></a>
                                                        <a href="#"
                                                            class="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                                class="rounded-circle btn-sm-square border"><i
                                                                    class="fas fa-heart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="product-item rounded wow fadeInUp" data-wow-delay="0.5s">
                                            <div class="product-item-inner border rounded">
                                                <div class="product-item-inner-item">
                                                    <img src="img/product-11.png" class="img-fluid w-100 rounded-top"
                                                        alt="">
                                                    <div class="product-new">New</div>
                                                    <div class="product-details">
                                                        <a href="#"><i class="fa fa-eye fa-1x"></i></a>
                                                    </div>
                                                </div>
                                                <div class="text-center rounded-bottom p-4">
                                                    <a href="#" class="d-block mb-2">SmartPhone</a>
                                                    <a href="#" class="d-block h4">Apple iPad Mini <br> G2356</a>
                                                    <del class="me-2 fs-5">$1,250.00</del>
                                                    <span class="text-primary fs-5">$1,050.00</span>
                                                </div>
                                            </div>
                                            <div
                                                class="product-item-add border border-top-0 rounded-bottom  text-center p-4 pt-0">
                                                <a href="#"
                                                    class="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i
                                                        class="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="d-flex">
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star text-primary"></i>
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                    <div class="d-flex">
                                                        <a href="#"
                                                            class="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                                class="rounded-circle btn-sm-square border"><i
                                                                    class="fas fa-random"></i></i></a>
                                                        <a href="#"
                                                            class="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                                class="rounded-circle btn-sm-square border"><i
                                                                    class="fas fa-heart"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 wow fadeInUp" data-wow-delay="0.1s">
                                        <div class="pagination d-flex justify-content-center mt-5">
                                            <a href="#" class="rounded">&laquo;</a>
                                            <a href="#" class="active rounded">1</a>
                                            <a href="#" class="rounded">2</a>
                                            <a href="#" class="rounded">3</a>
                                            <a href="#" class="rounded">4</a>
                                            <a href="#" class="rounded">5</a>
                                            <a href="#" class="rounded">6</a>
                                            <a href="#" class="rounded">&raquo;</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-6" class="products tab-pane fade show p-0">
                                <div class="row g-4 products-mini">
                                    <div class="col-lg-6">
                                        <div class="products-mini-item border">
                                            <div class="row g-0">
                                                <div class="col-5">
                                                    <div class="products-mini-img border-end h-100">
                                                        <img src="img/product-3.png" class="img-fluid w-100 h-100"
                                                            alt="Image">
                                                        <div class="products-mini-icon rounded-circle bg-primary">
                                                            <a href="#"><i
                                                                    class="fa fa-eye fa-1x text-white"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-7">
                                                    <div class="products-mini-content p-3">
                                                        <a href="#" class="d-block mb-2">SmartPhone</a>
                                                        <a href="#" class="d-block h4">Apple iPad Mini <br>
                                                            G2356</a>
                                                        <del class="me-2 fs-5">$1,250.00</del>
                                                        <span class="text-primary fs-5">$1,050.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="products-mini-add border p-3">
                                                <a href="#"
                                                    class="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                                        class="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                                <div class="d-flex">
                                                    <a href="#"
                                                        class="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                            class="rounded-circle btn-sm-square border"><i
                                                                class="fas fa-random"></i></i></a>
                                                    <a href="#"
                                                        class="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                            class="rounded-circle btn-sm-square border"><i
                                                                class="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="products-mini-item border">
                                            <div class="row g-0">
                                                <div class="col-5">
                                                    <div class="products-mini-img border-end h-100">
                                                        <img src="img/product-4.png" class="img-fluid w-100 h-100"
                                                            alt="Image">
                                                        <div class="products-mini-icon rounded-circle bg-primary">
                                                            <a href="#"><i
                                                                    class="fa fa-eye fa-1x text-white"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-7">
                                                    <div class="products-mini-content p-3">
                                                        <a href="#" class="d-block mb-2">SmartPhone</a>
                                                        <a href="#" class="d-block h4">Apple iPad Mini <br>
                                                            G2356</a>
                                                        <del class="me-2 fs-5">$1,250.00</del>
                                                        <span class="text-primary fs-5">$1,050.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="products-mini-add border p-3">
                                                <a href="#"
                                                    class="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                                        class="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                                <div class="d-flex">
                                                    <a href="#"
                                                        class="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                            class="rounded-circle btn-sm-square border"><i
                                                                class="fas fa-random"></i></i></a>
                                                    <a href="#"
                                                        class="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                            class="rounded-circle btn-sm-square border"><i
                                                                class="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="products-mini-item border">
                                            <div class="row g-0">
                                                <div class="col-5">
                                                    <div class="products-mini-img border-end h-100">
                                                        <img src="img/product-5.png" class="img-fluid w-100 h-100"
                                                            alt="Image">
                                                        <div class="products-mini-icon rounded-circle bg-primary">
                                                            <a href="#"><i
                                                                    class="fa fa-eye fa-1x text-white"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-7">
                                                    <div class="products-mini-content p-3">
                                                        <a href="#" class="d-block mb-2">SmartPhone</a>
                                                        <a href="#" class="d-block h4">Apple iPad Mini <br>
                                                            G2356</a>
                                                        <del class="me-2 fs-5">$1,250.00</del>
                                                        <span class="text-primary fs-5">$1,050.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="products-mini-add border p-3">
                                                <a href="#"
                                                    class="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                                        class="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                                <div class="d-flex">
                                                    <a href="#"
                                                        class="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                            class="rounded-circle btn-sm-square border"><i
                                                                class="fas fa-random"></i></i></a>
                                                    <a href="#"
                                                        class="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                            class="rounded-circle btn-sm-square border"><i
                                                                class="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="products-mini-item border">
                                            <div class="row g-0">
                                                <div class="col-5">
                                                    <div class="products-mini-img border-end h-100">
                                                        <img src="img/product-6.png" class="img-fluid w-100 h-100"
                                                            alt="Image">
                                                        <div class="products-mini-icon rounded-circle bg-primary">
                                                            <a href="#"><i
                                                                    class="fa fa-eye fa-1x text-white"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-7">
                                                    <div class="products-mini-content p-3">
                                                        <a href="#" class="d-block mb-2">SmartPhone</a>
                                                        <a href="#" class="d-block h4">Apple iPad Mini <br>
                                                            G2356</a>
                                                        <del class="me-2 fs-5">$1,250.00</del>
                                                        <span class="text-primary fs-5">$1,050.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="products-mini-add border p-3">
                                                <a href="#"
                                                    class="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                                        class="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                                <div class="d-flex">
                                                    <a href="#"
                                                        class="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                            class="rounded-circle btn-sm-square border"><i
                                                                class="fas fa-random"></i></i></a>
                                                    <a href="#"
                                                        class="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                            class="rounded-circle btn-sm-square border"><i
                                                                class="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="products-mini-item border">
                                            <div class="row g-0">
                                                <div class="col-5">
                                                    <div class="products-mini-img border-end h-100">
                                                        <img src="img/product-7.png" class="img-fluid w-100 h-100"
                                                            alt="Image">
                                                        <div class="products-mini-icon rounded-circle bg-primary">
                                                            <a href="#"><i
                                                                    class="fa fa-eye fa-1x text-white"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-7">
                                                    <div class="products-mini-content p-3">
                                                        <a href="#" class="d-block mb-2">SmartPhone</a>
                                                        <a href="#" class="d-block h4">Apple iPad Mini <br>
                                                            G2356</a>
                                                        <del class="me-2 fs-5">$1,250.00</del>
                                                        <span class="text-primary fs-5">$1,050.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="products-mini-add border p-3">
                                                <a href="#"
                                                    class="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                                        class="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                                <div class="d-flex">
                                                    <a href="#"
                                                        class="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                            class="rounded-circle btn-sm-square border"><i
                                                                class="fas fa-random"></i></i></a>
                                                    <a href="#"
                                                        class="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                            class="rounded-circle btn-sm-square border"><i
                                                                class="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="products-mini-item border">
                                            <div class="row g-0">
                                                <div class="col-5">
                                                    <div class="products-mini-img border-end h-100">
                                                        <img src="img/product-8.png" class="img-fluid w-100 h-100"
                                                            alt="Image">
                                                        <div class="products-mini-icon rounded-circle bg-primary">
                                                            <a href="#"><i
                                                                    class="fa fa-eye fa-1x text-white"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-7">
                                                    <div class="products-mini-content p-3">
                                                        <a href="#" class="d-block mb-2">SmartPhone</a>
                                                        <a href="#" class="d-block h4">Apple iPad Mini <br>
                                                            G2356</a>
                                                        <del class="me-2 fs-5">$1,250.00</del>
                                                        <span class="text-primary fs-5">$1,050.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="products-mini-add border p-3">
                                                <a href="#"
                                                    class="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                                        class="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                                <div class="d-flex">
                                                    <a href="#"
                                                        class="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                            class="rounded-circle btn-sm-square border"><i
                                                                class="fas fa-random"></i></i></a>
                                                    <a href="#"
                                                        class="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                            class="rounded-circle btn-sm-square border"><i
                                                                class="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="products-mini-item border">
                                            <div class="row g-0">
                                                <div class="col-5">
                                                    <div class="products-mini-img border-end h-100">
                                                        <img src="img/product-9.png" class="img-fluid w-100 h-100"
                                                            alt="Image">
                                                        <div class="products-mini-icon rounded-circle bg-primary">
                                                            <a href="#"><i
                                                                    class="fa fa-eye fa-1x text-white"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-7">
                                                    <div class="products-mini-content p-3">
                                                        <a href="#" class="d-block mb-2">SmartPhone</a>
                                                        <a href="#" class="d-block h4">Apple iPad Mini <br>
                                                            G2356</a>
                                                        <del class="me-2 fs-5">$1,250.00</del>
                                                        <span class="text-primary fs-5">$1,050.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="products-mini-add border p-3">
                                                <a href="#"
                                                    class="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                                        class="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                                <div class="d-flex">
                                                    <a href="#"
                                                        class="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                            class="rounded-circle btn-sm-square border"><i
                                                                class="fas fa-random"></i></i></a>
                                                    <a href="#"
                                                        class="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                            class="rounded-circle btn-sm-square border"><i
                                                                class="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="products-mini-item border">
                                            <div class="row g-0">
                                                <div class="col-5">
                                                    <div class="products-mini-img border-end h-100">
                                                        <img src="img/product-12.png" class="img-fluid w-100 h-100"
                                                            alt="Image">
                                                        <div class="products-mini-icon rounded-circle bg-primary">
                                                            <a href="#"><i
                                                                    class="fa fa-eye fa-1x text-white"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-7">
                                                    <div class="products-mini-content p-3">
                                                        <a href="#" class="d-block mb-2">SmartPhone</a>
                                                        <a href="#" class="d-block h4">Apple iPad Mini <br>
                                                            G2356</a>
                                                        <del class="me-2 fs-5">$1,250.00</del>
                                                        <span class="text-primary fs-5">$1,050.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="products-mini-add border p-3">
                                                <a href="#"
                                                    class="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                                        class="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                                <div class="d-flex">
                                                    <a href="#"
                                                        class="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                            class="rounded-circle btn-sm-square border"><i
                                                                class="fas fa-random"></i></i></a>
                                                    <a href="#"
                                                        class="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                            class="rounded-circle btn-sm-square border"><i
                                                                class="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="products-mini-item border">
                                            <div class="row g-0">
                                                <div class="col-5">
                                                    <div class="products-mini-img border-end h-100">
                                                        <img src="img/product-13.png" class="img-fluid w-100 h-100"
                                                            alt="Image">
                                                        <div class="products-mini-icon rounded-circle bg-primary">
                                                            <a href="#"><i
                                                                    class="fa fa-eye fa-1x text-white"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-7">
                                                    <div class="products-mini-content p-3">
                                                        <a href="#" class="d-block mb-2">SmartPhone</a>
                                                        <a href="#" class="d-block h4">Apple iPad Mini <br>
                                                            G2356</a>
                                                        <del class="me-2 fs-5">$1,250.00</del>
                                                        <span class="text-primary fs-5">$1,050.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="products-mini-add border p-3">
                                                <a href="#"
                                                    class="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                                        class="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                                <div class="d-flex">
                                                    <a href="#"
                                                        class="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                            class="rounded-circle btn-sm-square border"><i
                                                                class="fas fa-random"></i></i></a>
                                                    <a href="#"
                                                        class="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                            class="rounded-circle btn-sm-square border"><i
                                                                class="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="products-mini-item border">
                                            <div class="row g-0">
                                                <div class="col-5">
                                                    <div class="products-mini-img border-end h-100">
                                                        <img src="img/product-14.png" class="img-fluid w-100 h-100"
                                                            alt="Image">
                                                        <div class="products-mini-icon rounded-circle bg-primary">
                                                            <a href="#"><i
                                                                    class="fa fa-eye fa-1x text-white"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-7">
                                                    <div class="products-mini-content p-3">
                                                        <a href="#" class="d-block mb-2">SmartPhone</a>
                                                        <a href="#" class="d-block h4">Apple iPad Mini <br>
                                                            G2356</a>
                                                        <del class="me-2 fs-5">$1,250.00</del>
                                                        <span class="text-primary fs-5">$1,050.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="products-mini-add border p-3">
                                                <a href="#"
                                                    class="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                                        class="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                                <div class="d-flex">
                                                    <a href="#"
                                                        class="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                            class="rounded-circle btn-sm-square border"><i
                                                                class="fas fa-random"></i></i></a>
                                                    <a href="#"
                                                        class="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                            class="rounded-circle btn-sm-square border"><i
                                                                class="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="products-mini-item border">
                                            <div class="row g-0">
                                                <div class="col-5">
                                                    <div class="products-mini-img border-end h-100">
                                                        <img src="img/product-15.png" class="img-fluid w-100 h-100"
                                                            alt="Image">
                                                        <div class="products-mini-icon rounded-circle bg-primary">
                                                            <a href="#"><i
                                                                    class="fa fa-eye fa-1x text-white"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-7">
                                                    <div class="products-mini-content p-3">
                                                        <a href="#" class="d-block mb-2">SmartPhone</a>
                                                        <a href="#" class="d-block h4">Apple iPad Mini <br>
                                                            G2356</a>
                                                        <del class="me-2 fs-5">$1,250.00</del>
                                                        <span class="text-primary fs-5">$1,050.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="products-mini-add border p-3">
                                                <a href="#"
                                                    class="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                                        class="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                                <div class="d-flex">
                                                    <a href="#"
                                                        class="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                            class="rounded-circle btn-sm-square border"><i
                                                                class="fas fa-random"></i></i></a>
                                                    <a href="#"
                                                        class="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                            class="rounded-circle btn-sm-square border"><i
                                                                class="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="products-mini-item border">
                                            <div class="row g-0">
                                                <div class="col-5">
                                                    <div class="products-mini-img border-end h-100">
                                                        <img src="img/product-16.png" class="img-fluid w-100 h-100"
                                                            alt="Image">
                                                        <div class="products-mini-icon rounded-circle bg-primary">
                                                            <a href="#"><i
                                                                    class="fa fa-eye fa-1x text-white"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-7">
                                                    <div class="products-mini-content p-3">
                                                        <a href="#" class="d-block mb-2">SmartPhone</a>
                                                        <a href="#" class="d-block h4">Apple iPad Mini <br>
                                                            G2356</a>
                                                        <del class="me-2 fs-5">$1,250.00</del>
                                                        <span class="text-primary fs-5">$1,050.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="products-mini-add border p-3">
                                                <a href="#"
                                                    class="btn btn-primary border-secondary rounded-pill py-2 px-4"><i
                                                        class="fas fa-shopping-cart me-2"></i> Add To Cart</a>
                                                <div class="d-flex">
                                                    <a href="#"
                                                        class="text-primary d-flex align-items-center justify-content-center me-3"><span
                                                            class="rounded-circle btn-sm-square border"><i
                                                                class="fas fa-random"></i></i></a>
                                                    <a href="#"
                                                        class="text-primary d-flex align-items-center justify-content-center me-0"><span
                                                            class="rounded-circle btn-sm-square border"><i
                                                                class="fas fa-heart"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 wow fadeInUp" data-wow-delay="0.1s">
                                        <div class="pagination d-flex justify-content-center mt-5">
                                            <a href="#" class="rounded">&laquo;</a>
                                            <a href="#" class="active rounded">1</a>
                                            <a href="#" class="rounded">2</a>
                                            <a href="#" class="rounded">3</a>
                                            <a href="#" class="rounded">4</a>
                                            <a href="#" class="rounded">5</a>
                                            <a href="#" class="rounded">6</a>
                                            <a href="#" class="rounded">&raquo;</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Shop Page End -->

        <!-- Product Banner Start -->
        <div class="container-fluid py-5">
            <div class="container pb-5">
                <div class="row g-4">
                    <div class="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                        <a href="#">
                            <div class="bg-primary rounded position-relative">
                                <img src="img/product-banner.jpg" class="img-fluid w-100 rounded" alt="">
                                <div class="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center rounded p-4"
                                    style="background: rgba(255, 255, 255, 0.5);">
                                    <h3 class="display-5 text-primary">EOS Rebel <br> <span>T7i Kit</span></h3>
                                    <p class="fs-4 text-muted">$899.99</p>
                                    <a href="#"
                                        class="btn btn-primary rounded-pill align-self-start py-2 px-4">Shop Now</a>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
                        <a href="#">
                            <div class="text-center bg-primary rounded position-relative">
                                <img src="img/product-banner-2.jpg" class="img-fluid w-100" alt="">
                                <div class="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center rounded p-4"
                                    style="background: rgba(242, 139, 0, 0.5);">
                                    <h2 class="display-2 text-secondary">SALE</h2>
                                    <h4 class="display-5 text-white mb-4">Get UP To 50% Off</h4>
                                    <a href="#"
                                        class="btn btn-secondary rounded-pill align-self-center py-2 px-4">Shop
                                        Now</a>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Product Banner End -->

        {{-- <!-- Footer Start -->
    <div class="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
        <div class="container py-5">
            <div class="row g-4 rounded mb-5" style="background: rgba(255, 255, 255, .03);">
                <div class="col-md-6 col-lg-6 col-xl-3">
                    <div class="rounded p-4">
                        <div class="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4"
                            style="width: 70px; height: 70px;">
                            <i class="fas fa-map-marker-alt fa-2x text-primary"></i>
                        </div>
                        <div>
                            <h4 class="text-white">Address</h4>
                            <p class="mb-2">123 Street New York.USA</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-3">
                    <div class="rounded p-4">
                        <div class="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4"
                            style="width: 70px; height: 70px;">
                            <i class="fas fa-envelope fa-2x text-primary"></i>
                        </div>
                        <div>
                            <h4 class="text-white">Mail Us</h4>
                            <p class="mb-2">info@example.com</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-3">
                    <div class="rounded p-4">
                        <div class="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4"
                            style="width: 70px; height: 70px;">
                            <i class="fa fa-phone-alt fa-2x text-primary"></i>
                        </div>
                        <div>
                            <h4 class="text-white">Telephone</h4>
                            <p class="mb-2">(+012) 3456 7890</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-3">
                    <div class="rounded p-4">
                        <div class="rounded-circle bg-secondary d-flex align-items-center justify-content-center mb-4"
                            style="width: 70px; height: 70px;">
                            <i class="fab fa-firefox-browser fa-2x text-primary"></i>
                        </div>
                        <div>
                            <h4 class="text-white">Yoursite@ex.com</h4>
                            <p class="mb-2">(+012) 3456 7890</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row g-5">
                <div class="col-md-6 col-lg-6 col-xl-3">
                    <div class="footer-item d-flex flex-column">
                        <div class="footer-item">
                            <h4 class="text-primary mb-4">Newsletter</h4>
                            <p class="text-white mb-3">Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.</p>
                            <div class="position-relative mx-auto rounded-pill">
                                <input class="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text"
                                    placeholder="Enter your email">
                                <button type="button"
                                    class="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-3">
                    <div class="footer-item d-flex flex-column">
                        <h4 class="text-primary mb-4">Customer Service</h4>
                        <a href="#" class=""><i class="fas fa-angle-right me-2"></i> Contact Us</a>
                        <a href="#" class=""><i class="fas fa-angle-right me-2"></i> Returns</a>
                        <a href="#" class=""><i class="fas fa-angle-right me-2"></i> Order History</a>
                        <a href="#" class=""><i class="fas fa-angle-right me-2"></i> Site Map</a>
                        <a href="#" class=""><i class="fas fa-angle-right me-2"></i> Testimonials</a>
                        <a href="#" class=""><i class="fas fa-angle-right me-2"></i> My Account</a>
                        <a href="#" class=""><i class="fas fa-angle-right me-2"></i> Unsubscribe Notification</a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-3">
                    <div class="footer-item d-flex flex-column">
                        <h4 class="text-primary mb-4">Information</h4>
                        <a href="#" class=""><i class="fas fa-angle-right me-2"></i> About Us</a>
                        <a href="#" class=""><i class="fas fa-angle-right me-2"></i> Delivery infomation</a>
                        <a href="#" class=""><i class="fas fa-angle-right me-2"></i> Privacy Policy</a>
                        <a href="#" class=""><i class="fas fa-angle-right me-2"></i> Terms & Conditions</a>
                        <a href="#" class=""><i class="fas fa-angle-right me-2"></i> Warranty</a>
                        <a href="#" class=""><i class="fas fa-angle-right me-2"></i> FAQ</a>
                        <a href="#" class=""><i class="fas fa-angle-right me-2"></i> Seller Login</a>
                    </div>
                </div>
                <div class="col-md-6 col-lg-6 col-xl-3">
                    <div class="footer-item d-flex flex-column">
                        <h4 class="text-primary mb-4">Extras</h4>
                        <a href="#" class=""><i class="fas fa-angle-right me-2"></i> Brands</a>
                        <a href="#" class=""><i class="fas fa-angle-right me-2"></i> Gift Vouchers</a>
                        <a href="#" class=""><i class="fas fa-angle-right me-2"></i> Affiliates</a>
                        <a href="#" class=""><i class="fas fa-angle-right me-2"></i> Wishlist</a>
                        <a href="#" class=""><i class="fas fa-angle-right me-2"></i> Order History</a>
                        <a href="#" class=""><i class="fas fa-angle-right me-2"></i> Track Your Order</a>
                        <a href="#" class=""><i class="fas fa-angle-right me-2"></i> Track Your Order</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer End -->


    <!-- Copyright Start -->
    <div class="container-fluid copyright py-4">
        <div class="container">
            <div class="row g-4 align-items-center">
                <div class="col-md-6 text-center text-md-start mb-md-0">
                    <span class="text-white"><a href="#" class="border-bottom text-white"><i
                                class="fas fa-copyright text-light me-2"></i>Your Site Name</a>, All right
                        reserved.</span>
                </div>
                <div class="col-md-6 text-center text-md-end text-white">

                    <!--/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. ***/-->
                    <!--/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, ***/-->
                    <!--/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". ***/-->
                    Designed By <a class="border-bottom text-white" href="https://htmlcodex.com">HTML Codex</a>.
                    Distributed By <a class="border-bottom text-white" href="https://themewagon.com">ThemeWagon</a>
                </div>
            </div>
        </div>
    </div>
    <!-- Copyright End --> --}}


        <!-- Back to Top -->
        <a href="#" class="btn btn-primary btn-lg-square back-to-top"><i class="fa fa-arrow-up"></i></a>
    </body>
@endsection
