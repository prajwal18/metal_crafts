// -------------------------------- DATA --------------------------------
const data = {
  "featuredArtifact": {
    "title": "Featured Artifact",
    "subTitle": "Meditating Buddha Statue",
    "image": "./assets/meditating_buddha.webp",
    "description": "Handcrafted from pure brass and adorned with intricate 24k gold gilding, this statue depicts the Buddha in the Dhyana Mudra (meditation posture), symbolizing wisdom and enlightenment. It creates a serene atmosphere and adds a touch of spiritual elegance to any space. Perfect for those seeking spiritual growth, looking to create a Zen-like ambiance, or wishing to embrace the teachings of compassion, mindfulness, and harmony.",
    "midBodyContent": "<i >Why You’ll Love It?<br /><br /> Embodiment of Enlightenment – The Dhyana Mudra encourages deep meditation and inner wisdom.<br /><br /> Luxurious Craftsmanship – Pure brass and 24k gold gilding create a radiant, heirloom-quality piece.<br /><br /> Serene Atmosphere – Its calming presence transforms any room into a peaceful sanctuary.<br /><br /> Versatile Elegance – Ideal for home décor, yoga studios, meditation corners, or altars.<br /><br /> Daily Inspiration – A gentle reminder to cultivate mindfulness, compassion, and spiritual growth.</i >",
    "sepcification": {
      "dimension": "18\" tall × 12\" wide",
      "price": "$999.99",
      "color": "Gold",
      "style": "Traditional",
      "category": "Home Decor",
      "weight": "12kg",
      "material": "Brass with gold gilding"
    }
  },

  "collection": [
    {
      "title": "Buddha & Deity Statues",
      "artifacts": [
        {
          "name": "Amitabha Buddha Statue",
          "description": "Brass statue of the Buddha of Infinite Light, 10\" tall with hand-carved details. This statue is not only a powerful symbol in Buddhist temples but also a meaningful addition to your home. Placing it in your living room, meditation space, or garden can create a peaceful atmosphere and inspire daily mindfulness.",
          "image": "",
          "price": "$49.99"
        },
        {
          "name": "Green Tara",
          "description": "Compassionate female Bodhisattva in seated position, 8\" tall with semi-precious stone inlays. Invite the energy of love, healing, and protection into your space with a Green Tara statue. Revered in Tibetan Buddhism as the Mother of Liberation, Green Tara embodies active compassion and swift support. She is called upon to remove obstacles, ease fears, and offer protection, bringing comfort and reassurance in times of need.",
          "image": "",
          "price": "$29.99"
        },
        {
          "name": "Medicine Buddha",
          "description": "Healing Buddha holding a jar of medicinal nectar, 12\" tall with blue enamel details. This statue is not only a powerful symbol in Buddhist temples but also a meaningful addition to your home. Placing it in your living room, meditation space, or garden can create a peaceful atmosphere and inspire daily mindfulness. Beyond its aesthetic appeal, it serves as a gentle reminder to cultivate inner peace, compassion, and awareness in the midst of everyday life.",
          "image": "",
          "price": "$19.99"
        }
      ]
    },
    {
      "title": "Ritual Items & Offerings",
      "artifacts": [
        {
          "name": "Tibetan Singing Bowl",
          "description": "Experience peace and relaxation with our beautifully handcrafted Tibetan Singing Bowl. Known for its soothing sound and gentle vibrations, this sacred bowl has been used for centuries to support meditation, healing, and emotional well-being. With just a light tap or slow circle of the mallet, the bowl creates a rich, calming tone that melts away stress and brings your mind back to center. It's the perfect way to start your day with focus—or end it with peace.",
          "image": "",
          "price": "$49.99"
        },
        {
          "name": "Traditional Butter Lamp",
          "description": "Add a touch of tradition and warmth to your home with our handcrafted Butter Lamp, made in Nepal by skilled artisans. Traditionally used in Tibetan and Buddhist rituals, this beautiful lamp now brings cultural charm and a soft, serene glow to modern interiors. Crafted from brass or copper with fine detailing, the lamp blends heritage with elegance—perfect for a cozy corner, meditation area, altar space, or even as a unique accent piece in your living room.",
          "image": "",
          "price": "$29.99"
        },
        {
          "name": "Vajra & Bell Set",
          "description": "With this authentic Vajra and Bell set, handcrafted by skilled artisans using traditional Tibetan techniques. These sacred tools have been used for centuries in Tibetan Buddhism to bring balance and harmony to spiritual rituals. Handcrafted with Care Each piece features detailed carvings and a smooth, polished finish — honoring the rich heritage of Tibetan craftsmanship.",
          "image": "",
          "price": "$19.99"
        }
      ]
    },
    {
      "title": "Ritual Items & Offerings",
      "artifacts": [
        {
          "name": "Metal Mandala",
          "description": "Transform your space with the timeless beauty of our Metal Mandala Wall Art. Inspired by ancient spiritual symbols, this handcrafted piece brings balance, harmony, and a sense of calm to any room. Made from durable metal and finished with fine detailing, the mandala is perfect for adding a touch of elegance and meaning to your home. Hang it in your living room, bedroom, meditation space, or entryway to create a peaceful focal point that radiates positive energy.",
          "image": "",
          "price": "$49.99"
        },
        {
          "name": "Cloth Mandala – Spiritual Art to Elevate Your Space",
          "description": "Bring beauty, meaning, and mindfulness into your home with our Cloth Mandala Wall Hanging. Inspired by ancient sacred geometry, this handcrafted textile art symbolizes harmony, balance, and the journey toward inner peace. Made with vibrant colors and intricate patterns, each cloth mandala is carefully crafted by skilled artisans—perfect for adding a spiritual touch to your meditation space, living room, bedroom, or yoga studio.",
          "image": "",
          "price": "$29.99"
        },
        {
          "name": "Mini Prayer Wheel",
          "description": "Add a touch of serenity and sacred tradition to your space with our Mini Prayer Wheel, beautifully handcrafted in Nepal. Though small in size, this meaningful piece carries centuries of spiritual wisdom and the powerful mantra Om Mani Padme Hum, believed to bring compassion, protection, and positive energy with every gentle spin. Perfect for your desk, altar, shelf, or as a personal spiritual companion, this mini prayer wheel blends culture, craftsmanship, and intention in one beautiful piece.",
          "image": "",
          "price": "$19.99"
        }
      ]
    }
  ]
}

// -------------------------------- DATA --------------------------------



// -------------------------------- LOGIC --------------------------------

// Nav bar effect
const nav = document.getElementById("navBar");
let visible = true;
let scrollTimeout;
let isHovered = false;

nav.addEventListener("mouseenter", () => {
isHovered = true;
nav.style.opacity = "1";
visible = true;
if (scrollTimeout) clearTimeout(scrollTimeout);
});

window.addEventListener("scroll", () => {
if (scrollTimeout) clearTimeout(scrollTimeout);

if (window.scrollY < 50) {
    nav.style.opacity = "1";
    visible = true;
    return;
} else{
    nav.style.opacity = "0";
    visible = false;
}
});
// Nav bar effect

// Featured artifacts
document.getElementById("featured-artifact-title").innerHTML = data.featuredArtifact.title;
document.getElementById("featured-artifact-subtitle").innerHTML = data.featuredArtifact.subTitle;
document.getElementById("featured-artifact-description").innerHTML = data.featuredArtifact.description;
document.getElementById("featured-artifact-image").src = data.featuredArtifact.image;
document.getElementById("featured-artifact-mid-body-content").innerHTML = data.featuredArtifact.midBodyContent;
specificationElement = document.getElementById("featured-artifact-specifications")

Object.entries(data.featuredArtifact.sepcification).forEach(([key, value]) => {
    specificationElement.innerHTML += `<p class="text-amber-800"><span class="font-semibold">${capitalizeFirst(key)}: </span>${value}</p>`
})
// Featured artifacts


// OUR Divine Collection
divineCollectionElement = document.getElementById("divine-collection-container")
divineCollectionInnerHTML = ""

data.collection.forEach((item) => {
    sectionData = ""
    artifactData = ""

    item.artifacts.forEach((artifact) => {
        artifactData += `
            <div
              class="artifact-card bg-amber-50 rounded-lg overflow-hidden group"
            >
              <img
                src="${artifact.image}"
                alt="${artifact.name}"
                class="w-full h-1/2 object-cover transition-transform duration-500 group-hover:scale-125 artifact-image"
              />
              <div class="p-6 bg-white">
                <div class="flex gap-2 justify-between">
                    <h4 class="text-xl font-semibold text-amber-900 mb-2">
                    ${artifact.name}
                    </h4>
                    <h4 class="text-xl font-semibold text-amber-900 mb-2">
                    ${artifact.price}
                    </h4>
                </div>
                <p class="text-amber-700 mb-4">
                  ${artifact.description.substring(0,1055)}...
                </p>
              </div>
            </div>
        `
    })

    sectionData = `
        <div class="mb-16">
            <h3
            class="text-2xl font-semibold text-amber-800 mb-6 flex items-center text-yellow-500"
            >
            <i class="fas fa-hands-praying mr-3 text-yellow-500"></i>
            ${item.title}
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${artifactData}
            </div>
        </div>
        <div class="divider my-12"></div>
    `
    divineCollectionInnerHTML += sectionData

})


divineCollectionElement.innerHTML = divineCollectionInnerHTML
// OUR Divine Collection


// UTIL Function
function capitalizeFirst(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
// UTIL Function
