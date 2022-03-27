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
              value: 25,
              limit: 250,
              density: {
                enable: true,
                value_area: 350,

              },
            },
            orbit: {
              enable: true,
              rotation: {
                value: 18,

              },
            },
            tilt: {
              enable: true,
              value: 27,

            },
            collisions: {
              enable: true,
              mode: "absorb",

            },
            roll: {
              enable: true,
              speed: 2.7,
            },
            color: {
              value: "rgb(52, 211, 153)",
            },
            shape: {
              type: "star",
              stroke: {
                width: 27,
                color: "rgb(126, 34, 206)",
              },
              polygon: {
                nb_sides: 9,
              },


            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 0.75,
                opacity_min: 0.5,
                sync: true,
              },
            },
            size: {
              value: 27,
              random: true,
              anim: {
                enable: true,
                speed: 2.5,
                size_min: 9,
                sync: true,
              },
            },
            line_linked: {
              enable: true,
              distance: 27,

              color: "rgb(167, 243, 208)",
              opacity: 1,
              width: 2.5,
            },
            move: {
              enable: true,
              speed: 0.75,
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
                  force: 200,
                  smooth: 400,
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
                distance: 18,
                lineLinked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 9,
                size: 9,
                duration: 18,
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
              "url('https://res.cloudinary.com/dpytkhyme/image/upload/v1645573359/deep_space_bg_multi_right_a1opj9.png')",
          },
        } }
      />
    </>
  );
}
