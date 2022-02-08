import React from 'react';
import Particles from 'react-tsparticles';

export default function ParticleAnimation() {
  return (
    <>
      <Particles
        options={{
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          particles: {
            number: {
              value: 120,
              limit: 4800,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: 'rgb(52, 211, 153)',
            },
            shape: {
              type: 'centagon',
              stroke: {
                width: 1.5,
                color: 'rgb(126, 34, 206)',
              },
              polygon: {
                nb_sides: 200,
              },
              image: {
                src: 'public/images/JV-BLK-RD-Logo.png',
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.6,
              random: true,
              anim: {
                enable: true,
                speed: 1.2,
                opacity_min: 0.5,
                sync: false,
              },
            },
            size: {
              value: 60,
              random: true,
              anim: {
                enable: true,
                speed: 5,
                size_min: 20,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 160,

              color: 'rgb(167, 243, 208)',
              opacity: 1,
              width: 1.2,
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 2160,
                rotateY: 2160,
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
                  force: 200,
                  smooth: 400,
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
                distance: 120,
                lineLinked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 24,
                size: 20,
                duration: 0.2,
                opacity: 1,
              },
              repulse: {
                distance: 3,
              },
              push: {
                particles_nb: 3,
              },
              remove: {
                particles_nb: 3,
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
                  g: 17,
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
