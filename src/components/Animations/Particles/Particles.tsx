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
              value: 14,
              limit: 114,
              density: {
                enable: true,
                value_area: 144,

              },
            },
            orbit: {
              enable: true,
              rotation: {
                value: 44,

              },
            },
            tilt: {
              enable: true,
              value: 114,

            },
            collisions: {
              enable: true,
              mode: "absorb",

            },
            roll: {
              enable: true,
              speed: 4,
            },
            color: {
              value: "rgb(52, 211, 153)",
            },
            shape: {
              type: "star",
              stroke: {
                width: 44,
                color: "rgb(126, 34, 206)",
              },
              polygon: {
                nb_sides: 14,
              },


            },
            opacity: {
              value: 0.88,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.28,
                sync: true,
              },
            },
            size: {
              value: 44.88,
              random: true,
              anim: {
                enable: true,
                speed: 0.14,
                size_min: 0.44,
                sync: true,
              },
            },
            line_linked: {
              enable: true,
              distance: 14,

              color: "rgb(167, 243, 208)",
              opacity: 0.88,
              width: 4,
            },
            move: {
              enable: true,
              speed: 0.44,
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
                  force: 240,
                  smooth: 480,
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
                distance: 14,
                lineLinked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 9,
                size: 9,
                duration: 9,
                opacity: 0.88,
              },
              repulse: {
                distance: 18,
              },
              push: {
                particles_nb: 18,
              },
              remove: {
                particles_nb: 18,
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
