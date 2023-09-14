import React from "react";
import { CARD_TYPE, CVV_TYPE, ACH_TYPE } from "@cardknox/react-ifields";
import IField from "@cardknox/react-ifields";

const Payment = () => {
  return (
    <div>
      <div class="main">
        <div class="container padd-30-on-mob">
          <div class="py-3 text-center"> </div>
          <div class="row">
            <div class="col-md-4 order-md-2 mb-4" id="sidebar">
              <h4 class="justify-content-between align-items-center mb-3 section-heading">
                {" "}
                <span class="badge badge-secondary display-desktop">
                  3
                </span>{" "}
                {/* <span class="badge badge-secondary display-mobile">1</span>{" "} */}
                <span>Billing Invoice</span>{" "}
              </h4>
              <ul class="list-group mb-3">
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h5 class="my-0">Standard Logo</h5>
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 class="my-0">Item Price</h6>
                  </div>{" "}
                  <span class="text-muted itemprice_coupon" id="itemPrice">
                    USD99
                  </span>
                </li>
                <li
                  class="list-group-item d-flex justify-content-between bg-light"
                  id="discount_div"
                >
                  {" "}
                </li>
                <li class="list-group-item d-flex justify-content-between">
                  {" "}
                  <span>Total (USD)</span>{" "}
                  <strong id="calculated_total" class="total_amount">
                    USD99
                  </strong>{" "}
                </li>
              </ul>
              <div id="coupon-div">
                <div class="input-group">
                  {" "}
                  <input
                    type="text"
                    class="form-control coupon-code"
                    placeholder="Promo code"
                  />
                  <div class="input-group-append">
                    {" "}
                    <button
                      type="button"
                      id=""
                      class="btn btn-secondary apply-coupon"
                    >
                      Redeem
                    </button>{" "}
                  </div>
                </div>
                <div class="coupon-response-div"></div>
              </div>
              <div class="complete">
                {" "}
                <a
                  target="_blank"
                  class="money-back-img"
                  style={{
                    display: "table",
                    margin: "12px auto",
                    clear: "both",
                  }}
                >
                  {" "}
                  <img
                    src="https://www.logura.com/assets/img/moneyback.png"
                    width="200px"
                    border="0"
                  />{" "}
                </a>{" "}
              </div>
            </div>
            <div class="col-md-8 order-md-1" id="main-formarea">
              <h4 class="justify-content-between align-items-center mb-3 section-heading">
                {" "}
                <span class="badge badge-secondary display-desktop">
                  1
                </span>{" "}
                {/* <span class="badge badge-secondary display-mobile">2</span>{" "} */}
                <span>Billing Information</span>{" "}
              </h4>
              <form
                id="payment-form"
                class="needs-validation"
                action=""
                method="post"
              >
                <div class="row">
                  <div class="col-md-6 mb-3">
                    {" "}
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      name="firstname"
                      placeholder="First Name"
                      required
                    />
                    <div class="invalid-feedback">
                      {" "}
                      Valid first name is required.{" "}
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    {" "}
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      name="lastname"
                      placeholder=" Last Name "
                      required
                    />
                    <div class="invalid-feedback">
                      {" "}
                      Valid last name is required.{" "}
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 mb-3">
                    {" "}
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      name="clientemail"
                      placeholder="Email Address"
                      required
                    />
                    <div class="invalid-feedback">
                      {" "}
                      Please enter a valid email address.{" "}
                    </div>
                  </div>
                  <div class="col-md-6 mb-3">
                    {/* <!--<label for="phoneNumber">Phone Number</label> <input type="number" minlength="9" min="0" class="form-control" name="phonenum" id="phoneNumber" placeholder="Please Enter Your Number Here" required> <div class="invalid-feedback"> Valid last name is required. </div>--> */}
                    <div class="input-group">
                      <div class="input-group-prepend">
                        {" "}
                        <input
                          type="tel"
                          id="phone"
                          name="phonenum"
                          class="form-control"
                          style={{ width: "100%", paddingRight: "56px" }}
                        />{" "}
                      </div>
                      <div class="invalid-feedback">
                        {" "}
                        Valid last name is required.{" "}
                      </div>
                    </div>{" "}
                    <span id="valid-msg" class="hide"></span>{" "}
                    <span id="error-msg" class="hide"></span>
                  </div>
                </div>
                <div class="mb-3">
                  {" "}
                  <input
                    type="text"
                    class="form-control"
                    id="address"
                    name="address"
                    placeholder="Address"
                    required
                  />
                  <div class="invalid-feedback">
                    {" "}
                    Please enter your address.{" "}
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6 mb-3">
                    {" "}
                    <input
                      type="text"
                      class="form-control"
                      id="companyName"
                      name="companyname"
                      placeholder="Company Name"
                      required
                    />
                    <div class="invalid-feedback">
                      {" "}
                      Please enter a valid email address.{" "}
                    </div>
                  </div>
                  {/* <div class="col-lg-6 mb-3">
                         <select class="custom-select d-block w-100" name="country"
                              id="country" required />
                              <option selected disabled> Select Your Country</option>
                  
                              <option value="Afghanistan" data-countryCode="AF">Afghanistan</option>
                              <option value="Albania" data-countryCode="AL">Albania</option>
                              <option value="Algeria" data-countryCode="DZ">Algeria</option>
                              <option value="American Samoa" data-countryCode="AS">American Samoa</option>
                              <option value="Andorra" data-countryCode="AD">Andorra</option>
                              <option value="Angola" data-countryCode="AO">Angola</option>
                              <option value="Anguilla" data-countryCode="AI">Anguilla</option>
                              <option value="Antarctica" data-countryCode="AQ">Antarctica</option>
                              <option value="Antigua and Barbuda" data-countryCode="AG">Antigua and Barbuda</option>
                              <option value="Argentina" data-countryCode="AR">Argentina</option>
                              <option value="Armenia" data-countryCode="AM">Armenia</option>
                              <option value="Aruba" data-countryCode="AW">Aruba</option>
                              <option value="Australia" data-countryCode="AU">Australia</option>
                              <option value="Austria" data-countryCode="AT">Austria</option>
                              <option value="Azerbaijan" data-countryCode="AZ">Azerbaijan</option>
                              <option value="Bahamas" data-countryCode="BS">Bahamas</option>
                              <option value="Bahrain" data-countryCode="BH">Bahrain</option>
                              <option value="Bangladesh" data-countryCode="BD">Bangladesh</option>
                              <option value="Barbados" data-countryCode="BB">Barbados</option>
                              <option value="Belarus" data-countryCode="BY">Belarus</option>
                              <option value="Belgium" data-countryCode="BE">Belgium</option>
                              <option value="Belize" data-countryCode="BZ">Belize</option>
                              <option value="Benin" data-countryCode="BJ">Benin</option>
                              <option value="Bermuda" data-countryCode="BM">Bermuda</option>
                              <option value="Bhutan" data-countryCode="BT">Bhutan</option>
                              <option value="Bolivia" data-countryCode="BO">Bolivia</option>
                              <option value="Bosnia and Herzegovina" data-countryCode="BA">Bosnia and Herzegovina
                              </option>
                              <option value="Botswana" data-countryCode="BW">Botswana</option>
                              <option value="Bouvet Island" data-countryCode="BV">Bouvet Island</option>
                              <option value="Brazil" data-countryCode="BR">Brazil</option>
                              <option value="British Indian Ocean Territory" data-countryCode="IO">British Indian
                                  Ocean Territory</option>
                              <option value="Brunei Darussalam" data-countryCode="BN">Brunei Darussalam</option>
                              <option value="Bulgaria" data-countryCode="BG">Bulgaria</option>
                              <option value="Burkina Faso" data-countryCode="BF">Burkina Faso</option>
                              <option value="Burundi" data-countryCode="BI">Burundi</option>
                              <option value="Cambodia" data-countryCode="KH">Cambodia</option>
                              <option value="Cameroon" data-countryCode="CM">Cameroon</option>
                              <option value="Canada" data-countryCode="CA">Canada</option>
                              <option value="Cape Verde" data-countryCode="CV">Cape Verde</option>
                              <option value="Cayman Islands" data-countryCode="KY">Cayman Islands</option>
                              <option value="Central African Republic" data-countryCode="CF">Central African Republic
                              </option>
                              <option value="Chad" data-countryCode="TD">Chad</option>
                              <option value="Chile" data-countryCode="CL">Chile</option>
                              <option value="China" data-countryCode="CN">China</option>
                              <option value="Colombia" data-countryCode="CO">Colombia</option>
                              <option value="Comoros" data-countryCode="KM">Comoros</option>
                              <option value="Congo" data-countryCode="CG">Congo</option>
                              <option value="Cook Islands" data-countryCode="CK">Cook Islands</option>
                              <option value="Costa Rica" data-countryCode="CR">Costa Rica</option>
                              <option value="Cote D'Ivoire" data-countryCode="CI">Cote D'Ivoire</option>
                              <option value="Croatia" data-countryCode="HR">Croatia</option>
                              <option value="Cuba" data-countryCode="CU">Cuba</option>
                              <option value="Cyprus" data-countryCode="CY">Cyprus</option>
                              <option value="Czech Republic" data-countryCode="CZ">Czech Republic</option>
                              <option value="Democratic People's Republic of Korea" data-countryCode="KP">Democratic
                                  People's Republic of Korea</option>
                              <option value="Denmark" data-countryCode="DK">Denmark</option>
                              <option value="Djibouti" data-countryCode="DJ">Djibouti</option>
                              <option value="Dominica" data-countryCode="DM">Dominica</option>
                              <option value="Dominican Republic" data-countryCode="DO">Dominican Republic</option>
                              <option value="Ecuador" data-countryCode="EC">Ecuador</option>
                              <option value="Egypt" data-countryCode="EG">Egypt</option>
                              <option value="El Salvador" data-countryCode="SV">El Salvador</option>
                              <option value="Equatorial Guinea" data-countryCode="GQ">Equatorial Guinea</option>
                              <option value="Eritrea" data-countryCode="ER">Eritrea</option>
                              <option value="Estonia" data-countryCode="EE">Estonia</option>
                              <option value="Ethiopia" data-countryCode="ET">Ethiopia</option>
                              <option value="Falkland Islands (Malvinas)" data-countryCode="FK">Falkland Islands
                                  (Malvinas)</option>
                              <option value="Faroe Islands" data-countryCode="FO">Faroe Islands</option>
                              <option value="Federated States of Micronesia" data-countryCode="FM">Federated States of
                                  Micronesia</option>
                              <option value="Fiji" data-countryCode="FJ">Fiji</option>
                              <option value="Finland" data-countryCode="AX">Finland</option>
                              <option value="Finland" data-countryCode="FI">Finland</option>
                              <option value="France" data-countryCode="FR">France</option>
                              <option value="French Guiana" data-countryCode="GF">French Guiana</option>
                              <option value="French Polynesia" data-countryCode="PF">French Polynesia</option>
                              <option value="French Southern Territories" data-countryCode="TF">French Southern
                                  Territories</option>
                              <option value="Gabon" data-countryCode="GA">Gabon</option>
                              <option value="Gambia" data-countryCode="GM">Gambia</option>
                              <option value="Georgia" data-countryCode="GE">Georgia</option>
                              <option value="Germany" data-countryCode="DE">Germany</option>
                              <option value="Ghana" data-countryCode="GH">Ghana</option>
                              <option value="Gibraltar" data-countryCode="GI">Gibraltar</option>
                              <option value="Greece" data-countryCode="GR">Greece</option>
                              <option value="Greenland" data-countryCode="GL">Greenland</option>
                              <option value="Grenada" data-countryCode="GD">Grenada</option>
                              <option value="Guadeloupe" data-countryCode="GP">Guadeloupe</option>
                              <option value="Guam" data-countryCode="GU">Guam</option>
                              <option value="Guatemala" data-countryCode="GT">Guatemala</option>
                              <option value="Guernsey" data-countryCode="GG">Guernsey</option>
                              <option value="Guinea" data-countryCode="GN">Guinea</option>
                              <option value="Guinea-Bissau" data-countryCode="GW">Guinea-Bissau</option>
                              <option value="Guyana" data-countryCode="GY">Guyana</option>
                              <option value="Haiti" data-countryCode="HT">Haiti</option>
                              <option value="Holy See (Vatican City State)" data-countryCode="VA">Holy See (Vatican
                                  City State)</option>
                              <option value="Honduras" data-countryCode="HN">Honduras</option>
                              <option value="Hong Kong" data-countryCode="HK">Hong Kong</option>
                              <option value="Hungary" data-countryCode="HU">Hungary</option>
                              <option value="Iceland" data-countryCode="IS">Iceland</option>
                              <option value="India" data-countryCode="IN">India</option>
                              <option value="Indonesia" data-countryCode="ID">Indonesia</option>
                              <option value="Iraq" data-countryCode="IQ">Iraq</option>
                              <option value="Ireland" data-countryCode="IE">Ireland</option>
                              <option value="Islamic Republic of Iran" data-countryCode="IR">Islamic Republic of Iran
                              </option>
                              <option value="Isle of Man" data-countryCode="IM">Isle of Man</option>
                              <option value="Israel" data-countryCode="IL">Israel</option>
                              <option value="Italy" data-countryCode="IT">Italy</option>
                              <option value="Jamaica" data-countryCode="JM">Jamaica</option>
                              <option value="Japan" data-countryCode="JP">Japan</option>
                              <option value="Jersey" data-countryCode="JE">Jersey</option>
                              <option value="Jordan" data-countryCode="JO">Jordan</option>
                              <option value="Kazakhstan" data-countryCode="KZ">Kazakhstan</option>
                              <option value="Kenya" data-countryCode="KE">Kenya</option>
                              <option value="Kiribati" data-countryCode="KI">Kiribati</option>
                              <option value="Kuwait" data-countryCode="KW">Kuwait</option>
                              <option value="Kyrgyzstan" data-countryCode="KG">Kyrgyzstan</option>
                              <option value="Lao People's Democratic Republic" data-countryCode="LA">Lao People's
                                  Democratic Republic</option>
                              <option value="Latvia" data-countryCode="LV">Latvia</option>
                              <option value="Lebanon" data-countryCode="LB">Lebanon</option>
                              <option value="Lesotho" data-countryCode="LS">Lesotho</option>
                              <option value="Liberia" data-countryCode="LR">Liberia</option>
                              <option value="Libyan Arab Jamahiriya" data-countryCode="LY">Libyan Arab Jamahiriya
                              </option>
                              <option value="Liechtenstein" data-countryCode="LI">Liechtenstein</option>
                              <option value="Lithuania" data-countryCode="LT">Lithuania</option>
                              <option value="Luxembourg" data-countryCode="LU">Luxembourg</option>
                              <option value="Macao" data-countryCode="MO">Macao</option>
                              <option value="Madagascar" data-countryCode="MG">Madagascar</option>
                              <option value="Malawi" data-countryCode="MW">Malawi</option>
                              <option value="Malaysia" data-countryCode="MY">Malaysia</option>
                              <option value="Maldives" data-countryCode="MV">Maldives</option>
                              <option value="Mali" data-countryCode="ML">Mali</option>
                              <option value="Malta" data-countryCode="MT">Malta</option>
                              <option value="Marshall Islands" data-countryCode="MH">Marshall Islands</option>
                              <option value="Martinique" data-countryCode="MQ">Martinique</option>
                              <option value="Mauritania" data-countryCode="MR">Mauritania</option>
                              <option value="Mauritius" data-countryCode="MU">Mauritius</option>
                              <option value="Mayotte" data-countryCode="YT">Mayotte</option>
                              <option value="Mexico" data-countryCode="MX">Mexico</option>
                              <option value="Monaco" data-countryCode="MC">Monaco</option>
                              <option value="Mongolia" data-countryCode="MN">Mongolia</option>
                              <option value="Montenegro" data-countryCode="ME">Montenegro</option>
                              <option value="Montserrat" data-countryCode="MS">Montserrat</option>
                              <option value="Morocco" data-countryCode="MA">Morocco</option>
                              <option value="Mozambique" data-countryCode="MZ">Mozambique</option>
                              <option value="Myanmar" data-countryCode="MM">Myanmar</option>
                              <option value="Namibia" data-countryCode="NA">Namibia</option>
                              <option value="Nauru" data-countryCode="NR">Nauru</option>
                              <option value="Nepal" data-countryCode="NP">Nepal</option>
                              <option value="Netherlands" data-countryCode="NL">Netherlands</option>
                              <option value="Netherlands Antilles" data-countryCode="AN">Netherlands Antilles</option>
                              <option value="New Caledonia" data-countryCode="NC">New Caledonia</option>
                              <option value="New Zealand" data-countryCode="NZ">New Zealand</option>
                              <option value="Nicaragua" data-countryCode="NI">Nicaragua</option>
                              <option value="Niger" data-countryCode="NE">Niger</option>
                              <option value="Nigeria" data-countryCode="NG">Nigeria</option>
                              <option value="Niue" data-countryCode="NU">Niue</option>
                              <option value="Norfolk Island" data-countryCode="NF">Norfolk Island</option>
                              <option value="Northern Mariana Islands" data-countryCode="MP">Northern Mariana Islands
                              </option>
                              <option value="Norway" data-countryCode="NO">Norway</option>
                              <option value="Oman" data-countryCode="OM">Oman</option>
                              <option value="Pakistan" data-countryCode="PK">Pakistan</option>
                              <option value="Palau" data-countryCode="PW">Palau</option>
                              <option value="Palestinian Territory, Occupied" data-countryCode="PS">Palestinian
                                  Territory, Occupied</option>
                              <option value="Panama" data-countryCode="PA">Panama</option>
                              <option value="Papua New Guinea" data-countryCode="PG">Papua New Guinea</option>
                              <option value="Paraguay" data-countryCode="PY">Paraguay</option>
                              <option value="Peru" data-countryCode="PE">Peru</option>
                              <option value="Philippines" data-countryCode="PH">Philippines</option>
                              <option value="Poland" data-countryCode="PL">Poland</option>
                              <option value="Portugal" data-countryCode="PT">Portugal</option>
                              <option value="Puerto Rico" data-countryCode="PR">Puerto Rico</option>
                              <option value="Qatar" data-countryCode="QA">Qatar</option>
                              <option value="Republic of Korea" data-countryCode="KR">Republic of Korea</option>
                              <option value="Republic of Moldova" data-countryCode="MD">Republic of Moldova</option>
                              <option value="Reunion" data-countryCode="RE">Reunion</option>
                              <option value="Romania" data-countryCode="RO">Romania</option>
                              <option value="Russian Federation" data-countryCode="RU">Russian Federation</option>
                              <option value="Rwanda" data-countryCode="RW">Rwanda</option>
                              <option value="Saint Kitts and Nevis" data-countryCode="KN">Saint Kitts and Nevis
                              </option>
                              <option value="Saint Lucia" data-countryCode="LC">Saint Lucia</option>
                              <option value="Saint Martin" data-countryCode="MF">Saint Martin</option>
                              <option value="Saint Pierre and Miquelon" data-countryCode="PM">Saint Pierre and
                                  Miquelon</option>
                              <option value="Saint Vincent and The Grenadines" data-countryCode="VC">Saint Vincent and
                                  The Grenadines</option>
                              <option value="Samoa" data-countryCode="WS">Samoa</option>
                              <option value="San Marino" data-countryCode="SM">San Marino</option>
                              <option value="Sao Tome and Principe" data-countryCode="ST">Sao Tome and Principe
                              </option>
                              <option value="Saudi Arabia" data-countryCode="SA">Saudi Arabia</option>
                              <option value="Senegal" data-countryCode="SN">Senegal</option>
                              <option value="Serbia" data-countryCode="RS">Serbia</option>
                              <option value="Serbia and Montenegro" data-countryCode="CS">Serbia and Montenegro
                              </option>
                              <option value="Seychelles" data-countryCode="SC">Seychelles</option>
                              <option value="Sierra Leone" data-countryCode="SL">Sierra Leone</option>
                              <option value="Singapore" data-countryCode="SG">Singapore</option>
                              <option value="Slovakia" data-countryCode="SK">Slovakia</option>
                              <option value="Slovenia" data-countryCode="SI">Slovenia</option>
                              <option value="Solomon Islands" data-countryCode="SB">Solomon Islands</option>
                              <option value="Somalia" data-countryCode="SO">Somalia</option>
                              <option value="South Africa" data-countryCode="ZA">South Africa</option>
                              <option value="South Georgia and The South Sandwich Islands" data-countryCode="GS">South
                                  Georgia and The South Sandwich Islands</option>
                              <option value="South Sudan" data-countryCode="SS">South Sudan</option>
                              <option value="Spain" data-countryCode="ES">Spain</option>
                              <option value="Sri Lanka" data-countryCode="LK">Sri Lanka</option>
                              <option value="Sudan" data-countryCode="SD">Sudan</option>
                              <option value="Suriname" data-countryCode="SR">Suriname</option>
                              <option value="Swaziland" data-countryCode="SZ">Swaziland</option>
                              <option value="Sweden" data-countryCode="SE">Sweden</option>
                              <option value="Switzerland" data-countryCode="CH">Switzerland</option>
                              <option value="Syrian Arab Republic" data-countryCode="SY">Syrian Arab Republic</option>
                              <option value="Taiwan" data-countryCode="TW">Taiwan</option>
                              <option value="Tajikistan" data-countryCode="TJ">Tajikistan</option>
                              <option value="Thailand" data-countryCode="TH">Thailand</option>
                              <option value="The Democratic Republic of The Congo" data-countryCode="CD">The
                                  Democratic Republic of The Congo</option>
                              <option value="The Former Yugoslav Republic of Macedonia" data-countryCode="MK">The
                                  Former Yugoslav Republic of Macedonia</option>
                              <option value="Timor-Leste" data-countryCode="TL">Timor-Leste</option>
                              <option value="Togo" data-countryCode="TG">Togo</option>
                              <option value="Tokelau" data-countryCode="TK">Tokelau</option>
                              <option value="Tonga" data-countryCode="TO">Tonga</option>
                              <option value="Trinidad and Tobago" data-countryCode="TT">Trinidad and Tobago</option>
                              <option value="Tunisia" data-countryCode="TN">Tunisia</option>
                              <option value="Turkey" data-countryCode="TR">Turkey</option>
                              <option value="Turkmenistan" data-countryCode="TM">Turkmenistan</option>
                              <option value="Turks and Caicos Islands" data-countryCode="TC">Turks and Caicos Islands
                              </option>
                              <option value="Tuvalu" data-countryCode="TV">Tuvalu</option>
                              <option value="Uganda" data-countryCode="UG">Uganda</option>
                              <option value="Ukraine" data-countryCode="UA">Ukraine</option>
                              <option value="United Arab Emirates" data-countryCode="AE">United Arab Emirates</option>
                              <option value="United Kingdom of Great Britain and Northern Ireland"
                                  data-countryCode="GB">United Kingdom of Great Britain and Northern Ireland</option>
                              <option value="United Republic of Tanzania" data-countryCode="TZ">United Republic of
                                  Tanzania</option>
                              <option value="United States Minor Outlying Islands" data-countryCode="UM">United States
                                  Minor Outlying Islands</option>
                              <option value="United States of America" data-countryCode="US" selected="selected">
                                  United States of America</option>
                              <option value="Uruguay" data-countryCode="UY">Uruguay</option>
                              <option value="Uzbekistan" data-countryCode="UZ">Uzbekistan</option>
                              <option value="Vanuatu" data-countryCode="VU">Vanuatu</option>
                              <option value="Venezuela" data-countryCode="VE">Venezuela</option>
                              <option value="Viet Nam" data-countryCode="VN">Viet Nam</option>
                              <option value="Virgin Islands, British" data-countryCode="VG">Virgin Islands, British
                              </option>
                              <option value="Virgin Islands, U.S." data-countryCode="VI">Virgin Islands, U.S.</option>
                              <option value="Wallis and Futuna" data-countryCode="WF">Wallis and Futuna</option>
                              <option value="Yemen" data-countryCode="YE">Yemen</option>
                              <option value="Zambia" data-countryCode="ZM">Zambia</option>
                              <option value="Zimbabwe" data-countryCode="ZW">Zimbabwe</option>
                          </select>
                          <div class="invalid-feedback"> Please select a valid country. </div>
                      </div> */}
                </div>
                <div class="row">
                  <div class="col-lg-5 col-md-6 mb-3">
                    {" "}
                    <input
                      type="text"
                      class="form-control"
                      name="statename"
                      minlength="4"
                      id="statename"
                      placeholder="State"
                      required
                    />
                    <div class="invalid-feedback">
                      {" "}
                      Please provide a valid state.{" "}
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-6 mb-3">
                    {" "}
                    <input
                      type="text"
                      class="form-control"
                      id="city"
                      name="city"
                      placeholder="City"
                      required
                    />
                    <div class="invalid-feedback">
                      {" "}
                      Valid last name is required.{" "}
                    </div>
                  </div>
                  <div class="col-lg-3 mb-3">
                    {" "}
                    <input
                      type="text"
                      class="form-control"
                      name="zipcode"
                      minlength="4"
                      min="0"
                      id="zip"
                      placeholder="Zip Code"
                      required
                    />
                    <div class="invalid-feedback"> Zip code required. </div>
                  </div>
                </div>
                <h4 class="justify-content-between align-items-center mb-3 mt-3 section-heading">
                  {" "}
                  <span class="badge badge-secondary display-desktop">
                    2
                  </span>{" "}
                  {/* <span class="badge badge-secondary display-mobile">3</span>{" "} */}
                  <span>Payment Information</span>{" "}
                </h4>
                <div class="row">
                  <div class="col-md-12" id="bt-dropin">
                    <div class="form-row">
                      {" "}
                      <label for="card-element"> </label>
                      <div id="card-element"></div>
                      <div id="card-errors" role="alert"></div>
                    </div>
                  </div>
                </div>
                <hr class="mb-4" />{" "}
                <input
                  type="hidden"
                  id="final_itemprice"
                  name="itemprice"
                  class="itemprice"
                  value="99"
                />{" "}
                <input
                  type="hidden"
                  name="itemname"
                  id="itemname"
                  class="itemname"
                  value="Standard Logo"
                />{" "}
                <input
                  type="hidden"
                  name="ptoken"
                  value="4d75cf92408e22788520b46de6d6cc087e108bcb"
                />{" "}
                <input type="hidden" name="category" value="Logo Design" />{" "}
                <input type="hidden" name="discount" id="discount" value="" />{" "}
                <input
                  type="hidden"
                  name="original_amount"
                  id="original_amount"
                  value="99"
                />{" "}
                <input type="hidden" name="payment_gateway" value="Stripe_lo" />{" "}
                <input type="hidden" name="currency" value="USD" />
                <input
                  type="hidden"
                  name="sale_type"
                  value="Fresh Sales"
                />{" "}
                <input
                  type="hidden"
                  id="brief_id"
                  name="brief_id"
                  class="brief_id"
                  value=""
                />{" "}
                <input
                  type="hidden"
                  id="item_desc"
                  name="item_desc"
                  class="item_desc"
                  value=""
                />{" "}
                <input type="hidden" name="salesman" value="" />
                <input
                  type="hidden"
                  id="coupon_id"
                  name="coupon_id"
                  class="coupon_id"
                  value=""
                />{" "}
                <input type="hidden" id="nonce" name="payment_method_nonce" />{" "}
                <input
                  type="hidden"
                  id="currency_symbol"
                  name="currency_symbol"
                  value="$"
                />{" "}
                <button
                  className="btn btn-primary btn-lg btn-block"
                  id="card-button"
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "0.5rem 1rem",
                    fontSize: "1.25rem",
                    lineHeight: "1.5",
                    borderRadius: "0.3rem",
                    color: "#fff",
                    backgroundColor: "#007bff",
                    borderColor: "#007bff",
                    // transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
                    //   border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
                    // user-select: none;
                    // border: 1px solid transparent;
                    // font-weight: 400;
                    // text-align: center;
                    // white-space: nowrap;
                    // vertical-align: middle;
                  }}
                >
                  Pay Now
                </button>
                <div class="card-errors"></div>
              </form>
            </div>
          </div>
          <div
            class="modal fade"
            id="threeDSecure-Modal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            data-backdrop="static"
            data-keyboard="false"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-body" id="threeDIframe_Body">
                  {" "}
                </div>
              </div>
            </div>
          </div>
          <footer class=" pt-5 text-muted text-center text-small"> </footer>
        </div>
      </div>
    </div>
  );
};

export default Payment;
