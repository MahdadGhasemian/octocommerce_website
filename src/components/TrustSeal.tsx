/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';

const TrustSeal = () => {
  return (
    <div className='block'>
      <div
        className='d-flex align-items-center justify-content-center block-content rounded-lg'
        style={{
          width: '100px',
          height: '100px',
          border: '1px solid #e5e5ea',
        }}
      >
        <a href='' target='_blank' rel='noopener'>
          <img style={{ width: '92px', height: '100px' }} src='' alt='Trust Seal' />
        </a>
      </div>
    </div>
  );
};

export default TrustSeal;
