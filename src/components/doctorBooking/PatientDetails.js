import React from "react";
import BookingSummary from "./BookingSummary";

export default function PatientDetails() {
    return (
        <>
            <div class="doctor-content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="back-link">
                                <a href="/DoctorBooking"><i class="fa-solid fa-arrow-left-long"></i> Back</a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 col-md-12">
                            <div class="paitent-header">
                                <h4 class="paitent-title">Patient Details</h4>
                            </div>
                            <div class="paitent-appointment">
                                <form action="#">
                                    <div class="forms-block">
                                        <label class="form-group-title">Appointment for</label>
                                        <label class="custom_radio me-4">
                                            <input type="radio" name="appointment" checked=""/>
                                                <span class="checkmark"></span> My Self
                                        </label>
                                        <label class="custom_radio">
                                            <input type="radio" name="appointment"/>
                                                <span class="checkmark"></span> Dependent
                                        </label>
                                    </div>
                                    <div class="forms-block">
                                        <div class="form-group-flex">
                                            <label class="form-group-title">Choose Dependent</label>
                                            <a href="javascript:void(0);" class="btn">
                                                <i class="feather-plus"></i> Add
                                            </a>
                                        </div>
                                        <div class="paitent-dependent-select">
                                            <select class="select select2-hidden-accessible" data-select2-id="1" tabindex="-1" aria-hidden="true">
                                                <option data-select2-id="3">Select</option>
                                                <option>Dependent 01</option>
                                                <option>Dependent 02</option>
                                                <option>Dependent 03</option>
                                                <option>Dependent 04</option>
                                            </select><span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="2" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-ks8m-container"><span class="select2-selection__rendered" id="select2-ks8m-container" role="textbox" aria-readonly="true" title="Select">Select</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                        </div>
                                    </div>
                                    <div class="forms-block">
                                        <label class="form-group-title">Do you have insurance?</label>
                                        <label class="custom_radio me-4">
                                            <input type="radio" name="insurance"/>
                                                <span class="checkmark"></span> Yes
                                        </label>
                                        <label class="custom_radio">
                                            <input type="radio" name="insurance" checked=""/>
                                                <span class="checkmark"></span> No
                                        </label>
                                    </div>
                                    <div class="forms-block">
                                        <label class="form-group-title">Reason</label>
                                        <textarea class="form-control" placeholder="Enter Your Reason"></textarea>
                                        <p class="characters-text">400 Characters</p>
                                    </div>
                                    <div class="forms-block">
                                        <label class="form-group-title d-flex align-items-center">
                                            <i class="fa fa-paperclip me-2"></i> Attachment
                                        </label>
                                        <div class="attachment-box">
                                            <div class="attachment-img">
                                                <div class="attachment-icon">
                                                    <i class="feather-image"></i>
                                                </div>
                                                <div class="attachment-content">
                                                    <p>Skin Allergy Image</p>
                                                    <span>12.30 mb</span>
                                                </div>
                                            </div>
                                            <div class="attachment-close">
                                                <a href="javascript:void(0);"><i class="feather-x"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="forms-block">
                                        <label class="form-group-title">Symtoms <span>(Optional)</span></label>
                                        <input type="text" class="form-control" placeholder="Skin Allergy"/>
                                    </div>
                                    <div class="forms-block mb-0">
                                        <div class="booking-btn">
                                            <button type="submit" class="btn btn-primary prime-btn justify-content-center align-items-center">
                                                Next <i class="feather-arrow-right-circle"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                       <BookingSummary/>
                    </div>
                </div>
            </div>
        </>
    );
}