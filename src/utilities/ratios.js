const metallicMeans = x => (Math.sqrt(x ** 2 + 4) - x) / 2
const goldenRatio = metallicMeans(1)
const ratioCalc = x => Math.abs(x - goldenRatio) / 2

export default metallicMeans
export { goldenRatio, ratioCalc }
