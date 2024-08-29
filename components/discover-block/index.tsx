import Image from 'next/image';

import { Button } from '../ui/button';
import React from 'react';

export const DiscoverBlock = () => (
  <div className="flex-col">
    <p className="mb-3 text-center text-3xl">Discover Our Line of Oboe Reeds</p>
    <div className="flex flex-col-reverse items-center justify-center md:flex-row">
      <div className="md:w-1/7 flex hidden md:block">
        <Image
          alt="Oboe Reed outline"
          className="mx-auto"
          width="120"
          height="385"
          src="https://mshippoboe.s3.us-west-1.amazonaws.com/reed_outline.png"
        />
      </div>
      <div className="md:w-6/7 p-4">
        <div className="inline-flex flex-col md:flex-row">
          <div className="flex-1">
            <h3 className="m-2 bg-indigo-100 p-4 text-center text-xl">Practice Reed</h3>
            <div className="m-2 bg-indigo-100 p-4 text-left">
              <ul className="list-disc pl-2">
                <li>Entry-level reed</li>
                <li>Student-friendly</li>
                <li>Comfortable response</li>
                <li>Light resistance</li>
              </ul>
            </div>
            <div className="m-2 bg-indigo-100 p-4">
              <Button asChild className="margin-auto">
                <a href="/practice-oboe-reed/">Preorder</a>
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="m-2 mb-2 bg-indigo-200 p-4 text-center text-xl">Rehearsal Reed</h3>
            <div className="m-2 bg-indigo-200 p-4 text-left">
              <ul className="list-disc pl-2">
                <li>Ease of play</li>
                <li>Dependable</li>
                <li>Stable intonation</li>
                <li>Great value</li>
              </ul>
            </div>
            <div className="m-2 bg-indigo-200 p-4">
              <Button asChild className="margin-auto">
                <a href="/rehearsal-oboe-reed/">Preorder</a>
              </Button>
            </div>
          </div>
          <div className="w-100 flex-1">
            <h3 className="m-2 bg-indigo-400 p-4 text-center text-xl">Performance Reed</h3>
            <div className="m-2 bg-indigo-400 p-4 text-left">
              <ul className="list-disc pl-2">
                <li>Superior tone quality</li>
                <li>Increased reliability</li>
                <li>High-quality cane and materials</li>
              </ul>
            </div>
            <div className="m-2 bg-indigo-400 p-4">
              <Button asChild className="margin-auto">
                <a href="/performance-oboe-reed/">Preorder</a>
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="m-2 bg-indigo-700 p-4 text-center text-xl text-white">Concerto Reed</h3>
            <div className="m-2 bg-indigo-700 p-4 text-left md:min-h-32">
              <ul className="list-disc pl-2 text-white">
                <li>Increased longevity</li>
                <li>Exceptional tone</li>
                <li>Superior dynamic range</li>
                <li>Premium materials</li>
              </ul>
            </div>
            <div className="m-2 bg-indigo-600 p-4">
              <Button className="margin-auto border-1 border-white">
                <a href="/concerto-oboe-reed/">Out of Stock</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
