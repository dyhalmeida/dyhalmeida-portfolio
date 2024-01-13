export const containerVariants = {
  visible: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 1,
    },
  },
}

export const containerVariantsNav = {
  visible: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
}

export const itemsVariantsX = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
}

export const itemVariantsTitles = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export const itemsVariantsY = {
  initial: { y: 100, opacity: 0 },
  animate: (index: number) => ({
    y: 0,
    opacity: 1,

    transition: {
      delay: 1 * index,
      duration: 1,
    },
  }),
}
