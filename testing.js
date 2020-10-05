// ABC Las vegas script

// global vars

// need to test this to see if I can put all vars here or at the bottom
// var contact = document.querySelectorAll('#gform_submit_button_3276') 

// start of fns 

// Contact Form
jQuery(document).on("gform_confirmation_loaded", function(event, formId){
    console.log('testing from BrandLync');
	    window.dataLayer.push({
     'event': 'form_submitted'
    });

});

const contactForm = () => {
    var contact = document.querySelectorAll('#gform_submit_button_3748');

    for(var i = 0; i < contact.length; i++){
        contact[i].addEventListener("click", myFunk);
    }

    function myFunk() {
      console.log("CLICKED Contact Form!");
        return window.dataLayer.push ({ 'event': 'contact_form'})
    }
}

contactForm()

// Directions 
const directions = () => {
    var dir = document.querySelectorAll('placeHolder');

    for(var i = 0; i < dir.length; i++){
        dir[i].addEventListener("click", myFunk);
    }

    function myFunk() {
      console.log("CLICKED Directions!");
        return window.dataLayer.push ({ 'event': 'directions'})
    }
}

directions()

// Order Parts 
const orderParts = () => {
    var Order = document.querySelectorAll('#gform_submit_button_2');

    for(var i = 0; i < Order.length; i++){
        Order[i].addEventListener("click", myFunk);
    }

    function myFunk() {
      console.log("CLICKED order parts!");
        return window.dataLayer.push ({ 'event': 'order_parts'})
    }
}

orderParts()

// SRP-CPO-ePrice-Form
const srpCpoEprice = () => {
if (window.location.href.indexOf("certified-pre-owned") != -1){
    console.log("on CPO page")
    var cpoePrice = document.querySelectorAll('.lightning-custom-cta');
	console.log('var was set')
    for(var i = 0; i < cpoePrice.length; i++){
        cpoePrice[i].addEventListener("click", myFunk);
    }
	console.log('after loop')
}
    function myFunk() {
        console.log("CLICKED SRP-CPO-ePrice-Form!");
        return window.dataLayer.push ({ 'event': 'srp-cpo-eprice-form'})
    }
	console.log('completed')
}

srpCpoEprice()

// SRP-New-ePrice-Form
const srpNewEprice = () => {
if (window.location.href.indexOf("new") != -1 && window.location.href.indexOf("inventory") == -1){
    var newEprice = document.querySelectorAll('.lightning-custom-cta');

    for(var i = 0; i < newEprice.length; i++){
        newEprice[i].addEventListener("click", myFunk);
    }
}

    function myFunk() {
      console.log("CLICKED SRP-New-ePrice-Form !");
        return window.dataLayer.push ({ 'event': 'srp-new-eprice-form'})
    }
}

srpNewEprice()

// SRP-Used-ePrice-Form
const srpUsedEprice = () => {
if (window.location.href.indexOf("used") != -1 && window.location.href.indexOf("inventory") == -1){
    var usedEprice = document.querySelectorAll('.lightning-custom-cta');

    for(var i = 0; i < usedEprice.length; i++){
        usedEprice[i].addEventListener("click", myFunk);
    }
}

    function myFunk() {
      console.log("CLICKED SRP-Used-ePrice-Form !");
        return window.dataLayer.push ({ 'event': 'srp-used-eprice-form'})
    }
}

srpUsedEprice()

// VDP-New-ePrice
const vdpNewEpriceForm = () => {
if (window.location.href.indexOf("inventory/new-") != -1){
    var vdpNewEprice = document.querySelectorAll('.vdp-pricebox-cta-button');
    var vdpNewEprice2 = document.querySelectorAll('.online-shopper-cta-button');

    for(var i = 0; i < vdpNewEprice.length; i++){
        vdpNewEprice[i].addEventListener("click", myFunk);
    }

    for(var i = 0; i < vdpNewEprice2.length; i++){
        vdpNewEprice2[i].addEventListener("click", myFunk);
    }
}

    function myFunk() {
      console.log("CLICKED VDP-New-ePrice-Form !");
        return window.dataLayer.push ({ 'event': 'vdp-new-eprice-form'})
    }
}

vdpNewEpriceForm()

// VDP-Used-ePrice
const vdpUsedEpriceForm = () => {
    if (window.location.href.indexOf("inventory/used-") != -1){
        var vdpUsedEprice = document.querySelectorAll('.vdp-pricebox-cta-button');
        var vdpUsedEprice2 = document.querySelectorAll('.online-shopper-cta-button');
    
        for(var i = 0; i < vdpUsedEprice.length; i++){
            vdpUsedEprice[i].addEventListener("click", myFunk);
        }
        for(var i = 0; i < vdpUsedEprice2.length; i++){
            vdpUsedEprice2[i].addEventListener("click", myFunk);
        }
    }
    
        function myFunk() {
          console.log("CLICKED VDP-Used-ePrice-Form !");
            return window.dataLayer.push ({ 'event': 'vdp-used-eprice-form'})
        }
    }
    
vdpUsedEpriceForm()

//Test Drive
const testDrive = () => {
    var tDrive = document.querySelectorAll('Place-Holder');

    for(var i = 0; i < tDrive.length; i++){
        tDrive[i].addEventListener("click", myFunk);
    }

    function myFunk() {
      console.log("CLICKED test drive!");
        return window.dataLayer.push ({ 'event': 'test_drive'})
    }
}
testDrive()


// start of BL2

// contact us pageview
const contactPage = () => {
    if (window.location.href.indexOf("contact-us") != -1){
        console.log("Contact Pageviewed")
        return window.dataLayer.push ({ 'event': 'contact_pageview'})
    }
}
contactPage()

// coupon Page
const couponPage = () => {
    if (window.location.href.indexOf("service-specials") != -1){
        console.log('coupon pageview');
        return window.dataLayer.push({ 'event': 'coupon_pageview' })
    }
}
couponPage()

// finance pageview
const financePage = () => {
    if (window.location.href.indexOf("finance") != -1){
        console.log("finance pageview")
        return window.dataLayer.push({ 'event': 'finance_page'})
    }
}
financePage()

// New Specials Pageview
const newSpecialsPage = () => {
    if (window.location.href.indexOf("new-vehicle-specials") != -1){
        console.log("finance pageview")
        return window.dataLayer.push({ 'event': 'new_specials_page'})
    }
}
newSpecialsPage()

// Order Parts Pageview
const orderPartsPage = () => {
    if (window.location.href.indexOf("order-parts") != -1){
        console.log("finance pageview")
        return window.dataLayer.push({ 'event': 'order_parts'})
    }
}
orderPartsPage()

// Print Coupons
const printCoupons = () => {
    var print = document.querySelectorAll('difo-type-print');

    for(var i = 0; i < print.length; i++){
        print[i].addEventListener("click", myFunk);
    }

    function myFunk() {
      console.log("CLICKED Print Coupon!");
        return window.dataLayer.push ({ 'event': 'print_coupons'})
    }
}
printCoupons()

// Schedule Service Pageview
const scheduleServicePage = () => {
    if (window.location.href.indexOf("schedule") != -1){
        console.log('coupon pageview');
        return window.dataLayer.push({ 'event': 'schedule_service'})
    }
}
scheduleServicePage()

// SRP CPO Pageview
const srpCpoPage = () => {
    if(window.location.href.indexOf("certified-pre-owned") != -1){
        console.log('SRP CPO pageview');
        return window.dataLayer.push({ 'event': 'srp_cpo'})
    }
}
srpCpoPage()

// SRP New Pageview
const srpNewPage = () => {
    if(window.location.href.indexOf("new-vehicles") != -1){
        console.log('SRP new pageview');
        return window.dataLayer.push({ 'event': 'srp_new'})
    }
}
srpNewPage()

// SRP Used Pageview
const srpUsedPage = () => {
    if(window.location.href.indexOf("used-vehicles") != -1){
        console.log('SRP used pageview');
        return window.dataLayer.push({ 'event': 'srp_used'})
    }
}
srpUsedPage()

// VYT Pageview
const vytPage = () => {
    if(window.location.href.indexOf("value-your-trade") != -1){
        console.log('SRP VYT pageview');
        return window.dataLayer.push({ 'event': 'VYT'})
    }
}
vytPage()

// VDP New Pageview
const vdpNewPage = () => {
    if(window.location.href.indexOf("new") != -1 && window.location.href.indexOf("inventory") != -1){
        console.log('VDP New pageview');
        return window.dataLayer.push({ 'event': 'vdp_new'})
    }
}
vdpNewPage()

// VDP Used Pageview
const vdpUsedPage = () => {
    if(window.location.href.indexOf("used") != -1 && window.location.href.indexOf("inventory") != -1){
        console.log('VDP Used pageview');
        return window.dataLayer.push({ 'event': 'vdp_used'})
    }
}
vdpUsedPage()
