import Image from "next/image";


export default function MenuPage() {
    const menu = {
      starters: [
        { id: 1, name: "Bruschetta Trio", description: "Classic tomato, roasted red pepper, and whipped ricotta on toasted baguette", price: "$10" },
        { id: 2, name: "Seasonal Soup", description: "Fresh ingredients blended daily with herbs and cream", price: "$8" },
      ],
      mains: [
        { id: 3, name: "Herb-Crusted Chicken", description: "Served with garlic mashed potatoes and seasonal vegetables", price: "$18" },
        { id: 4, name: "Seared Salmon", description: "Citrus glaze, roasted asparagus, lemon quinoa", price: "$20" },
      ],
      sides: [
        { id: 5, name: "Truffle Fries", description: "Crispy shoestring fries tossed in truffle oil and parmesan", price: "$6" },
        { id: 6, name: "House Salad", description: "Mixed greens, cucumber, cherry tomatoes, vinaigrette", price: "$5" },
      ],
      desserts: [
        { id: 7, name: "Mini Cheesecake Bites", description: "Vanilla bean cheesecake with graham crust", price: "$7" },
        { id: 8, name: "Chocolate Mousse", description: "Rich dark chocolate with whipped cream and mint", price: "$8" },
      ],
    };
  
    const renderSection = (title: string, items: { id: number; name: string; description: string; price: string }[]) => (
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-white mb-4 border-b border-white pb-2">{title}</h3>
        <ul className="space-y-6">
          {items.map((item) => (
            <li key={item.id} className="text-white">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">{item.name}</span>
                <span className="text-sm font-semibold">{item.price}</span>
              </div>
              <p className="text-sm text-white/80">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  
    return (
      <div className="relative px-6 py-12">
      {/* Background images (messy layout) */}
      <div className="absolute left-20 -top-10 w-32 rotate-[-12deg] z-0 w-100 h-100 mb-10 rounded-lg overflow-hidden shadow-lg">
           <Image src="/catering-images/menu-pic-1.jpg" alt="Home Contact" fill className="object-cover" />
      </div>
      <div className="absolute -left-16 bottom-0 w-36 rotate-[8deg] z-0 w-100 h-100 mb-10 rounded-lg overflow-hidden shadow-lg">
           <Image src="/catering-images/menu-pic-2.jpg" alt="Home Contact" fill className="object-cover" />
      </div>
      <div className="absolute right-10 top-20 w-32 rotate-[10deg] z-0 w-100 h-100 mb-10 rounded-lg overflow-hidden shadow-lg">
           <Image src="/catering-images/menu-pic-3.jpg" alt="Home Contact" fill className="object-cover" />
      </div>
      <div className="absolute right-16 bottom-0 w-36 rotate-[-7deg] z-0 w-100 h-100 mb-10 rounded-lg overflow-hidden shadow-lg">
           <Image src="/catering-images/menu-pic-4.jpg" alt="Home Contact" fill className="object-cover" />
      </div>
      {/* 
      
      <div className="absolute -right-20 -top-10 w-32 rotate-[10deg] z-0">
        <Image src="/catering-images/menu-pic-3.jpg" alt="Menu Pic 3" className="w-full rounded-lg shadow-lg" />
      </div>
      <div className="absolute -right-16 bottom-0 w-36 rotate-[-7deg] z-0">
        <Image src="/catering-images/menu-pic-4.jpg" alt="Menu Pic 4" className="w-full rounded-lg shadow-lg" />
      </div> */}

      {/* Menu Card */}
      <div className="relative z-10 max-w-4xl mx-auto bg-[var(--light-brown)] p-10 rounded-2xl shadow-2xl">
        <h2 className="text-3xl text-white font-bold text-center mb-10">Our Sample Menu</h2>
        {renderSection("Starters", menu.starters)}
        {renderSection("Mains", menu.mains)}
        {renderSection("Sides", menu.sides)}
        {renderSection("Desserts", menu.desserts)}
      </div>
    </div>
    );
  }
  