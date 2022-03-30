import React from "react";
import Particles from "react-tsparticles";

export default function ParticleAnimation ()
{
  return (
    <>
      <Particles
        options={ {
          retina_detect: true,
          fps_limit: 60,
          preset: "seaanemone",
          backgroundMode: {
            enable: true
          },
          outModes: {
            bottom: "destroy",
            default: "destroy",
            top: "bounce"
          },
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          particles: {
            bounce: {
              vertical: {
                value: 0.88,
                random: {
                  enable: true,
                  minimumValue: 0.4
                }
              }
            },
            color: {
              value: "rgb(52, 211, 153)"
            },
            links: {
              enable: true
            },
            number: {
              value: 27,
              limit: 270,
              density: {
                enable: true,
                value_area: 540,
              },
            },
            orbit: {
              enable: true,
              rotation: {
                value: 360,
              },
            },
            tilt: {
              enable: true,
              value: 90,
            },
            collisions: {
              enable: true,
              mode: "absorb",
            },
            roll: {
              enable: true,
              speed: 0.27,
            },

            shape: {
              type: [ "triangle", "edge", "polygon" ],
              stroke: {
                width: 27,
                color: "#0072b1",
              },
              polygon: {
                nb_sides: 12,
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
              value: 27,
              random: true,
              anim: {
                enable: true,
                speed: 0.27,
                size_min: 0.27,
                sync: true,
              },
            },
            line_linked: {
              enable: true,
              distance: 540,

              color: "rgb(167, 243, 208)",
              opacity: 1.5,
              width: 3,
            },
            move: {
              gravity: {
                enable: true,
                acceleration: 0.27,
                maxSpeed: 1,

              },
              enable: true,
              speed: 0.27,
              direction: "bottom",
              random: true,
              straight: true,
              out_mode: "bounceVertical",
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
                  force: 270,
                  smooth: 420,
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
                  opacity: 0.88,
                },
              },
              bubble: {
                distance: 27,
                size: 18,
                duration: 18,
                opacity: 0.88,
              },
              repulse: {
                distance: 27,
              },
              push: {
                particles_nb: 18,
              },
              remove: {
                particles_nb: 27,
              },
            },
          },
          backgroundMask: {
            enable: true,
            cover: {
              opacity: 0.88,
              color: {
                value: {
                  r: 27,
                  g: 17,
                  b: 27,
                },
              },
            },
          },
          background: {
            image:
              "url('https://res.cloudinary.com/dpytkhyme/image/upload/v1645573359/deep_space_bg_multi_right_a1opj9.png')",
          },
        } }
      />
    </>
  );
}


