
const Faq = () => {
  return (
    <section className="mx-auto max-w-[800px] w-[95%] md:w-11/12 mb-20 space-y-3">
      <div className="collapse collapse-plus bg-base-200 dark:bg-white/20">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-Montserrat font-bold text-black/80 dark:text-white/80">
        Who are the chefs in your team?
        </div>
        <div className="collapse-content">
          <p className="text-black/60 dark:text-white/60"> Our chefs are experienced culinary artists with expertise in a variety of cuisines. They specialize in creating innovative dishes that cater to diverse tastes.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 dark:bg-white/20">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-Montserrat font-bold text-black/80 dark:text-white/80">
        How do you select your chefs?
        </div>
        <div className="collapse-content">
          <p className="text-black/60 dark:text-white/60">We select our chefs through a rigorous process, ensuring they possess the skills, creativity, and passion for delivering exceptional culinary experiences.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 dark:bg-white/20">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl  font-Montserrat font-bold text-black/80 dark:text-white/80">
        What kind of cuisines do your chefs specialize in?
        </div>
        <div className="collapse-content">
          <p className="text-black/60 dark:text-white/60">Our chefs specialize in a wide range of cuisines, including Italian, French, Asian, and contemporary fusion dishes. Each chef brings a unique touch to the menu.</p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-200 dark:bg-white/20">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-Montserrat font-bold text-black/80 dark:text-white/80">
         Can I meet or talk to your chefs?
        </div>
        <div className="collapse-content">
          <p className="text-black/60 dark:text-white/60">Yes! If you're visiting our restaurant or attending a special event, feel free to ask about meeting our chefs. They love connecting with food enthusiasts.</p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-200 dark:bg-white/20">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-Montserrat font-bold text-black/80 dark:text-white/80">
         Do your chefs accommodate dietary restrictions?
        </div>
        <div className="collapse-content">
          <p className="text-black/60 dark:text-white/60">Absolutely! Our chefs are skilled in crafting dishes that cater to various dietary preferences, including vegetarian, vegan, gluten-free, and allergen-sensitive options.</p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-200 dark:bg-white/20">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-Montserrat font-bold text-black/80 dark:text-white/80">
          Are your chefs available for private events or catering?
        </div>
        <div className="collapse-content">
          <p className="text-black/60 dark:text-white/60">Yes, our chefs can be booked for private events and catering services. Contact us for more information and to customize your menu.</p>
        </div>
      </div>
    </section>
  );
};

export default Faq;
