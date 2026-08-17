"use client";

import { useMemo, useState } from "react";
import "./Order.css";

const menuItems = [
  {
    name: "Honey Chili Wings",
    category: "Appetizers",
    price: 699,
  },
  {
    name: "Buffalo Wings",
    category: "Appetizers",
    price: 899,
  },
  {
    name: "BBQ Wings",
    category: "Appetizers",
    price: 699,
  },
  {
    name: "Chicken Fingers",
    category: "Appetizers",
    price: 899,
  },
  {
    name: "Crispy Wings",
    category: "Appetizers",
    price: 699,
  },

  {
    name: "Fish & Chips",
    category: "Fish",
    price: 1499,
  },
  {
    name: "Finger Fish",
    category: "Fish",
    price: 1199,
  },

  {
    name: "Garlic Fries",
    category: "Fries",
    price: 599,
  },
  {
    name: "Mayo Fries",
    category: "Fries",
    price: 599,
  },
  {
    name: "Masala Fries",
    category: "Fries",
    price: 499,
  },
  {
    name: "Loaded Fries",
    category: "Fries",
    price: 899,
  },
  {
    name: "Plain Fries",
    category: "Fries",
    price: 499,
  },

  {
    name: "Hot & Sour Soup",
    category: "Soups",
    price: 649,
  },
  {
    name: "Chicken Corn Soup",
    category: "Soups",
    price: 649,
  },
  {
    name: "BR 9 Special Soup",
    category: "Soups",
    price: 799,
  },
  {
    name: "Family Bowl Soup",
    category: "Soups",
    price: 1499,
  },

  {
    name: "Chicken Steak",
    category: "Steaks",
    price: 1199,
  },
  {
    name: "Mushroom Steak",
    category: "Steaks",
    price: 1299,
  },
  {
    name: "Pepper Steak",
    category: "Steaks",
    price: 1299,
  },
  {
    name: "BR 9 Special Steak",
    category: "Steaks",
    price: 1499,
  },

  {
    name: "BR 9 Special Pasta",
    category: "Pasta",
    price: 1099,
  },
  {
    name: "Alfredo Pasta",
    category: "Pasta",
    price: 899,
  },
  {
    name: "Milano Pasta",
    category: "Pasta",
    price: 949,
  },
  {
    name: "Penne Pasta",
    category: "Pasta",
    price: 799,
  },
  {
    name: "Smoked Pasta",
    category: "Pasta",
    price: 799,
  },

  {
    name: "Chicken Zinger Burger",
    category: "Burgers",
    price: 899,
  },
  {
    name: "Beef Burger",
    category: "Burgers",
    price: 999,
  },
  {
    name: "Grilled Chicken Burger",
    category: "Burgers",
    price: 899,
  },
  {
    name: "Chicken Sandwich",
    category: "Burgers",
    price: 799,
  },
  {
    name: "Club Sandwich",
    category: "Burgers",
    price: 899,
  },

  {
    name: "Chicken Chow Mein",
    category: "Chinese",
    price: 899,
  },
  {
    name: "Chicken Manchurian",
    category: "Chinese",
    price: 999,
  },
  {
    name: "Chicken Fried Rice",
    category: "Chinese",
    price: 799,
  },
  {
    name: "Chicken Shashlik",
    category: "Chinese",
    price: 1099,
  },

  {
    name: "Mint Margarita",
    category: "Drinks",
    price: 399,
  },
  {
    name: "Blue Lagoon",
    category: "Drinks",
    price: 399,
  },
  {
    name: "Strawberry Margarita",
    category: "Drinks",
    price: 449,
  },
  {
    name: "Pina Colada",
    category: "Drinks",
    price: 449,
  },

  {
    name: "Chocolate Shake",
    category: "Shakes",
    price: 499,
  },
  {
    name: "Oreo Shake",
    category: "Shakes",
    price: 549,
  },
  {
    name: "Strawberry Shake",
    category: "Shakes",
    price: 499,
  },
  {
    name: "Mango Shake",
    category: "Shakes",
    price: 499,
  },

  {
    name: "Doodh Patti",
    category: "Tea & Coffee",
    price: 299,
  },
  {
    name: "Green Tea",
    category: "Tea & Coffee",
    price: 299,
  },
  {
    name: "Cappuccino",
    category: "Tea & Coffee",
    price: 399,
  },
  {
    name: "Cafe Latte",
    category: "Tea & Coffee",
    price: 399,
  },
  {
    name: "Espresso",
    category: "Tea & Coffee",
    price: 299,
  },

  {
    name: "Fresh Orange Juice",
    category: "Fresh Juices",
    price: 449,
  },
  {
    name: "Fresh Apple Juice",
    category: "Fresh Juices",
    price: 449,
  },
  {
    name: "Fresh Pineapple Juice",
    category: "Fresh Juices",
    price: 449,
  },
  {
    name: "Fresh Mango Juice",
    category: "Fresh Juices",
    price: 449,
  },

  {
    name: "Regular Shesha",
    category: "Shesha",
    price: 1199,
  },
  {
    name: "Turkish Shesha",
    category: "Shesha",
    price: 1499,
  },
  {
    name: "BR 9 Special Shesha",
    category: "Shesha",
    price: 1799,
  },
];

const categories = [
  "All",
  "Appetizers",
  "Fish",
  "Fries",
  "Soups",
  "Steaks",
  "Pasta",
  "Burgers",
  "Chinese",
  "Drinks",
  "Shakes",
  "Tea & Coffee",
  "Fresh Juices",
  "Shesha",
];

const deals = [
  {
    name: "Deal For 2",
    description: "2 Chicken Steaks + 2 Mint Margaritas",
    price: 2500,
  },
  {
    name: "Deal For 5",
    description:
      "2 Chicken Steaks + 3 Chicken Zinger Burgers with Fries + 5 Mint Margaritas",
    price: 4500,
  },
  {
    name: "Super Winner",
    description:
      "2 Chicken Steaks + 3 Chicken Zinger Burgers with Fries + 5 Mint Margaritas",
    price: 6000,
  },
];

const formatPrice = (price) =>
  new Intl.NumberFormat("en-PK").format(price);

export default function Order() {
  const [category, setCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [orderType, setOrderType] = useState("Dine In");
  const [table, setTable] = useState("");

  const filteredItems = useMemo(() => {
    if (category === "All") {
      return menuItems;
    }

    return menuItems.filter(
      (item) => item.category === category
    );
  }, [category]);

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function addItem() {
    if (!selectedItem) return;

    const item = menuItems.find(
      (menuItem) => menuItem.name === selectedItem
    );

    if (!item) return;

    setCart((currentCart) => {
      const existing = currentCart.find(
        (cartItem) => cartItem.name === item.name
      );

      if (existing) {
        return currentCart.map((cartItem) =>
          cartItem.name === item.name
            ? {
                ...cartItem,
                quantity:
                  cartItem.quantity + quantity,
              }
            : cartItem
        );
      }

      return [
        ...currentCart,
        {
          ...item,
          quantity,
        },
      ];
    });

    setSelectedItem("");
    setQuantity(1);
  }

  function addDeal(deal) {
    setCart((currentCart) => [
      ...currentCart,
      {
        name: deal.name,
        category: "Special Deal",
        price: deal.price,
        quantity: 1,
      },
    ]);
  }

  function increaseItem(name) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.name === name
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  function decreaseItem(name) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.name === name
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeItem(name) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.name !== name)
    );
  }

  function sendOrder() {
    if (!cart.length) {
      alert("Please add at least one item.");
      return;
    }

    if (!customerName.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!phone.trim()) {
      alert("Please enter your phone number.");
      return;
    }

    const itemsText = cart
      .map(
        (item) =>
          `• ${item.name} x${item.quantity} — Rs. ${formatPrice(
            item.price * item.quantity
          )}`
      )
      .join("\n");

    const message = `
BR 9 CAFE & RESTAURANT
NEW ORDER

Name: ${customerName}
Phone: ${phone}
Order Type: ${orderType}
${orderType === "Dine In" ? `Table: ${table || "Not specified"}` : ""}

ORDER:
${itemsText}

TOTAL: Rs. ${formatPrice(subtotal)}
    `.trim();

    const whatsappNumber = "923000000000";

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  }

  return (
    <section className="br9-order" id="order">
      <div className="br9-order-container">

        {/* HEADER */}

        <header className="br9-order-header">
          <div>
            <span className="br9-order-eyebrow">
              04 / ORDER
            </span>

            <h2>
              Your table.
              <br />
              <em>Your order.</em>
            </h2>
          </div>

          <p>
            Choose your favourites, build your order
            and send it directly to BR 9.
          </p>
        </header>


        {/* ORDER BUILDER */}

        <div className="br9-order-layout">

          {/* LEFT */}

          <div className="br9-order-builder">

            <div className="br9-order-step">
              <span>01</span>

              <div>
                <small>CHOOSE CATEGORY</small>

                <div className="br9-order-categories">
                  {categories.map((item) => (
                    <button
                      key={item}
                      className={
                        category === item
                          ? "active"
                          : ""
                      }
                      onClick={() => {
                        setCategory(item);
                        setSelectedItem("");
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>


            <div className="br9-order-step">
              <span>02</span>

              <div className="br9-order-select-area">
                <small>CHOOSE ITEM</small>

                <select
                  value={selectedItem}
                  onChange={(event) =>
                    setSelectedItem(event.target.value)
                  }
                >
                  <option value="">
                    Select something delicious...
                  </option>

                  {filteredItems.map((item) => (
                    <option
                      key={item.name}
                      value={item.name}
                    >
                      {item.name} — Rs.{" "}
                      {formatPrice(item.price)}
                    </option>
                  ))}
                </select>

                <div className="br9-order-quantity">
                  <small>QUANTITY</small>

                  <div className="br9-quantity-control">
                    <button
                      onClick={() =>
                        setQuantity(
                          Math.max(1, quantity - 1)
                        )
                      }
                    >
                      −
                    </button>

                    <strong>{quantity}</strong>

                    <button
                      onClick={() =>
                        setQuantity(quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="br9-add-button"
                  onClick={addItem}
                >
                  <span>Add To Order</span>
                  <strong>+</strong>
                </button>
              </div>
            </div>


            {/* DEALS */}

            <div className="br9-order-deals">

              <div className="br9-order-deals-heading">
                <span>03 / SPECIAL DEALS</span>
                <p>Save more. Share more.</p>
              </div>

              <div className="br9-order-deal-grid">

                {deals.map((deal) => (
                  <button
                    className="br9-order-deal"
                    key={deal.name}
                    onClick={() => addDeal(deal)}
                  >
                    <span>DEAL</span>

                    <h3>{deal.name}</h3>

                    <p>{deal.description}</p>

                    <strong>
                      Rs. {formatPrice(deal.price)}
                    </strong>

                    <i>+</i>
                  </button>
                ))}

              </div>

            </div>

          </div>


          {/* RIGHT / SUMMARY */}

          <aside className="br9-order-summary">

            <div className="br9-summary-top">
              <span>YOUR ORDER</span>

              <strong>
                {cart.length}{" "}
                {cart.length === 1
                  ? "ITEM"
                  : "ITEMS"}
              </strong>
            </div>


            <div className="br9-cart">

              {cart.length === 0 ? (
                <div className="br9-empty-cart">
                  <span>00</span>

                  <h3>
                    Nothing here
                    <br />
                    <em>yet.</em>
                  </h3>

                  <p>
                    Select something from the menu
                    to start your order.
                  </p>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    className="br9-cart-item"
                    key={item.name}
                  >
                    <div className="br9-cart-item-info">
                      <h4>{item.name}</h4>

                      <span>
                        Rs.{" "}
                        {formatPrice(item.price)}
                      </span>
                    </div>

                    <div className="br9-cart-controls">

                      <div>
                        <button
                          onClick={() =>
                            decreaseItem(item.name)
                          }
                        >
                          −
                        </button>

                        <strong>
                          {item.quantity}
                        </strong>

                        <button
                          onClick={() =>
                            increaseItem(item.name)
                          }
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="br9-remove"
                        onClick={() =>
                          removeItem(item.name)
                        }
                      >
                        Remove
                      </button>

                    </div>
                  </div>
                ))
              )}

            </div>


            {/* CUSTOMER */}

            <div className="br9-customer">

              <span className="br9-customer-label">
                YOUR DETAILS
              </span>

              <input
                type="text"
                placeholder="Your name"
                value={customerName}
                onChange={(event) =>
                  setCustomerName(event.target.value)
                }
              />

              <input
                type="tel"
                placeholder="Phone number"
                value={phone}
                onChange={(event) =>
                  setPhone(event.target.value)
                }
              />

              <div className="br9-order-type">

                <button
                  className={
                    orderType === "Dine In"
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setOrderType("Dine In")
                  }
                >
                  Dine In
                </button>

                <button
                  className={
                    orderType === "Takeaway"
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setOrderType("Takeaway")
                  }
                >
                  Takeaway
                </button>

              </div>

              {orderType === "Dine In" && (
                <input
                  type="text"
                  placeholder="Table number (optional)"
                  value={table}
                  onChange={(event) =>
                    setTable(event.target.value)
                  }
                />
              )}

            </div>


            {/* TOTAL */}

            <div className="br9-summary-total">

              <span>Total</span>

              <strong>
                <small>RS.</small>
                {formatPrice(subtotal)}
              </strong>

            </div>


            <button
              className="br9-whatsapp-button"
              onClick={sendOrder}
            >
              <span>Send Order on WhatsApp</span>
              <strong>↗</strong>
            </button>

            <p className="br9-order-note">
              Your order will open in WhatsApp for
              confirmation with BR 9.
            </p>

          </aside>

        </div>

      </div>
    </section>
  );
}