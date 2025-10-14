"use client";
import React from "react";
import BlogLeft from "./blog-left";
import BlogRight from "./blog-right";

export default function BlogLayout() {
  return (
    <section className="py-5 blog-layout">
      <div className="container">
        <div className="row g-4 align-items-start">
          {/* === Left Column === */}
          <div className="col-12 col-lg-7">
            <BlogLeft />
          </div>

          {/* === Right Column === */}
          <div className="col-12 col-lg-5">
            <BlogRight />
          </div>
        </div>
      </div>
    </section>
  );
}
