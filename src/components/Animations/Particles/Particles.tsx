import React from "react";
import Particles from "react-tsparticles";

export default function ParticleAnimation ()
{
  return (
    <>
      <Particles
        options={ {
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          particles: {
            number: {
              value: 44.44,
              limit: 444.88,
              density: {
                enable: true,
                value_area: 484.884,

              },
            },
            orbit: {
              enable: true,
              rotation: {
                value: 44.8888,

              },
            },
            tilt: {
              enable: true,
              value: 144.88888,

            },
            collisions: {
              enable: true,
              mode: "absorb",

            },
            roll: {
              enable: true,
              speed: 1.888,
            },
            color: {
              value: "rgb(52, 211, 153)",
            },
            shape: {
              type: "star",
              stroke: {
                width: 28.88,
                color: "rgb(126, 34, 206)",
              },
              polygon: {
                nb_sides: 12.44,
              },


            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.88,
                sync: true,
              },
            },
            size: {
              value: 36.88,
              random: true,
              anim: {
                enable: true,
                speed: 3.2,
                size_min: 0.444,
                sync: true,
              },
            },
            line_linked: {
              enable: true,
              distance: 27,

              color: "rgb(167, 243, 208)",
              opacity: 1,
              width: 2.7,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "bottom",
              random: true,
              straight: true,
              out_mode: "split",
              bounce: true,
              attract: {
                enable: true,
                rotateX: 1080,
                rotateY: 1080,
              },
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onHover: {
                enable: true,
                mode: "connect",
                parallax: {
                  enable: true,
                  force: 280.88,
                  smooth: 488.88,
                },
              },
              onClick: {
                enable: true,
                mode: "push",

              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 27,
                lineLinked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 27,
                size: 27,
                duration: 18,
                opacity: 1,
              },
              repulse: {
                distance: 27,
              },
              push: {
                particles_nb: 27,
              },
              remove: {
                particles_nb: 27,
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
                  g: 27,
                  b: 27,
                },
              },
            },
          },
          retina_detect: true,
          fps_limit: 60,
          background: {
            image:
              "url('https://res.cloudinary.com/dpytkhyme/image/upload/v1645573359/deep_space_bg_multi_right_a1opj9.png')",
          },
        } }
      />
    </>
  );
}
