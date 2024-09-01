
const apiKey = "MS7sid27CEpWYWcUNfG6zw==0Zlh4wB1DziuGgjo"; // Your API key
// Correct base URL. I'm not using &q= because I added queryParams. It looks like it doesn't work together
const apiUrl = "https://api.api-ninjas.com/v1/mortgagecalculator"; 

// Creating elements and connecting them to HTML(id)
const homeValueElement = document.querySelector(".home_value");
const downpaymentElement = document.querySelector(".downpayment");
const interestRateElement = document.querySelector(".interest_rate");
const durationYearsElement = document.querySelector(".duration_years");
const monthlyPaymentsElement = document.querySelector(".monthly_payment");
const annualPaymentElement = document.querySelector(".annual_payment");
const errorElement = document.querySelector(".error");

const totalElement = document.querySelector(".total");
const mortgageElement = document.querySelector(".mortgage");
const propetryTaxElement = document.querySelector(".property_tax");

const totalElementTwo = document.querySelector(".totalTwo");
const mortgageElementTwo = document.querySelector(".mortgageTwo");
const totalInterestPaidElement = document.querySelector(".total_interest_paid");
const homeInsuranceElement = document.querySelector(".home_insurance");


// Define Dollar and Percent symbols
const Dollar = '$ ';
const Percent = '% ';


// Add event listener to the submit button
document.getElementById('submit_button').addEventListener('click', checkMortgageRate);
//change the color of the button
const buttonElement = document.getElementById('submit_button');
buttonElement.addEventListener("mouseover", 
    (event) => {
        event.target.style.backgroundColor="rgb(225, 214, 150)";
});
//mouseout - color out
buttonElement.addEventListener("mouseout",
    (event) => {
        event.target.style.backgroundColor="";
    });


/**
 * Function to fetch mortgage data from API
 */
async function checkMortgageRate() {
    // Get values from inputs
    const interestRate = parseFloat(document.getElementById('interest_rate').value);
    const homeValue = parseFloat(document.getElementById('home_value').value);
    const downpayment = parseFloat(document.getElementById('downpayment').value);
    const durationYears = parseFloat(document.getElementById('duration_years').value);

/**
Validate required fields
NaN is short for "Not-a-Number". The isNaN() method returns true if a value is NaN. The isNaN() method converts the value to a number before testing it.
 */
    if (isNaN(interestRate) || interestRate <= 0 || interestRate > 10000) {
        errorElement.innerText = "Invalid interest rate. It must be between 0 and 10000.";
        return;
    }

    // Validate optional fields
    if (homeValue !== undefined && downpayment !== undefined) {
        if (downpayment > homeValue) {
            errorElement.innerText = "Downpayment cannot exceed home value.";
            return;
        }
    }

    // Prepare query parameters
    const queryParams = new URLSearchParams();
    queryParams.append('interest_rate', interestRate);
    if (!isNaN(homeValue)) queryParams.append('home_value', homeValue);
    if (!isNaN(downpayment)) queryParams.append('downpayment', downpayment);
    if (!isNaN(durationYears)) queryParams.append('duration_years', durationYears);

    try {
        // Fetch data from API
        const response = await fetch(`${apiUrl}?${queryParams.toString()}`, {
            headers: { 'X-Api-Key': apiKey }
        });

        if (!response.ok) { // Check if response status is not OK (2xx)
            const errorData = await response.text(); // Get error details
            console.error('API error:', errorData);
            errorElement.innerText = "An error occurred while fetching data. Please try again.";
            return;
        }

        // Parse JSON response
        var data = await response.json();
        //alert window to chech if json return an info
        //alert(JSON.stringify(data));

         //Update the UI with the response data. 
        totalElement.innerHTML = Dollar + data.monthly_payment.total;
        mortgageElement.innerHTML = Dollar + data.monthly_payment.mortgage;

        totalElementTwo.innerHTML = Dollar + data.annual_payment.total;
        mortgageElementTwo.innerHTML = Dollar + data.annual_payment.mortgage;
        homeInsuranceElement.innerHTML = Dollar + data.annual_payment.home_insurance;
        totalInterestPaidElement.innerText = Dollar + data.total_interest_paid;
/**
 * 
 * the JSON object that you want to access you need to do it similarly to member variables in a class in C++.
 *  For example, if you want to get the property tax number from the data object you write it like this:
    data.monthly_payment.property.tax

         * {
         * "monthly_payment":
         * {"total":1033,
         * "mortgage":1033,
         * "property_tax":0,
         * "hoa":0,
         * "annual_home_ins":0
         * },
         * 
         * "annual_payment":{
         * "total":12394,
         * "mortgage":12394,
         * "property_tax":0,
         * "hoa":0,
         * "home_insurance":0
         * },
         * "total_interest_paid":141809
         * }
         */


    } catch (error) {
        console.error('Fetch error:', error);
        errorElement.innerText = "An error occurred. Please try again.";
    }
}

