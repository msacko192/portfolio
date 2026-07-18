export const ease = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show:   { opacity: 1, y: 0  },
}

export const fadeDown = {
  hidden: { opacity: 0, y: -8 },
  show:   { opacity: 1, y: 0  },
}

export const t = (delay = 0) => ({ duration: 0.45, ease, delay })
