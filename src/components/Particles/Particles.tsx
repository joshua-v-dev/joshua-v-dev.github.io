import React from 'react';
import Particles from 'react-tsparticles';

export default function ParticleAnimation() {
  return (
    <Particles
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 50,
            limit: 100,
            density: {
              enable: true,
              value_area: 700,
            },
          },
          color: {
            value: '#ffffff',
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000',
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: 'public/images/JV-BLK-RD-Logo.png',
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.5,
              sync: false,
            },
          },
          size: {
            value: 30,
            random: true,
            anim: {
              enable: true,
              speed: 3,
              size_min: 10,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: '#ffffff',
            opacity: 1,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.57,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: 'window',
          events: {
            onHover: {
              enable: true,
              mode: 'bubble',
              parallax: {
                enable: false,
                force: 20,
                smooth: 40,
              },
            },
            onClick: {
              enable: true,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 200,
              lineLinked: {
                opacity: 0.8,
              },
            },
            bubble: {
              distance: 300,
              size: 40,
              duration: 2,
              opacity: 0.4,
            },
            repulse: {
              distance: 190,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        backgroundMask: {
          enable: true,
          cover: {
            opacity: 2.75,
            color: {
              value: {
                r: 0,
                g: 0,
                b: 0,
              },
            },
          },
        },
        retina_detect: true,
        fps_limit: 60,
        background: {
          image:
            "url('https://res.cloudinary.com/dpytkhyme/image/upload/v1639943200/rainbow-4-pillar-wallpaper_qmxakk.png')",
        },
      }}
    />
  );
}
