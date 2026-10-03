// ================================
// DỮ LIỆU XE
// ================================

const cars = [
    {
        id: 1,
        brand: "Toyota",
        name: "Toyota Camry 2.5Q",
        price: 1450000000,
        priceText: "1,45 tỷ",
        year: 2025,
        type: "Sedan",
        fuel: "Xăng",
        transmission: "Tự động",
        image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=900&q=80",
        tag: "Mới",
        description:
            "Toyota Camry với thiết kế sang trọng, nội thất cao cấp và nhiều công nghệ hỗ trợ người lái."
    },

    {
        id: 2,
        brand: "Mercedes",
        name: "Mercedes-Benz C200",
        price: 1799000000,
        priceText: "1,799 tỷ",
        year: 2025,
        type: "Sedan",
        fuel: "Xăng",
        transmission: "Tự động",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=80",
        tag: "Hot",
        description:
            "Mercedes-Benz C200 mang phong cách thể thao, sang trọng cùng khả năng vận hành mạnh mẽ."
    },

    {
        id: 3,
        brand: "BMW",
        name: "BMW X5 xDrive40i",
        price: 4299000000,
        priceText: "4,299 tỷ",
        year: 2024,
        type: "SUV",
        fuel: "Xăng",
        transmission: "Tự động",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80",
        tag: "Premium",
        description:
            "BMW X5 là mẫu SUV cao cấp với không gian rộng rãi, động cơ mạnh và nhiều công nghệ hiện đại."
    },

    {
        id: 4,
        brand: "Honda",
        name: "Honda CR-V 1.5 Turbo",
        price: 1180000000,
        priceText: "1,18 tỷ",
        year: 2025,
        type: "SUV",
        fuel: "Xăng",
        transmission: "CVT",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=80",
        tag: "Mới",
        description:
            "Honda CR-V phù hợp cho gia đình với thiết kế hiện đại, không gian rộng và khả năng vận hành ổn định."
    },

    {
        id: 5,
        brand: "Ford",
        name: "Ford Ranger Wildtrak",
        price: 1050000000,
        priceText: "1,05 tỷ",
        year: 2025,
        type: "Bán tải",
        fuel: "Diesel",
        transmission: "Tự động",
        image: "https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=900&q=80",
        tag: "Bán chạy",
        description:
            "Ford Ranger Wildtrak mạnh mẽ, đa dụng, phù hợp cho cả công việc và những chuyến đi xa."
    },

    {
        id: 6,
        brand: "Hyundai",
        name: "Hyundai Santa Fe",
        price: 1390000000,
        priceText: "1,39 tỷ",
        year: 2025,
        type: "SUV",
        fuel: "Xăng",
        transmission: "Tự động",
        image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=900&q=80",
        tag: "Mới",
        description:
            "Hyundai Santa Fe sở hữu thiết kế hiện đại, nội thất tiện nghi và nhiều trang bị an toàn."
    },

    {
        id: 7,
        brand: "Toyota",
        name: "Toyota Veloz Cross",
        price: 720000000,
        priceText: "720 triệu",
        year: 2024,
        type: "MPV",
        fuel: "Xăng",
        transmission: "CVT",
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=900&q=80",
        tag: "Gia đình",
        description:
            "Toyota Veloz Cross là mẫu MPV 7 chỗ phù hợp với gia đình, tiết kiệm nhiên liệu và dễ sử dụng."
    },

    {
        id: 8,
        brand: "Honda",
        name: "Honda Civic RS",
        price: 990000000,
        priceText: "990 triệu",
        year: 2025,
        type: "Sedan",
        fuel: "Xăng",
        transmission: "CVT",
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=900&q=80",
        tag: "Sport",
        description:
            "Honda Civic RS có thiết kế thể thao, cảm giác lái tốt và nhiều trang bị tiện nghi."
    }
];


// ================================
// DOM
// ================================

const carsGrid = document.getElementById("carsGrid");
const emptyState = document.getElementById("emptyState");
const carCount = document.getElementById("carCount");

const brandFilter = document.getElementById("brandFilter");
const typeFilter = document.getElementById("typeFilter");
const priceFilter = document.getElementById("priceFilter");
const searchBtn = document.getElementById("searchBtn");

const carModal = document.getElementById("carModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");


// ================================
// HIỂN THỊ XE
// ================================

function renderCars(data) {

    carsGrid.innerHTML = "";

    carCount.textContent = `${data.length} xe`;

    if (data.length === 0) {
        emptyState.style.display = "block";
        return;
    }

    emptyState.style.display = "none";

    data.forEach(car => {

        const card = document.createElement("article");

        card.className = "car-card";

        card.innerHTML = `
            <div class="car-image">
                <img
                    src="${car.image}"
                    alt="${car.name}"
                    loading="lazy"
                >

                <span class="car-tag">
                    ${car.tag}
                </span>
            </div>

            <div class="car-info">

                <span class="car-brand">
                    ${car.brand}
                </span>

                <h3 class="car-title">
                    ${car.name}
                </h3>

                <div class="car-price">
                    ${car.priceText}
                </div>

                <div class="car-meta">
                    <span>${car.year}</span>
                    <span>${car.type}</span>
                    <span>${car.fuel}</span>
                    <span>${car.transmission}</span>
                </div>

                <div class="car-actions">

                    <button
                        class="detail-btn"
                        onclick="showCarDetail(${car.id})"
                    >
                        Xem chi tiết
                    </button>

                    <button
                        onclick="selectCar(${car.id})"
                    >
                        Tư vấn
                    </button>

                </div>

            </div>
        `;

        carsGrid.appendChild(card);
    });
}


// ================================
// TÌM KIẾM / LỌC
// ================================

function filterCars() {

    const brand = brandFilter.value;
    const type = typeFilter.value;
    const maxPrice = priceFilter.value;

    const result = cars.filter(car => {

        const brandMatch =
            brand === "all" || car.brand === brand;

        const typeMatch =
            type === "all" || car.type === type;

        const priceMatch =
            maxPrice === "all" ||
            car.price <= Number(maxPrice);

        return brandMatch && typeMatch && priceMatch;
    });

    renderCars(result);
}

searchBtn.addEventListener("click", filterCars);

brandFilter.addEventListener("change", filterCars);
typeFilter.addEventListener("change", filterCars);
priceFilter.addEventListener("change", filterCars);


// ================================
// MODAL CHI TIẾT
// ================================

function showCarDetail(id) {

    const car = cars.find(item => item.id === id);

    if (!car) return;

    document.getElementById("modalImage").src = car.image;
    document.getElementById("modalImage").alt = car.name;

    document.getElementById("modalBrand").textContent =
        car.brand;

    document.getElementById("modalTitle").textContent =
        car.name;

    document.getElementById("modalPrice").textContent =
        car.priceText;

    document.getElementById("modalYear").textContent =
        car.year;

    document.getElementById("modalType").textContent =
        car.type;

    document.getElementById("modalFuel").textContent =
        car.fuel;

    document.getElementById("modalTransmission").textContent =
        car.transmission;

    document.getElementById("modalDescription").textContent =
        car.description;

    carModal.classList.add("active");

    document.body.style.overflow = "hidden";
}


// ================================
// ĐÓNG MODAL
// ================================

function closeModal() {

    carModal.classList.remove("active");

    document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeModal();
    }

});


// ================================
// CHỌN XE ĐỂ TƯ VẤN
// ================================

const customerCar =
    document.getElementById("customerCar");

function loadCarOptions() {

    cars.forEach(car => {

        const option =
            document.createElement("option");

        option.value = car.name;
        option.textContent =
            `${car.brand} ${car.name}`;

        customerCar.appendChild(option);
    });
}

function selectCar(id) {

    const car = cars.find(item => item.id === id);

    if (!car) return;

    customerCar.value = car.name;

    document
        .getElementById("contact")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// ================================
// FORM TƯ VẤN
// ================================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

contactForm.addEventListener("submit", event => {

    event.preventDefault();

    const name =
        document.getElementById("customerName").value.trim();

    const phone =
        document.getElementById("customerPhone").value.trim();

    if (!name || !phone) {
        formMessage.style.color = "#e63946";
        formMessage.textContent =
            "Vui lòng nhập đầy đủ thông tin.";
        return;
    }

    formMessage.style.color = "#24934d";

    formMessage.textContent =
        "✓ Cảm ơn bạn! AutoLux sẽ liên hệ tư vấn sớm nhất.";

    contactForm.reset();
});


// ================================
// MOBILE MENU
// ================================

const menuBtn =
    document.getElementById("menuBtn");

const menu =
    document.querySelector(".menu");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("active");

});

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });

});


// ================================
// KHỞI CHẠY
// ================================

renderCars(cars);
loadCarOptions();
