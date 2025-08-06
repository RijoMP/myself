import React from 'react'
type DivZProps = {
  index: number
  selectedIndex?: number
  key?: string
}
const Education: React.FC<DivZProps> = ({ index, selectedIndex, key }) => (
  <section className="w-full flex flex-col items-center justify-center" key={key}>
    <h2 className="text-3xl font-bold mb-4 text-blue-400">Education</h2>
    <ul className="text-gray-200">
      <li>B.Tech in Computer Science, XYZ University, 2016-2020</li>
      {/* Add more education details here */}
    </ul>
  </section>
)

export default Education
