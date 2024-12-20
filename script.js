const inputs = document.querySelectorAll("input");
const toggle = document.getElementById('toggle');
const labels = document.querySelectorAll('.label');
const nextStep1 = document.querySelector("#next-step-1");
const nextStep2 = document.querySelector("#next-step-2");
const goBack1 = document.querySelector("#go-back-1");
const nextStep3 = document.querySelector("#next-step-3");
const goBack2 = document.querySelector("#go-back-2");
const nextStep4 = document.querySelector("#next-step-4");
const goBack3 = document.querySelector("#go-back-3");
const personalInputs = document.querySelectorAll(".personal-info input");
const sidebarSteps = document.querySelectorAll(".step-num");
const personal = document.querySelector(".personal-info");
const plan = document.querySelector(".select-plan");
const addOns = document.querySelector(".add-ons");

const freeMonths = document.querySelectorAll(`.plan-item span`);
const priceLabels = document.querySelectorAll(`.plan-item p`);
const arcade = document.querySelector(`#arcade`);
const advanced = document.querySelector(`#advanced`);
const pro = document.querySelector(`#pro`);

const onsPrices = document.querySelectorAll(`.add-ons span`);
const checkBoxs = document.querySelectorAll(`.add-ons input`);
const service = document.querySelector(`#service`);
const storge = document.querySelector(`#storge`);
const profile = document.querySelector(`#profile`);

const summary = document.querySelector(".summary");
const totalTitle = document.querySelector(".total h2");
const totalPrice = document.querySelector(".total span");
const planTitle = document.querySelector(".plan-details h2");
const planPrice = document.querySelector(".plan-details span");
const addOnsBox = document.querySelector(`.add-ons-details`);

const confirmation = document.querySelector(`.confirmation`);

let currentPlan = "arcade";
let currentPeriod = "Monthly";
let ons = [];
let total_price = 0;

document.addEventListener("DOMContentLoaded", () => {
    inputs.forEach(input => {
        input.addEventListener("blur", () => {
            input.classList.add("touched");
        });
    });
});

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        labels[0].classList.remove('active');
        labels[1].classList.add('active');
    } else {
        labels[0].classList.add('active');
        labels[1].classList.remove('active');
    }
    currentPeriod = toggle.checked? "Yearly" : "Monthly";
    freeMonths.forEach(month => {
        if(currentPeriod == "Yearly"){
            month.style.display = "block";
            priceLabels[0].innerHTML = `$90/yr`;
            priceLabels[1].innerHTML = `$120/yr`;
            priceLabels[2].innerHTML = `$150/yr`;
            onsPrices[0].innerHTML = `$10/yr`;
            onsPrices[1].innerHTML = `$20/yr`;
            onsPrices[2].innerHTML = `$20/yr`;
        }else{
            month.style.display = "none";
            priceLabels[0].innerHTML = `$9/mo`;
            priceLabels[1].innerHTML = `$12/mo`;
            priceLabels[2].innerHTML = `$15/mo`;
            onsPrices[0].innerHTML = `$1/mo`;
            onsPrices[1].innerHTML = `$2/mo`;
            onsPrices[2].innerHTML = `$2/mo`;
        }
    });
});


nextStep1.addEventListener("click", () => {
    sidebarSteps[0].classList.remove("active");
    sidebarSteps[1].classList.add("active");
    personal.style.display = "none";
    plan.style.display = "flex";
});

nextStep2.addEventListener("click", () => {
    sidebarSteps[1].classList.remove("active");
    sidebarSteps[2].classList.add("active");
    plan.style.display = "none";
    addOns.style.display = "flex";
});

nextStep3.addEventListener("click", () => {
    totalTitle.innerHTML = `Total (per ${currentPeriod == "Monthly" ? "Month" : "Year"})`;
    planTitle.innerHTML = `${currentPlan}`;
    if(currentPeriod == "Monthly"){
        if(currentPlan == "arcade"){
            planPrice.innerHTML = '$9/mo';
            total_price += 9;
        }else if(currentPlan == "advanced"){
            planPrice.innerHTML = '$12/mo';
            total_price += 12;
        }else{
            planPrice.innerHTML = '$15/mo';
            total_price += 15;
        }
    }else{
        if(currentPlan == "arcade"){
            planPrice.innerHTML = '$90/yr';
            total_price += 90;
        } else if(currentPlan == "advanced"){
            planPrice.innerHTML = '$120/yr';
            total_price += 120;
        } else{
            planPrice.innerHTML = '$150/yr';
            total_price += 150;
        }
    }
    ons.forEach((on)=>{
        if(currentPeriod == "Monthly"){
            if(on == "Online Service"){
                total_price += 1;
                addOnsBox.innerHTML += `
                    <div class="on-item">
                        <h3>${on}</h3>
                    <p>$1/mo</p>
                    </div>
                `;
            } else{
                total_price += 2;
                addOnsBox.innerHTML += `
                    <div class="on-item">
                        <h3>${on}</h3>
                    <p>$2/mo</p>
                    </div>
                `;
            }
        }else{
            if(on == "Online Service"){
                total_price += 10;
                addOnsBox.innerHTML += `
                    <div class="on-item">
                        <h3>${on}</h3>
                    <p>$10/yr</p>
                    </div>
                `;
            } else{
                total_price += 20;
                addOnsBox.innerHTML += `
                    <div class="on-item">
                        <h3>${on}</h3>
                    <p>$20/yr</p>
                    </div>
                `;
            }
        }
    })   
    totalPrice.innerHTML = `+$${total_price}/${currentPeriod == "Monthly" ? "mo" : "yr"}`;
    sidebarSteps[2].classList.remove("active");
    sidebarSteps[3].classList.add("active");
    addOns.style.display = "none";
    summary.style.display = "flex";
});

nextStep4.addEventListener("click", () => {
    summary.style.display = "none";
    confirmation.style.display = "flex";
});

goBack1.addEventListener("click", () => {
    sidebarSteps[1].classList.remove("active");
    sidebarSteps[0].classList.add("active");
    plan.style.display = "none";
    personal.style.display = "flex";
});

goBack2.addEventListener("click", () => {
    sidebarSteps[2].classList.remove("active");
    sidebarSteps[1].classList.add("active");
    addOns.style.display = "none";
    plan.style.display = "flex";
});

goBack3.addEventListener("click", () => {
    sidebarSteps[3].classList.remove("active");
    sidebarSteps[2].classList.add("active");
    summary.style.display = "none";
    addOns.style.display = "flex";
});

arcade.addEventListener("click", () => {
    arcade.classList.add("choosen");
    advanced.classList.remove("choosen");
    pro.classList.remove("choosen");
    currentPlan = "arcade";
});

advanced.addEventListener("click", () => {
    arcade.classList.remove("choosen");
    advanced.classList.add("choosen");
    pro.classList.remove("choosen");
    currentPlan = "advanced";
});

pro.addEventListener("click", () => {
    arcade.classList.remove("choosen");
    advanced.classList.remove("choosen");
    pro.classList.add("choosen");
    currentPlan = "pro";
});

service.addEventListener("click", () => {
    if(service.classList.contains("choosen")){
        service.classList.remove("choosen");
        ons.splice(ons.indexOf("Online Service"), 1);
        checkBoxs[0].checked = false;
    }else{
        service.classList.add("choosen");
        ons.push("Online Service");
        checkBoxs[0].checked = true;
    }
});

storge.addEventListener("click", () => {
    if(storge.classList.contains("choosen")){
        storge.classList.remove("choosen");
        ons.splice(ons.indexOf("Larger Storage"), 1);
        checkBoxs[1].checked = false;
    }else{
        storge.classList.add("choosen");
        checkBoxs[1].checked = true;
        ons.push("Larger Storage");
    }
});

profile.addEventListener("click", () => {
    if(profile.classList.contains("choosen")){
        profile.classList.remove("choosen");
        ons.splice(ons.indexOf("Customizable Profile"), 1);
        checkBoxs[2].checked = false;
    }else{
        profile.classList.add("choosen");
        ons.push("Customizable Profile");
        checkBoxs[2].checked = true;
    }
});

window.onload = () => {
    localStorage.clear();
    sessionStorage.clear();
    document.querySelectorAll('input').forEach(input => {
        if (input.type === 'checkbox' || input.type === 'radio') {
            input.checked = false;
        } else {
            input.value = '';
        }
    });
    document.querySelectorAll('.label').forEach(label => label.classList.remove('active'));
};
