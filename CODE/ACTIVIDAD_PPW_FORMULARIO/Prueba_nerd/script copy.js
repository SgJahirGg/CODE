const countryCityMap = {
    "Ecuador": ["Guayaquil", "Quito", "Cuenca"],
    "Colombia": ["Bogotá", "Medellín", "Cali"],
    "Perú": ["Lima", "Arequipa", "Cusco"],
    "Alemania": ["Berlín", "Múnich", "Hamburgo"]
};

document.getElementById("country").addEventListener("change", (event) => {
    const selectedCountry = event.target.value;
    const citySelect = document.getElementById("city");

    citySelect.innerHTML = "<option value=''>Seleccione...</option>";

    if (countryCityMap[selectedCountry]) {
        countryCityMap[selectedCountry].forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
});

document.getElementById("saveButton").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const country = document.getElementById("country").value;
    const city = document.getElementById("city").value;

    if (name && lastName && email && country && city) {
        document.getElementById("outputName").textContent = name;
        document.getElementById("outputLastName").textContent = lastName;
        document.getElementById("outputEmail").textContent = email;
        document.getElementById("outputCountry").textContent = country;
        document.getElementById("outputCity").textContent = city;

        document.getElementById("personalDataForm").classList.add("hidden");
        document.getElementById("output").classList.remove("hidden");
    } else {
        alert("Por favor, complete todos los campos antes de guardar.");
    }
});

document.getElementById("closeButton").addEventListener("click", () => {
    document.getElementById("output").classList.add("hidden");
    document.getElementById("personalDataForm").classList.remove("hidden");

    document.getElementById("personalDataForm").reset();
});
