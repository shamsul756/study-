"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    id: 1,
    title: "Focused Study Environment",
    description:
      "Libraries provide a quiet and distraction-free space that helps improve concentration and productivity.",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800",
  },
  {
    id: 2,
    title: "Access to Resources",
    description:
      "A wide range of books, journals, and digital resources are available for academic and personal growth.",
    image:
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800",
  },
  {
    id: 3,
    title: "Group Collaboration",
    description:
      "Dedicated rooms allow students to collaborate, discuss, and work on projects effectively.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
  },
  {
    id: 4,
    title: "Peaceful Reading Space",
    description:
      "Comfortable and calm reading areas help readers relax and enjoy long reading sessions.",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800",
  },
  {
    id: 5,
    title: "Focused Study Environment",
    description:
      "Libraries provide a quiet and distraction-free space that helps improve concentration and productivity.",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800",
  },
  {
    id: 6,
    title: "Access to Vast Knowledge",
    description:
      "Libraries offer thousands of books, journals, and digital resources across different subjects for learning and research.",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800",
  },
  {
    id: 7,
    title: "Free Learning Resources",
    description:
      "Most libraries provide free access to books, computers, and educational materials, making learning affordable for everyone.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800",
  },
  {
    id: 8,
    title: "Peaceful Reading Space",
    description:
      "Comfortable and calm reading areas help readers relax and enjoy long reading sessions.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ExtraSection = () => {
  return (
    <section className="w-full py-12 px-4 md:px-10 lg:px-20 bg-gray-50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
    <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
  className="text-center mb-10"
>
  <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
    Why People Go to the Library
  </h2>

  <p className="text-gray-500 mt-2 text-sm md:text-base">
    A place for learning, focus, and personal growth
  </p>
</motion.div>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {reasons.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            whileHover={{ scale: 1.3 }}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="h-40 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 mt-2 flex-1">
                {item.description}
              </p>

              <button className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-800 self-start">
                Learn more →
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ExtraSection;