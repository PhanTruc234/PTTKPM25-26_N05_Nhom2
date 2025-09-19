@extends('Layout.UserLayout')
@section('content')
<!-- Single Page Header start -->
    <div class="container-fluid page-header py-5">
        <h1 class="text-center text-white display-6 wow fadeInUp" data-wow-delay="0.1s">Cheackout Page</h1>
        <ol class="breadcrumb justify-content-center mb-0 wow fadeInUp" data-wow-delay="0.3s">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Pages</a></li>
            <li class="breadcrumb-item active text-white">Cheackout</li>
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


    <!-- Checkout Page Start -->
    <div class="container-fluid bg-light overflow-hidden py-5">
        <div class="container py-5">
            <h1 class="mb-4 wow fadeInUp" data-wow-delay="0.1s">Billing details</h1>
            <form action="#">
                <div class="row g-5">
                    <div class="col-md-12 col-lg-6 col-xl-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="row">
                            <div class="col-md-12 col-lg-6">
                                <div class="form-item w-100">
                                    <label class="form-label my-3">First Name<sup>*</sup></label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-6">
                                <div class="form-item w-100">
                                    <label class="form-label my-3">Last Name<sup>*</sup></label>
                                    <input type="text" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div class="form-item">
                            <label class="form-label my-3">Company Name<sup>*</sup></label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-item">
                            <label class="form-label my-3">Address <sup>*</sup></label>
                            <input type="text" class="form-control" placeholder="House Number Street Name">
                        </div>
                        <div class="form-item">
                            <label class="form-label my-3">Town/City<sup>*</sup></label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-item">
                            <label class="form-label my-3">Country<sup>*</sup></label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-item">
                            <label class="form-label my-3">Postcode/Zip<sup>*</sup></label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-item">
                            <label class="form-label my-3">Mobile<sup>*</sup></label>
                            <input type="tel" class="form-control">
                        </div>
                        <div class="form-item">
                            <label class="form-label my-3">Email Address<sup>*</sup></label>
                            <input type="email" class="form-control">
                        </div>
                        <div class="form-check my-3">
                            <input type="checkbox" class="form-check-input" id="Account-1" name="Accounts"
                                value="Accounts">
                            <label class="form-check-label" for="Account-1">Create an account?</label>
                        </div>
                        <hr>
                        <div class="form-check my-3">
                            <input class="form-check-input" type="checkbox" id="Address-1" name="Address"
                                value="Address">
                            <label class="form-check-label" for="Address-1">Ship to a different address?</label>
                        </div>
                        <div class="form-item">
                            <textarea name="text" class="form-control" spellcheck="false" cols="30" rows="11"
                                placeholder="Oreder Notes (Optional)"></textarea>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-6 col-xl-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr class="text-center">
                                        <th scope="col" class="text-start">Name</th>
                                        <th scope="col">Model</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="text-center">
                                        <th scope="row" class="text-start py-4">
                                            Apple iPad Mini
                                        </th>
                                        <td class="py-4">G2356</td>
                                        <td class="py-4">$269.00</td>
                                        <td class="py-4 text-center">2</td>
                                        <td class="py-4">$538.00</td>
                                    </tr>
                                    <tr class="text-center">
                                        <th scope="row" class="text-start py-4">
                                            Apple iPad Mini
                                        </th>
                                        <td class="py-4">G2356</td>
                                        <td class="py-4">$269.00</td>
                                        <td class="py-4">2</td>
                                        <td class="py-4">$538.00</td>
                                    </tr>
                                    <tr class="text-center">
                                        <th scope="row" class="text-start py-4">
                                            Apple iPad Mini
                                        </th>
                                        <td class="py-4">G2356</td>
                                        <td class="py-4">$269.00</td>
                                        <td class="py-4">2</td>
                                        <td class="py-4">$538.00</td>
                                    </tr>
                                    <tr class="text-center">
                                        <th scope="row" class="text-start py-4">
                                            Apple iPad Mini
                                        </th>
                                        <td class="py-4">G2356</td>
                                        <td class="py-4">$269.00</td>
                                        <td class="py-4">2</td>
                                        <td class="py-4">$538.00</td>
                                    </tr>
                                    <tr class="text-center">
                                        <th scope="row" class="text-start py-4">
                                            Apple iPad Mini
                                        </th>
                                        <td class="py-4">G2356</td>
                                        <td class="py-4">$269.00</td>
                                        <td class="py-4">2</td>
                                        <td class="py-4">$538.00</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                        </th>
                                        <td class="py-4"></td>
                                        <td class="py-4"></td>
                                        <td class="py-4">
                                            <p class="mb-0 text-dark py-2">Subtotal</p>
                                        </td>
                                        <td class="py-4">
                                            <div class="py-2 text-center border-bottom border-top">
                                                <p class="mb-0 text-dark">$1134.00</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                        </th>
                                        <td class="py-4">
                                            <p class="mb-0 text-dark py-4">Shipping</p>
                                        </td>
                                        <td colspan="3" class="py-4">
                                            <div class="form-check text-start">
                                                <input type="checkbox" class="form-check-input bg-primary border-0"
                                                    id="Shipping-1" name="Shipping-1" value="Shipping">
                                                <label class="form-check-label" for="Shipping-1">Free Shipping</label>
                                            </div>
                                            <div class="form-check text-start">
                                                <input type="checkbox" class="form-check-input bg-primary border-0"
                                                    id="Shipping-2" name="Shipping-1" value="Shipping">
                                                <label class="form-check-label" for="Shipping-2">Flat rate:
                                                    $15.00</label>
                                            </div>
                                            <div class="form-check text-start">
                                                <input type="checkbox" class="form-check-input bg-primary border-0"
                                                    id="Shipping-3" name="Shipping-1" value="Shipping">
                                                <label class="form-check-label" for="Shipping-3">Local Pickup:
                                                    $8.00</label>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                        </th>
                                        <td class="py-4">
                                            <p class="mb-0 text-dark text-uppercase py-2">TOTAL</p>
                                        </td>
                                        <td class="py-4"></td>
                                        <td class="py-4"></td>
                                        <td class="py-4">
                                            <div class="py-2 text-center border-bottom border-top">
                                                <p class="mb-0 text-dark">$135.00</p>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="row g-0 text-center align-items-center justify-content-center border-bottom py-2">
                            <div class="col-12">
                                <div class="form-check text-start my-2">
                                    <input type="checkbox" class="form-check-input bg-primary border-0" id="Transfer-1"
                                        name="Transfer" value="Transfer">
                                    <label class="form-check-label" for="Transfer-1">Direct Bank Transfer</label>
                                </div>
                                <p class="text-start text-dark">Make your payment directly into our bank account. Please
                                    use your Order ID as the payment reference. Your order will not be shipped until the
                                    funds have cleared in our account.</p>
                            </div>
                        </div>
                        <div class="row g-4 text-center align-items-center justify-content-center border-bottom py-2">
                            <div class="col-12">
                                <div class="form-check text-start my-2">
                                    <input type="checkbox" class="form-check-input bg-primary border-0" id="Payments-1"
                                        name="Payments" value="Payments">
                                    <label class="form-check-label" for="Payments-1">Check Payments</label>
                                </div>
                            </div>
                        </div>
                        <div class="row g-4 text-center align-items-center justify-content-center border-bottom py-2">
                            <div class="col-12">
                                <div class="form-check text-start my-2">
                                    <input type="checkbox" class="form-check-input bg-primary border-0" id="Delivery-1"
                                        name="Delivery" value="Delivery">
                                    <label class="form-check-label" for="Delivery-1">Cash On Delivery</label>
                                </div>
                            </div>
                        </div>
                        <div class="row g-4 text-center align-items-center justify-content-center border-bottom py-2">
                            <div class="col-12">
                                <div class="form-check text-start my-2">
                                    <input type="checkbox" class="form-check-input bg-primary border-0" id="Paypal-1"
                                        name="Paypal" value="Paypal">
                                    <label class="form-check-label" for="Paypal-1">Paypal</label>
                                </div>
                            </div>
                        </div>
                        <div class="row g-4 text-center align-items-center justify-content-center pt-4">
                            <button type="button"
                                class="btn btn-primary border-secondary py-3 px-4 text-uppercase w-100 text-primary">Place
                                Order</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <!-- Checkout Page End -->
@endsection