import React from "react";
import Particles from "react-tsparticles";

export default function ParticleAnimation ()
{
  return (
    <>
      <Particles
        options={ {
          preset: "seaanemone",
          backgroundMode: {
            enable: true
          },
          outModes: {
            bottom: "destroy",
            default: "destroy",
            top: "none"
          },
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
              speed: 1,
            },
            color: {
              value: [ "#4285f4", "#34A853", "#FBBC05", "#EA4335", "rgb(52, 211, 153)" ]
            },
            shape: {
              type: [ "triangle", "polygon" ],
              stroke: {
                width: 14,
                color: "rgb(126, 34, 206)",
              },
              polygon: {
                nb_sides: 6,
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
              gravity: {
                enable: true,
                acceleration: 3,
                maxSpeed: 5
              },
              enable: true,
              speed: 0.44,
              direction: "bottom",
              random: true,
              straight: true,
              out_mode: "bounce",
              bounce: true,
              attract: {
                enable: true,
                rotateX: 1080,
                rotateY: 1080,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "sync",
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
                distance: 18,
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
                particles_nb: 9,
              },
              remove: {
                particles_nb: 9,
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
          emitters: {
            direction: "none",
            rate: {
              delay: 0.1,
              quantity: 10
            },
            position: {
              x: 50,
              y: 20
            },
            size: {
              width: 0,
              height: 0
            },
            spawnColor: {
              value: "rgb(52, 211, 153)",
              animation: {
                enable: true,
                speed: 1,
                sync: false
              }
            },
            particles: {
              bounce: {
                vertical: {
                  value: 0.8,
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
                enable: false
              },
              opacity: {
                value: 0.5
              },
              move: {
                speed: 3,
                random: false
              }
            }
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





//         options={ {
//         detectRetina: false,
//         fpsLimit: 60,
//         interactivity: {
//           detectsOn: "canvas",
//           events: {
//             onClick: {
//               enable: false,
//               mode: "push"
//             },
//             onDiv: {
//               elementId: "repulse-div",
//               enable: false,
//               mode: "repulse"
//             },
//             onHover: {
//               enable: true,
//               mode: "bubble",
//               parallax: {
//                 enable: false,
//                 force: 2,
//                 smooth: 10
//               }
//             },
//             resize: true
//           },
//           modes: {
//             bubble: {
//               distance: 40,
//               duration: 2,
//               opacity: 8,
//               size: 6,
//               // speed: 3
//             },
//             connect: {
//               distance: 80,
//               lineLinked: {
//                 opacity: 0.5
//               },
//               radius: 60
//             },
//             grab: {
//               distance: 400,
//               lineLinked: {
//                 opacity: 1
//               }
//             },
//             push: {
//               quantity: 4
//             },
//             remove: {
//               quantity: 2
//             },
//             repulse: {
//               distance: 200,
//               duration: 0.4
//             },
//             slow: {
//               active: false,
//               radius: 0,
//               factor: 1
//             }
//           }
//         },
//         particles: {
//           color: {
//             value: [ "#4285f4", "#34A853", "#FBBC05", "#EA4335" ]
//           },
//           lineLinked: {
//             blink: false,
//             color: "random",
//             consent: false,
//             distance: 40,
//             enable: true,
//             opacity: 0.8,
//             width: 1
//           },
//           move: {
//             attract: {
//               enable: false,
//               rotate: {
//                 x: 600,
//                 y: 1200
//               }
//             },
//             bounce: false,
//             direction: "none",
//             enable: true,
//             outMode: "bounce",
//             random: false,
//             speed: 1,
//             straight: false
//           },
//           number: {
//             density: {
//               enable: false,
//               area: 2000
//             },
//             limit: 0,
//             value: 200
//           },
//           opacity: {
//             animation: {
//               enable: true,
//               minimumValue: 0.3,
//               speed: 2,
//               sync: false
//             },
//             random: false,
//             value: 0.8
//           },
//           shape: {
//             character: {
//               fill: false,
//               font: "Verdana",
//               style: "",
//               value: "*",
//               weight: "400"
//             },
//             image: {
//               height: 100,
//               replaceColor: true,
//               src: "https://res.cloudinary.com/dpytkhyme/image/upload/v1645573359/deep_space_bg_multi_right_a1opj9.png",
//               width: 100
//             },
//             polygon: {
//               sides: 5
//             },
//             stroke: {
//               color: "#000000",
//               width: 0
//             },
//             type: "circle"
//           },
//           size: {
//             animation: {
//               enable: false,
//               minimumValue: 0.1,
//               speed: 40,
//               sync: false
//             },
//             random: true,
//             value: 1
//           }
//         },
//         polygon: {
//           draw: {
//             enable: false,
//             lineColor: "rgba(255,255,255,0.2)",
//             lineWidth: 0.5
//           },
//           enable: true,
//           move: {
//             radius: 5
//           },
//           position: {
//             x: 50,
//             y: 40
//           },
//           inlineArrangement: "equidistant",
//           scale: 0.8,
//           // type: "inline",
//
//         background: {
//           color: "#000000",
//           image: "",
//           position: "50% 50%",
//           repeat: "no-repeat",
//           size: "cover"
//         }
//         } }
// />
//     </>
//   );
// }

