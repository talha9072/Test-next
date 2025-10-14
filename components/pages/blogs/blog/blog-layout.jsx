"use client";
import React from "react";
import BlogLeft from "./blog-left";
import BlogRight from "./blog-right";
import Blogbottom from "./blog-bottom";

export default function BlogLayout() {
  return (
    <section className="py-5 blog-layout">
      <div className="container">
        <div className="row g-4 align-items-start blog-row">
          {/* === Left Column === */}
          <div className="col-12 col-lg-7 blog-col">
            <BlogLeft />
            <Blogbottom />
          </div>

          {/* === Right Column (Sticky) === */}
          <div className="col-12 col-lg-5 side-col">
            <div className="sticky-wrapper">
              <BlogRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
