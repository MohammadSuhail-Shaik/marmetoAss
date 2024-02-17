async function fetchData() {
  try {
    const response = await fetch(
      "https://dogs-care.onrender.com/api/dogs_care"
    );
    const data = await response.json();
    displayProducts(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayProducts(products) {
  const productsContainer = document.getElementById("products-container");
  productsContainer.innerHTML = ""; // Clear previous content

  products.forEach((product) => {
    // Create product container
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    // Create container for title, summary, and button
    const infoContainer = document.createElement("div");
    infoContainer.classList.add("info-container");

    // Create title element
    const titleElement = document.createElement("h3");
    titleElement.textContent = product.text_title;

    // Create summary element
    const summaryElement = document.createElement("p");
    summaryElement.textContent = product.text_summary;

    // Create button element
    const buttonElement = document.createElement("button");
    buttonElement.textContent = "Shop Now >";
    buttonElement.classList.add("btn");

    // Append title, summary, and button to info container
    infoContainer.appendChild(titleElement);
    infoContainer.appendChild(summaryElement);
    infoContainer.appendChild(buttonElement);

    // Create container for images
    const imagesContainer = document.createElement("div");
    imagesContainer.classList.add("images-container");

    // Create image elements and append them to images container
    for (let i = 1; i <= 5; i++) {
      const imageElement = document.createElement("img");
      imageElement.src = product[`image${i}`];
      imageElement.alt = `image${i}`;
      imagesContainer.classList.add("img-con");
      imagesContainer.appendChild(imageElement);
    }

    // Append info container and images container to product container
    productElement.appendChild(infoContainer);
    productElement.appendChild(imagesContainer);

    // Append product container to products container
    productsContainer.classList.add("main");
    productsContainer.appendChild(productElement);
  });
}

fetchData();
