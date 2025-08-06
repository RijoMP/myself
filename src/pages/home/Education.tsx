import React from 'react'
import Companies from '../../components/Companies'
type DivZProps = {
  index: number
  selectedIndex?: number
  key?: string
}
const Education: React.FC<DivZProps> = ({ index, selectedIndex, key }) => (
  <section className="w-full flex flex-col items-center justify-center overflow-x-clip" key={key}>
    <h2 className="text-3xl font-bold mb-4 text-blue-400">Education</h2>
    {/* <Companies /> */}
  </section>
)

export default Education
