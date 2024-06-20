/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "repeat-5-18": "repeat(5, 18%)",
        "repeat-3-20": "repeat(3, 20%)",
        "repeat-4-20": "repeat(4, 20%)",
      },
      dropShadow: { "custom-dropshadow": "0 0 10px rgba(0, 0, 0, 1)" },
      boxShadow: {
        "3xl-boxshadow": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};


/* 
::-webkit-scrollbar {
  width: 1.6rem;
}

::-webkit-scrollbar-corner,
::-webkit-scrollbar-track {
  background: var(--color-neutral-700);
}

::-webkit-scrollbar-thumb {
  background: var(--color-neutral-500);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-neutral-400);
}

::-webkit-scrollbar-thumb:active {
  background: var(--color-neutral-300);
}



::-webkit-scrollbar-button {
  display: block;
  background-color: var(--color-neutral-700);
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
}

::-webkit-scrollbar-button:vertical:end:increment {
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/e/ee/Chevron-down.svg'); 
}

::-webkit-scrollbar-button:vertical:end:decrement {
  display: none; 
}

 ::-webkit-scrollbar-button:vertical:start:increment {
  display: none; 
}

::-webkit-scrollbar-button:vertical:start:decrement {
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/7/7e/Chevron-up.svg');
}
 */