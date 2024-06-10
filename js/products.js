async function fetchProducts() {
  try {
    let data = await fetch(
      "https://mohammad-bahram.github.io/Snapp_json/db.json"
    );
    let res = await data.json();
    let product = res.products.map((elem) => {
      return `<div
            class="p-2 flex lg:flex-row lg:justify-around lg:items-center flex-wrap md:flex-col md:justify-start md:items-center max-md:flex-col max-md:justify-center max-md:items-center bg-white rounded-[10px] lg:h-[100px]  "
          >
            <div class="w-[fit] h-fit">
              <img class="max-lg:w-[40px] max-lg:h-[40px] lg:w-[58px] lg:h-[58px] object-cover" src="${elem.url}" alt="test" />
            </div>
            <div class="w-fit h-fit flex flex-col justify-center items-center">
              <span class="md:text-[12px] sm:text-[10px] max-sm:text-[8px] ">${elem.title}</span>
              <span class="max-md:hidden md:text-[12px] text-[#a3a3a3 ]"
                >${elem.description}</span
              >
            </div>
          </div>`;
    });
    document
      .querySelector("#root")
      .insertAdjacentHTML("beforeend", product.join(""));
  } catch (error) {
    console.log(error);
  }
}

fetchProducts();
export default {
  fetchProducts,
};
