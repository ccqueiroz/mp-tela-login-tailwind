/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';

export const content = ["./*.{html,js}", "./src/**/*.js"];
export const theme = {
  extend: {
    boxShadow: {
      'custom-inner': 'inset 20px 0px 140px 60px #000',
      'custom-overlay-inner': 'inset 0px -255px 800px 0px rgba(7, 7, 9, 1)',
      'custon-form-left': '50px 0px 67px 10px rgba(7, 7, 9, 1)',
      'custon-form-right': '-50px 0px 67px 10px rgba(7, 7, 9, 1)',
      'neon-effect-input': '1px 1px 10px rgba(65, 88, 208, 0.7), -1px -1px 10px rgba(200, 80, 192, 0.8), 0px 0px 1px rgba(255, 204, 112, 0.2)'
    },
    backgroundColor: {
      'primary-black': 'rgba(7, 7, 9, 1)',
      'overlay-hero-image': 'rgba(7, 7, 9, 0.5)',
      'input-default': 'rgba(23, 23, 25, 1)'
    },
    backgroundImage: {
      'gradient-primary': 'linear-gradient(45deg, rgba(65, 88, 208, 1), rgba(200, 80, 192, 1), rgba(255, 204, 112, 1))'
    },
    maxWidth: {
      'default': '1600px',
      'limit-form': '390px',
    },
    fontFamily: {
      'DmSans': ['DM Sans', 'sans-serif']
    },
    textColor: {
      primary: 'rgba(229, 231, 235, 1)',
    },
    outlineColor: {
      'input-focus': 'linear-gradient(45deg, rgba(65, 88, 208, 1), rgba(200, 80, 192, 1), rgba(255, 204, 112, 1))'
    },
    textShadow: {
      shadowFont: '0 0 2px rgba(229, 231, 235, 0.6), 0 0 4px rgba(229, 231, 235, 0.4)'
    },
    keyframes: {
      pageTitle: {
        '0%, 100%': { 'text-shadow': '0 0 2px rgba(229, 231, 235, 0.6), 0 0 4px rgba(229, 231, 235, 0.4)' },
        '25%': { 'text-shadow': '0 0 3px rgba(229, 231, 235, 0.6), 0 0 6px rgba(229, 231, 235, 0.4)' },
        '50%': { 'text-shadow': '0 0 4px rgba(229, 231, 235, 0.6), 0 0 8px rgba(229, 231, 235, 0.4)' },
        '75%': { 'text-shadow': '0 0 5px rgba(229, 231, 235, 0.6), 0 0 9px rgba(229, 231, 235, 0.4)' },
      },
      dotTitle: {
        '0%, 100%': { 'box-shadow': '0 0 0px rgba(229, 231, 235, 0.6), 0 0 0px rgba(229, 231, 235, 0.4)' },
        '25%': { 'box-shadow': '0 0 3px rgba(229, 231, 235, 0.6), 0 0 6px rgba(229, 231, 235, 0.4)' },
        '50%': { 'box-shadow': '0 0 4px rgba(229, 231, 235, 0.6), 0 0 8px rgba(229, 231, 235, 0.4)' },
        '75%': { 'box-shadow': '0 0 5px rgba(229, 231, 235, 0.6), 0 0 9px rgba(229, 231, 235, 0.4)' },
      },
      'toastify-include': {
        '0%': { 'right': '-100%' },
        '100%': { 'right': '4px' }
      },
      'toastify-remove': {
        '0%': { 'right': '4px' },
        '100%': { 'right': '-100%' }
      },
    },
    animation: {
      pageTitle: 'pageTitle 3s linear infinite',
      dotTitle: 'dotTitle 3s linear infinite',
      'toastify-include': 'toastify-include 1s ease-in-out',
      'toastify-remove': 'toastify-remove 1s ease-in-out'
    },
    zIndex: {
      1: '1'
    }
  },
};

export const plugins = [
  plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'text-shadow': (value) => ({
          textShadow: value,
        }),
      },
      { values: theme('textShadow') }
    );
  }),
];