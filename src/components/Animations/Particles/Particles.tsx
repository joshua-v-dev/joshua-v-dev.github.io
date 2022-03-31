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
          backgroundMode: {
            enable: true
          },
          outModes: {
            bottom: "bounce",
            default: "destroy",
            top: "destroy"
          },
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          particles: {
            bounce: {
              vertical: {
                value: 0.69,
                random: {
                  enable: true,
                  minimumValue: 0.39
                }
              }
            },

            color: {
              value: [ "rgb(167, 243, 208)", "#5a67d8", "rgb(79 70 229)" ],
              animation: {
                enable: true,
                speed: 0.39,
                sync: true
              }
            },
            number: {
              value: 120,
              limit: 400,
              density: {
                enable: true,
                value_area: 600,
              },
            },
            orbit: {
              enable: true,
              rotation: {
                value: 720,
              },
            },
            tilt: {
              enable: true,
              value: 69,
            },
            collisions: {
              enable: true,
              mode: "absorb",
            },
            roll: {
              enable: true,
              speed: 0.39,
            },

            shape: {
              type: [ "triangle", "circle" ],
              stroke: {
                width: 69,

              },
              polygon: {
                nb_sides: 69,
              },

            },
            size: {
              value: { min: 39, max: 99 },
              random: true,
              animation: {
                enable: true,
                speed: 0.39,
                size_min: 0.39,
                sync: true,
                minimumValue: 0.69,
                startValue: "min",

              }
            },
            opacity: {
              value: 0.69,
              random: true,
              anim: {
                enable: true,
                speed: 0.39,
                opacity_min: 0.39,
                sync: true,
              },
            },
            // line_linked: {
            //   enable: true,
            //   distance: 69,
            //   opacity: 1,
            //   width: 6,
            // },
            move: {
              gravity: {
                enable: true,
                acceleration: 0.69,
                maxSpeed: 3.99,

              },
              enable: true,
              speed: { min: 0.39, max: 0.99 },
              direction: "bottom",
              random: false,
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
                  force: 360,
                  smooth: 720,
                },
              },
              onClick: {
                enable: true,
                mode: "trail",

              },

              resize: true,
            },
            modes: {
              trail: {
                delay: 0.1,
                quantity: 1
              },

              grab: {
                distance: 39,
                lineLinked: {
                  opacity: 0.99,
                },
              },
              bubble: {
                distance: 39,
                size: 39,
                duration: 99,
                opacity: 0.99,
              },
              repulse: {
                distance: 39,
              },
              push: {
                particles_nb: 39,
              },
              remove: {
                particles_nb: 39,
              },
            },
          },
          backgroundMask: {
            enable: true,
            cover: {
              opacity: 0.69,
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


