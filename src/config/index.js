import Color from 'color'
import ignored from './ignored'

export const theme = {
  ignored,
  colors: {
    dark: Color('black').rgb().toString(),
    light: Color('white').rgb().toString(),
    red: Color('red').rgb().toString(),
    orange: Color('orange').rgb().toString(),
    yellow: Color('yellow').rgb().toString(),
    green: Color('green').rgb().toString(),
    blue: Color('blue').rgb().toString(),
    indigo: Color('indigo').rgb().toString(),
    violet: Color('violet').rgb().toString()
  }
}
