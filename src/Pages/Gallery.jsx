import { ImageGallery } from "react-image-grid-gallery";
import image1 from "../assets/gallery/1.jpg";
import image2 from "../assets/gallery/2.jpg";
import image3 from "../assets/gallery/3.jpg";
import image4 from "../assets/gallery/4.jpg";
import image5 from "../assets/gallery/5.jpg";
import image6 from "../assets/gallery/6.jpg";
import image7 from "../assets/gallery/7.jpg";
import image8 from "../assets/gallery/8.jpg";
import image9 from "../assets/gallery/9.jpg";
import image10 from "../assets/gallery/10.jpg";
import image11 from "../assets/gallery/11.jpg";
import image12 from "../assets/gallery/12.jpg";



const Gallery = () => {
  const imagesArray = [
    {
      alt: "Image1's alt text",
      caption: "BBQ with a variety of meats, complete with tomatoes and bell peppers on a white plate.",
      src: image1,
    },
    {
      alt: "Image2's alt text",
      caption: "Chicken fajita, chicken fillet fried with bell pepper in lavash with bread slices in white plate",
      src: image2,
    },
    {
      alt: "Image3's alt text",
      caption: "Chicken fajita, chicken fillet fried with bell pepper in lavash with bread slices in white plate",
      src: image3,
    },
    {
      alt: "Image3's alt text",
      caption: "Chicken skewers with slices of apples and chili",
      src: image4,
    },
    {
      alt: "Image3's alt text",
      caption: "Chicken skewers with slices of sweet peppers and dill",
      src: image5,
    },
    {
      alt: "Image3's alt text",
      caption: "Fresh gourmet meal of grilled beef salad",
      src: image6,
    },
    {
      alt: "Image3's alt text",
      caption: "Fried chicken breast with vegetables",
      src: image7,
    },
    {
      alt: "Image3's alt text",
      caption: "Lentil soup in bowl mint lemon crackers side view",
      src: image8,
    },
    {
      alt: "Image3's alt text",
      caption: "Sauteed mushrooms with pumpkin and sweet pepper",
      src: image9,
    },
    {
      alt: "Image3's alt text",
      caption: "Stew chicken with vegetables and mushrooms in a cream sauce",
      src: image10,
    },
    {
      alt: "Image3's alt text",
      caption: "Stewed white beans and sliced pumpkin in tomato sauce",
      src: image11,
    },
    {
      alt: "Image3's alt text",
      caption: "Get inspired by Stateside favourites, from burgers and hotdogs to pancakes and pies.",
      src: image12,
    }
  ];

  return (
    <section className="container px-6 py-10 mx-auto min-h-[calc(100vh-338px)] flex flex-col justify-between">
      {/* heading banner */}
      <div className="h-[100px] md:h-[250px] bg-gallery-banner w-full bg-cover bg-center bg-no-repeat flex items-center justify-center relative mb-10">
        {/* overlay  */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* descriptions  */}
        <div className="text-center z-10">
          <h1 className="text-xl md:text-4xl font-semibold text-white">
            Gallery | Taste Odyssey
          </h1>
          <p className="px-[10%] text-sm md:text-lg text-white/60 mt-1">
            Welcome to the Taste Odyssey Gallery! Here you can view images of
            our delicious food.
          </p>
        </div>
      </div>

      {/* gallery sections */}

        <ImageGallery
          imagesInfoArray={imagesArray}
          columnCount={"auto"}
          columnWidth={350}
          gapSize={20}
          lightboxWidth={800}
        />

    </section>
  );
};

export default Gallery;
