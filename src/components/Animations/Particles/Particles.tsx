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
              value: 88.88,
              limit: 888.88,
              density: {
                enable: true,
                value_area: 888.8888888888889,

              },
            },
            orbit: {
              enable: true,
              rotation: {
                value: 88.88,

              },
            },
            tilt: {
              enable: true,
              value: 176.88,

            },
            collisions: {
              enable: true,
              mode: "absorb",

            },
            roll: {
              enable: true,
              speed: 4.44,
            },
            color: {
              value: "rgb(52, 211, 153)",
            },
            shape: {
              type: "star",
              stroke: {
                width: 28.44,
                color: "rgb(126, 34, 206)",
              },
              polygon: {
                nb_sides: 32,
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
              value: 28,
              random: true,
              anim: {
                enable: true,
                speed: 2.8,
                size_min: 0.44,
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
                  force: 250,
                  smooth: 550,
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
