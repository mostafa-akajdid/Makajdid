const SAMPLE_SIZE = 10

function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map((c) => c.toString(16).padStart(2, '0')).join('')
}

function lighten(hex, amount) {
  const r = Math.min(255, parseInt(hex.slice(1, 3), 16) + amount)
  const g = Math.min(255, parseInt(hex.slice(3, 5), 16) + amount)
  const b = Math.min(255, parseInt(hex.slice(5, 7), 16) + amount)
  return rgbToHex(r, g, b)
}

function darken(hex, amount) {
  const r = Math.max(0, parseInt(hex.slice(1, 3), 16) - amount)
  const g = Math.max(0, parseInt(hex.slice(3, 5), 16) - amount)
  const b = Math.max(0, parseInt(hex.slice(5, 7), 16) - amount)
  return rgbToHex(r, g, b)
}

function buildGradient(color) {
  return `radial-gradient(circle at 30% 20%, ${lighten(color, 40)}, ${color}, ${darken(color, 30)})`
}

export function extractColorFromImage(src) {
  return new Promise((resolve) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        const w = SAMPLE_SIZE
        const h = SAMPLE_SIZE
        canvas.width = w
        canvas.height = h
        ctx.drawImage(img, 0, 0, w, h)
        const data = ctx.getImageData(0, 0, w, h).data

        let r = 0, g = 0, b = 0, count = 0

        for (let i = 0; i < data.length; i += 4) {
          const cr = data[i]
          const cg = data[i + 1]
          const cb = data[i + 2]
          if (cr > 240 && cg > 240 && cb > 240) continue
          if (cr < 15 && cg < 15 && cb < 15) continue
          r += cr
          g += cg
          b += cb
          count++
        }

        if (count === 0) {
          resolve(buildGradient('#b0b0b0'))
          return
        }

        const hex = rgbToHex(
          Math.round(r / count),
          Math.round(g / count),
          Math.round(b / count)
        )
        resolve(buildGradient(hex))
      } catch {
        resolve(buildGradient('#b0b0b0'))
      }
    }
    img.onerror = () => resolve(buildGradient('#b0b0b0'))
    img.src = src
  })
}
