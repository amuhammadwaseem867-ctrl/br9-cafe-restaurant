"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Menu.css";

const categories = [
  {
    id: "appetizers",
    label: "Appetizers",
    items: [
      { name: "Honey Chili Wings", price: "699", description: "Crispy wings glazed with a sweet chili finish." },
      { name: "Buffalo Wings", price: "899", description: "Classic spicy buffalo-style wings." },
      { name: "BBQ Wings", price: "699", description: "Tender wings finished with smoky BBQ." },
      { name: "Chicken Fingers", price: "899", description: "Crispy chicken strips served golden." },
      { name: "Crispy Wings", price: "699", description: "Crunchy, seasoned chicken wings." },
    ],
  },

  {
    id: "fish",
    label: "Fish",
    items: [
      { name: "Fish & Chips", price: "1,499", description: "Crispy fish served with golden fries." },
      { name: "Finger Fish", price: "1,199", description: "Golden fried fish fingers." },
    ],
  },

  {
    id: "fries",
    label: "Fries",
    items: [
      { name: "Garlic Fries", price: "599", description: "Golden fries with a garlic finish." },
      { name: "Mayo Fries", price: "599", description: "Crispy fries with creamy mayo." },
      { name: "Masala Fries", price: "499", description: "Fries tossed in a bold masala blend." },
      { name: "Loaded Fries", price: "899", description: "Loaded with delicious toppings." },
      { name: "Plain Fries", price: "499", description: "Classic golden crispy fries." },
    ],
  },

  {
    id: "soups",
    label: "Soups",
    items: [
      { name: "Hot & Sour Soup", price: "649", description: "A warming soup with a balanced spicy kick." },
      { name: "Chicken Corn Soup", price: "649", description: "Comforting chicken and sweet corn soup." },
      { name: "BR 9 Special Soup", price: "799", description: "Our signature house-style soup." },
      { name: "Family Bowl Soup", price: "1,499", description: "A generous bowl made for sharing." },
    ],
  },

  {
    id: "steaks",
    label: "Steaks",
    items: [
      { name: "Chicken Steak", price: "1,199", description: "Tender grilled chicken prepared to order." },
      { name: "Mushroom Steak", price: "1,299", description: "Grilled steak paired with creamy mushrooms." },
      { name: "Pepper Steak", price: "1,299", description: "Tender steak with a pepper-forward sauce." },
      { name: "BR 9 Special Steak", price: "1,499", description: "A signature BR 9 steak experience." },
    ],
  },

  {
    id: "pasta",
    label: "Pasta",
    items: [
      { name: "BR 9 Special Pasta", price: "1,099", description: "House special pasta prepared BR 9 style." },
      { name: "Alfredo Pasta", price: "899", description: "Creamy pasta with a rich Alfredo sauce." },
      { name: "Milano Pasta", price: "949", description: "A comforting Italian-inspired pasta." },
      { name: "Penne Pasta", price: "799", description: "Classic penne pasta prepared fresh." },
      { name: "Smoked Pasta", price: "799", description: "Pasta with a subtle smoky character." },
    ],
  },

  {
    id: "burgers",
    label: "Burgers",
    items: [
      { name: "Chicken Zinger Burger", price: "899", description: "Crispy chicken with fresh burger toppings." },
      { name: "Beef Burger", price: "999", description: "Juicy beef patty in a toasted bun." },
      { name: "Grilled Chicken Burger", price: "899", description: "Grilled chicken with fresh toppings." },
      { name: "Chicken Sandwich", price: "799", description: "A satisfying chicken sandwich." },
      { name: "Club Sandwich", price: "899", description: "A classic layered club sandwich." },
    ],
  },

  {
    id: "chinese",
    label: "Chinese",
    items: [
      { name: "Chicken Chow Mein", price: "899", description: "Wok-tossed noodles with tender chicken." },
      { name: "Chicken Manchurian", price: "999", description: "Chicken in a rich Manchurian-style sauce." },
      { name: "Chicken Fried Rice", price: "799", description: "Wok-fried rice with chicken." },
      { name: "Chicken Shashlik", price: "1,099", description: "Tender chicken with vegetables and sauce." },
    ],
  },

  {
    id: "drinks",
    label: "Drinks",
    items: [
      { name: "Mint Margarita", price: "399", description: "Refreshing mint and citrus blend." },
      { name: "Blue Lagoon", price: "399", description: "Bright, refreshing citrus mocktail." },
      { name: "Strawberry Margarita", price: "449", description: "Sweet strawberry with a refreshing finish." },
      { name: "Pina Colada", price: "449", description: "Creamy tropical pineapple and coconut." },
    ],
  },

  {
    id: "shakes",
    label: "Shakes",
    items: [
      { name: "Chocolate Shake", price: "499", description: "Rich and creamy chocolate shake." },
      { name: "Oreo Shake", price: "549", description: "Creamy shake blended with Oreo." },
      { name: "Strawberry Shake", price: "499", description: "Smooth strawberry milkshake." },
      { name: "Mango Shake", price: "499", description: "Fresh mango blended into a creamy shake." },
    ],
  },

  {
    id: "coffee",
    label: "Tea & Coffee",
    items: [
      { name: "Doodh Patti", price: "299", description: "Traditional creamy milk tea." },
      { name: "Green Tea", price: "299", description: "Light and refreshing green tea." },
      { name: "Cappuccino", price: "399", description: "Espresso with silky steamed milk." },
      { name: "Cafe Latte", price: "399", description: "Smooth espresso and steamed milk." },
      { name: "Espresso", price: "299", description: "Rich concentrated coffee." },
    ],
  },

  {
    id: "juices",
    label: "Fresh Juices",
    items: [
      { name: "Fresh Orange Juice", price: "449", description: "Freshly prepared citrus juice." },
      { name: "Fresh Apple Juice", price: "449", description: "Naturally refreshing apple juice." },
      { name: "Fresh Pineapple Juice", price: "449", description: "Tropical pineapple refreshment." },
      { name: "Fresh Mango Juice", price: "449", description: "Fresh mango served chilled." },
    ],
  },

  {
    id: "shesha",
    label: "Shesha",
    items: [
      { name: "Regular Shesha", price: "1,199", description: "Classic BR 9 shesha experience." },
      { name: "Turkish Shesha", price: "1,499", description: "A richer Turkish-inspired experience." },
      { name: "BR 9 Special Shesha", price: "1,799", description: "Our signature shesha selection." },
    ],
  },
];

const deals = [
  {
    number: "01",
    title: "Deal For 2",
    people: "FOR TWO",
    description: "2 Chicken Steaks + 2 Mint Margaritas",
    price: "2,500",
  },
  {
    number: "02",
    title: "Deal For 5",
    people: "FOR FIVE",
    description:
      "2 Chicken Steaks + 3 Chicken Zinger Burgers with Fries + 5 Mint Margaritas",
    price: "4,500",
  },
  {
    number: "03",
    title: "Super Winner",
    people: "SIGNATURE DEAL",
    description:
      "2 Chicken Steaks + 3 Chicken Zinger Burgers with Fries + 5 Mint Margaritas",
    price: "6,000",
  },
];

export default function Menu() {
  const [active, setActive] = useState("appetizers");
  const [search, setSearch] = useState("");

  const category = categories.find((item) => item.id === active);

  const filteredItems = useMemo(() => {
    if (!search.trim()) return category.items;

    return category.items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [category, search]);

  return (
    <section className="br9-menu" id="menu">

      <div className="br9-menu-container">

        {/* INTRO */}

        <motion.header
          className="br9-menu-intro"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="br9-menu-intro-left">
            <span className="br9-eyebrow">02 / THE MENU</span>

            <h2>
              Come hungry.
              <br />
              <em>Leave happy.</em>
            </h2>
          </div>

          <p>
            Explore the BR 9 menu — from comfort food and
            signature dishes to refreshing drinks and late-night favourites.
          </p>
        </motion.header>


        {/* SEARCH */}

        <div className="br9-menu-tools">

          <div className="br9-menu-search">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search the menu..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            {search && (
              <button onClick={() => setSearch("")}>
                Clear
              </button>
            )}
          </div>

          <span className="br9-menu-count">
            {categories.length} CATEGORIES
          </span>

        </div>


        {/* CATEGORIES */}

        <div className="br9-menu-categories">
          {categories.map((item, index) => (
            <button
              key={item.id}
              className={active === item.id ? "active" : ""}
              onClick={() => {
                setActive(item.id);
                setSearch("");
              }}
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              {item.label}
            </button>
          ))}
        </div>


        {/* ACTIVE MENU */}

        <div className="br9-active-menu">

          <div className="br9-active-heading">

            <div>
              <span className="br9-eyebrow">
                SELECTED CATEGORY
              </span>

              <h3>{category.label}</h3>
            </div>

            <span className="br9-active-count">
              {filteredItems.length} ITEMS
            </span>

          </div>


          <AnimatePresence mode="wait">
            <motion.div
              key={active + search}
              className="br9-items"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <article
                    className="br9-item"
                    key={item.name}
                  >
                    <span className="br9-item-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="br9-item-info">
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                    </div>

                    <div className="br9-item-divider" />

                    <div className="br9-item-price">
                      <small>RS.</small>
                      {item.price}
                    </div>
                  </article>
                ))
              ) : (
                <div className="br9-no-results">
                  <span>00</span>
                  <h4>No items found.</h4>
                  <p>Try another search.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

        </div>


        {/* DEALS */}

        <section className="br9-deals">

          <div className="br9-deals-intro">
            <div>
              <span className="br9-eyebrow">
                03 / SPECIAL OFFERS
              </span>

              <h2>
                Made for
                <br />
                <em>sharing.</em>
              </h2>
            </div>

            <p>
              Bring your people. We have the food covered.
            </p>
          </div>


          <div className="br9-deals-grid">

            {deals.map((deal, index) => (
              <motion.article
                className="br9-deal"
                key={deal.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
              >
                <div className="br9-deal-top">
                  <span>{deal.number}</span>
                  <small>{deal.people}</small>
                </div>

                <h3>{deal.title}</h3>

                <p>{deal.description}</p>

                <div className="br9-deal-price">
                  <small>RS.</small>
                  <strong>{deal.price}</strong>
                </div>

                <div className="br9-deal-line" />
              </motion.article>
            ))}

          </div>

        </section>


        {/* BOTTOM CTA */}

        <div className="br9-menu-cta">
          <div>
            <span className="br9-eyebrow">
              BR 9 CAFE & RESTAURANT
            </span>

            <h3>
              Your table
              <br />
              <em>is waiting.</em>
            </h3>
          </div>

          <a href="#location">
            <span>Find Us</span>
            <strong>↗</strong>
          </a>
        </div>

      </div>

    </section>
  );
}