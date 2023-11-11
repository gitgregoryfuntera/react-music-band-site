import { Variants } from "framer-motion";

type VariantKeys = "offscreen" | "onscreen";

interface VariantTransitions {
  transition: {
    [key: string]: string | number;
  };
}

type CommonVariants = {
  variantKeys: Record<VariantKeys, VariantKeys>;
  variants: Variants;
};

interface CommonVariantsProps extends Record<VariantKeys, VariantTransitions> {}

export const slideUpVariant = (props?: CommonVariantsProps): CommonVariants => {
  return {
    variants: {
      onscreen: {
        opacity: 1,
        y: 0,
        transition: {
          ease: props?.onscreen?.transition?.ease ?? "easeIn",
          duration: props?.onscreen?.transition?.duration ?? 0.3,
        },
      },
      offscreen: {
        opacity: 0,
        y: 100,
      },
    },
    variantKeys: {
      offscreen: "offscreen",
      onscreen: "onscreen",
    },
  };
};

export const slideLeftVariant = (
  props?: CommonVariantsProps
): CommonVariants => {
  return {
    variants: {
      onscreen: {
        x: 0,
        opacity: 1,
        transition: {
          ease: props?.onscreen?.transition?.ease ?? "linear",
          duration: props?.onscreen?.transition?.duration ?? 0.3,
        },
      },
      offscreen: {
        opacity: 0,
        x: -100,
      },
    },
    variantKeys: {
      offscreen: "offscreen",
      onscreen: "onscreen",
    },
  };
};

export const slideRightVariant = (
  props?: CommonVariantsProps
): CommonVariants => {
  return {
    variants: {
      onscreen: {
        x: 0,
        opacity: 1,
        transition: {
          ease: props?.onscreen?.transition?.ease ?? "linear",
          duration: props?.onscreen?.transition?.duration ?? 0.3,
        },
      },
      offscreen: {
        opacity: 0,
        x: 100,
      },
    },
    variantKeys: {
      offscreen: "offscreen",
      onscreen: "onscreen",
    },
  };
};

export const scaleToOneVariant = (
  props?: CommonVariantsProps
): CommonVariants => {
  return {
    variants: {
      onscreen: {
        opacity: 1,
        scale: 1,
        transition: {
          ease: props?.onscreen?.transition?.ease ?? "linear",
          duration: props?.onscreen?.transition?.duration ?? 0.3,
        },
      },
      offscreen: {
        opacity: 0,
        scale: 0,
      },
    },
    variantKeys: {
      offscreen: "offscreen",
      onscreen: "onscreen",
    },
  };
};
