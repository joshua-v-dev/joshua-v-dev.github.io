import type { RefObject } from "react";

import type { CSSProperties } from "react";

export interface IParticlesProps {
  id?: string;
  width?: string;
  height?: string;
  url?: string;
  style?: CSSProperties;
  className?: string;
  canvasClassName?: string;
  container?: RefObject<any>
  init?: () => void;
  loaded?: () => void;
}
