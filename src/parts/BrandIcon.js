/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Button from 'elements/Button';

export default function BrandIcon() {
  return (
    <Button
      className=""
      type="link"
      href="/DrawnOnwarD/"
    >
      <p className="text-theme-blue text-4xl">
        Drawn
        <span className="text-theme-purple">O</span>
        nwarD
      </p>
    </Button>
  );
}
