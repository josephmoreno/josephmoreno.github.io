// import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

import Overview from './components/Overview';
import Projects from './components/Projects';
import Timeline from './components/Timeline';

const App = () => {
  const [ init, setInit ] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
  }, []);

  const options: any = {
    background: {
        color: {
            value: "#666666",
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            // resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 50,
                duration: 0.4,
            },
        },
    },
    particles: {
      color: {
          value: "#ffffff",
      },
      links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
      },
      move: {
          direction: "none",
          enable: true,
          outModes: {
              default: "bounce",
          },
          random: false,
          speed: 5,
          straight: false,
      },
      number: {
          density: {
              enable: true,
              // area: 800,
          },
          value: 80,
      },
      opacity: {
          value: 0.5,
      },
      shape: {
          type: "square",
      },
      size: {
          value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  return (
    <div className="App">
      {init && 
        <Particles
            id="tsparticles"
            options={options}
        />
      }

      <BrowserRouter>
        <Routes>
          <Route index element={<Overview />} />
          <Route path="projects" element={<Projects />} />
          <Route path="timeline" element={<Timeline />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;