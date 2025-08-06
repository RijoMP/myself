import React from 'react'
type DivZProps = {
  index: number
  selectedIndex?: number
  key?: string
}
const Contact: React.FC<DivZProps> = ({ index, selectedIndex, key }) => (
  <section className="w-full flex flex-col items-center justify-center" key={key}>
    <h2 className="text-3xl font-bold mb-4 text-green-400">Contact</h2>
    <div className="text-gray-200">
      Email:{' '}
      <a href="mailto:rijomp@gmail.com" className="underline text-blue-300">
        rijomp@gmail.com
      </a>
    </div>
    {/* Add more contact methods here */}
  </section>
)

export default Contact
