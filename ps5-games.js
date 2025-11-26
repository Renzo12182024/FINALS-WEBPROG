// PS5 Games Page Functionality

const ITEMS_PER_PAGE = 25;
let currentPage = 1;
let filteredGames = [];

// Get all PS5 games from the products database
function getPS5Games() {
    return Object.values(products).filter(product => 
        product.category === "Playstation 5 Game"
    );
}

// Extract unique genres from PS5 games
function getUniqueGenres() {
    const ps5Games = getPS5Games();
    const genres = new Set(ps5Games.map(game => game.genre));
    return Array.from(genres).sort();
}

// Filter and sort products
function filterAndSortProducts() {
    let filteredGames = getPS5Games();

    // Get selected genre
    const activeGenreBtn = document.querySelector('.genre-btn.active');
    const selectedGenre = activeGenreBtn ? activeGenreBtn.getAttribute('data-genre') : 'all';

    // Apply genre filter
    if (selectedGenre !== 'all') {
        filteredGames = filteredGames.filter(game => game.genre === selectedGenre);
    }

    // Apply price filter
    const maxPrice = parseInt(document.getElementById('priceSlider').value);
    filteredGames = filteredGames.filter(game => game.price <= maxPrice);

    // Apply rating filter
    const selectedRatings = Array.from(document.querySelectorAll('.rating-checkbox:checked'))
        .map(checkbox => parseInt(checkbox.value));

    if (selectedRatings.length > 0) {
        filteredGames = filteredGames.filter(game => {
            // Count filled stars (★) in the rating string
            const gameRating = (game.rating.match(/★/g) || []).length;
            return selectedRatings.includes(gameRating);
        });
    }

    // Apply sorting
    const sortValue = document.getElementById('sortSelect').value;
    switch(sortValue) {
        case 'price-low':
            filteredGames.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredGames.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredGames.sort((a, b) => {
                const ratingA = (b.rating.match(/★/g) || []).length;
                const ratingB = (a.rating.match(/★/g) || []).length;
                return ratingA - ratingB;
            });
            break;
        case 'newest':
        default:
            // Keep original order (newest first)
            break;
    }

    return filteredGames;
}

// Get paginated products
function getPaginatedProducts(games) {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return games.slice(startIndex, endIndex);
}

// Render pagination buttons
function renderPagination(totalGames) {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    const totalPages = Math.ceil(totalGames / ITEMS_PER_PAGE);

    if (totalPages <= 1) {
        return; // No pagination needed
    }

    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.textContent = '<<';
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updateDisplay();
        }
    });
    paginationContainer.appendChild(prevBtn);

    // Page number buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.classList.add('page-btn');
        if (i === currentPage) {
            pageBtn.classList.add('active');
        }
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            updateDisplay();
        });
        paginationContainer.appendChild(pageBtn);
    }

    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.textContent = '>>';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            updateDisplay();
        }
    });
    paginationContainer.appendChild(nextBtn);
}

// Render products
function renderProducts(games) {
    const productsGrid = document.getElementById('productsGrid');
    const noResults = document.getElementById('noResults');
    const gameCount = document.getElementById('gameCount');

    // Clear grid
    productsGrid.innerHTML = '';

    if (games.length === 0) {
        noResults.style.display = 'block';
        gameCount.textContent = 'Showing 0 games';
        document.getElementById('pagination').innerHTML = '';
        return;
    }

    noResults.style.display = 'none';
    gameCount.textContent = `Showing ${games.length} game${games.length !== 1 ? 's' : ''}`;

    // Get paginated games
    const paginatedGames = getPaginatedProducts(games);

    // Render pagination
    renderPagination(games.length);

    // Render products
    paginatedGames.forEach(game => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${game.image}" alt="${game.name}">
            <h3>${game.name}</h3>
            <div class="genre-tags">
                ${game.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="rating">${game.rating}</div>
            <p class="price">₱${game.price.toLocaleString()}.00</p>
            <div class="button-container">
                <button class="buy-btn">BUY NOW</button>
                <button class="cart-icon-btn"><i class="ri-shopping-cart-fill"></i></button>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

// Update display function
function updateDisplay() {
    const filteredGames = filterAndSortProducts();
    renderProducts(filteredGames);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Update price display
function updatePriceDisplay() {
    const slider = document.getElementById('priceSlider');
    const priceValue = document.getElementById('priceValue');
    const price = parseInt(slider.value);
    priceValue.textContent = `₱${price.toLocaleString()}`;
}

// Reset all filters
function resetFilters() {
    // Reset genre buttons
    document.querySelectorAll('.genre-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector('.genre-btn[data-genre="all"]').classList.add('active');

    // Reset price slider
    document.getElementById('priceSlider').value = 5000;
    updatePriceDisplay();

    // Reset rating checkboxes
    document.querySelectorAll('.rating-checkbox').forEach(checkbox => {
        checkbox.checked = false;
    });

    // Reset sort
    document.getElementById('sortSelect').value = 'newest';

    // Reset pagination
    currentPage = 1;

    // Re-render
    updateDisplay();
}

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Check for genre from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const genreParam = urlParams.get('genre');

    if (genreParam) {
        const genreBtn = document.querySelector(`.genre-btn[data-genre="${genreParam}"]`);
        if (genreBtn) {
            document.querySelectorAll('.genre-btn').forEach(btn => btn.classList.remove('active'));
            genreBtn.classList.add('active');
        }
    }

    // Initial render
    const initialGames = filterAndSortProducts();
    renderProducts(initialGames);

    // Genre filter buttons
    document.querySelectorAll('.genre-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.genre-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentPage = 1;
            updateDisplay();
        });
    });

    // Price slider
    const priceSlider = document.getElementById('priceSlider');
    priceSlider.addEventListener('input', function() {
        updatePriceDisplay();
        currentPage = 1;
        updateDisplay();
    });

    // Rating checkboxes
    document.querySelectorAll('.rating-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            currentPage = 1;
            updateDisplay();
        });
    });

    // Sort select
    document.getElementById('sortSelect').addEventListener('change', function() {
        currentPage = 1;
        updateDisplay();
    });

    // Reset filters button
    document.querySelector('.reset-filters-btn').addEventListener('click', resetFilters);

    // Update price display on load
    updatePriceDisplay();
});
