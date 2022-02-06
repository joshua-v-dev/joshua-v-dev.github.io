import React from 'react';
import Particles from 'react-tsparticles';
import BackgroundAnimation from '../BackgroundAnimation';

export default function ParticleAnimation() {
  return (
    <>
      <BackgroundAnimation />
      <Particles
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          particles: {
            number: {
              value: 250,
              limit: 500,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            color: {
              value: '#ffffff',
            },
            shape: {
              type: 'dodecahedron',
              stroke: {
                width: 1.4,
                color: '#000000',
              },
              polygon: {
                nb_sides: 20,
              },
              image: {
                src: 'public/images/JV-BLK-RD-Logo.png',
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.7,
              random: true,
              anim: {
                enable: true,
                speed: 1.45,
                opacity_min: 0.5,
                sync: false,
              },
            },
            size: {
              value: 125,
              random: true,
              anim: {
                enable: true,
                speed: 5,
                size_min: 75,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 125,
              color: '#ffffff',
              opacity: 1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.75,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 575,
                rotateY: 575,
              },
            },
          },
          interactivity: {
            detect_on: 'window',
            events: {
              onHover: {
                enable: true,
                mode: 'connect',
                parallax: {
                  enable: true,
                  force: 10,
                  smooth: 1000,
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
                  opacity: 1,
                },
              },
              bubble: {
                distance: 20,
                size: 20,
                duration: 0.1,
                opacity: 1,
              },
              repulse: {
                distance: 15,
              },
              push: {
                particles_nb: 15,
              },
              remove: {
                particles_nb: 15,
              },
            },
          },
          backgroundMask: {
            enable: true,
            cover: {
              opacity: 1,
              color: {
                value: {
                  r: 27,
                  g: 18,
                  b: 27,
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
    </>
  );
}
