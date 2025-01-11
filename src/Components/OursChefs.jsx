const OursChefs = () => {
  const chefs = [
    {
      id: 1,
      name: "Chef Gordon",
      title: "Head Chef",
      image: "https://i.ibb.co.com/qRGV55b/2.jpg",
    },
    {
      id: 2,
      name: "Chef Amelia",
      title: "Pastry Expert",
      image: "https://i.ibb.co.com/kh2FqBq/1.jpg",
    },
    {
      id: 3,
      name: "Chef Oliver",
      title: "Sous Chef",
      image: "https://i.ibb.co.com/CMB11Xh/4.jpg",
    },
    {
      id: 4,
      name: "Chef Sophia",
      title: "Grill Master",
      image: "https://i.ibb.co.com/0K69Cv9/3.webp",
    },
  ];

  return (
    <section>
        <div className="mx-auto text-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 font-Montserrat dark:text-white">Meet Our Chefs</h3>
            <p className=" text-sm md:text-base lg:w-[800px] mx-auto w-11/12 dark:text-white/60">Our talented chefs are the heart of our kitchen. With passion, creativity, and years of expertise, they craft every dish to perfection. Get to know the culinary artists who bring flavor and magic to your table.</p>

        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
        {chefs.map((chef) => (
          <div key={chef.id} className="relative group">
            {/* Chef Image */}
            <img
              src={chef.image}
              alt={chef.name}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <h3 className="text-white text-lg font-bold">{chef.name}</h3>
              <p className="text-gray-300 text-sm">{chef.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OursChefs;
