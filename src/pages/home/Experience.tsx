import React from 'react'
type DivZProps = {
  index: number
  selectedIndex?: number
  key?: string
}
const Experience: React.FC<DivZProps> = ({ index, selectedIndex, key }) => (
  <section className="w-full flex flex-col items-center justify-center" key={key}>
    <h2 className="text-3xl font-bold mb-4 text-yellow-400">Experience</h2>
    {/* Add your experience details here or import from a data file */}
    <div className="text-gray-200">See my 3D experience panel for details!</div>
  </section>
)

export default Experience
