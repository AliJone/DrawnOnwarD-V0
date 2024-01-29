/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import BrandIcon from 'parts/BrandIcon';
import Button from 'elements/Button';

export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="container flex-col mx-auto ">
        <div className="flex flex-col sm:flex-row mt-8" style={{ justifyContent: 'space-between' }}>
          <div className="w-1/3 flex-col ml-16 mr-8">
            <BrandIcon />
            <p className="w-full text-lg text-gray-400 font-light">
              Innovating Forward,
              {' '}
              <br />
              Reflecting Excellence.
            </p>
          </div>
          <div className="w-1/3 ml-16 sm:ml-0 mt-0">
            <h1 className="text-lg text-theme-blue pt-4 pb-2">
              Social
            </h1>
            <div className="flex-row">
              <Button href="https://www.linkedin.com/company/drawnonward/" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
                LinkedIn
              </Button>
              <Button href="mailto:dr4wn0nw4rd@gmail.com" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
                Email
              </Button>
              <Button href="tel:+923182232414" type="link" target="_blank" className="flex text-lg text-gray-400 font-light hover:underline" isExternal>
                Phone
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-col text-center mt-7">
          <p className="text-lg text-gray-400 font-light">
            Copyright 2024 - All rights reserved - DrawnOnward
          </p>
        </div>
      </div>
    </div>
  );
}
