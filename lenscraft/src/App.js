import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function PhotographyHome() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?camera,photography)' }}>
        <div className="text-center px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            LensCraft
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Capturing life through the lens
          </motion.p>
          <Button className="text-lg">Explore Gallery</Button>
        </div>
      </section>

      {/* Styles Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-900">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">Photography Styles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Portrait', 'Landscape', 'Street'].map((style, index) => (
            <motion.div
              key={style}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-gray-800">
                <CardContent className="p-0">
                  <img src={`https://source.unsplash.com/600x400/?${style.toLowerCase()}-photography`} alt={style} className="w-full h-60 object-cover rounded-t-2xl" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{style}</h3>
                    <p className="text-sm text-gray-300">Explore the depth and mood of {style.toLowerCase()} photography with curated works and techniques.</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gear Section */}
      <section className="py-16 px-6 md:px-20 bg-black">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">Camera Gear</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["DSLR", "Mirrorless", "Lenses"].map((gear, index) => (
            <motion.div
              key={gear}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-gray-800">
                <CardContent className="p-0">
                  <img src={`https://source.unsplash.com/600x400/?${gear.toLowerCase()},camera`} alt={gear} className="w-full h-60 object-cover rounded-t-2xl" />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{gear}</h3>
                    <p className="text-sm text-gray-300">Top-rated {gear.toLowerCase()} gear for professionals and hobbyists alike.</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-900 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-300 mb-8">Have a project or want to collaborate? Reach out!</p>
        <Button size="lg">Contact Us</Button>
      </section>
    </div>
  );
}
