{
    const calculateResult = (amount, currency) => {
        const rateUSD = 4.36;
        const rateEUR = 4.61;
        const rateGBP = 5.30;
        
        switch (currency) {
            case "USD":
                return amount / rateUSD;
            case "EUR":
                return amount / rateEUR;
            case "GBP":
                return amount / rateGBP;
        }
    };

    const updateResulttext = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;
    };
   
    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResulttext(amount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);

    };
   
    init();
}