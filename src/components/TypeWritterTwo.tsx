import GraphemeSplitter from 'grapheme-splitter' // npm i grapheme-splitter
import { TypeAnimation } from 'react-type-animation'
const splitter = new GraphemeSplitter()
type Sequence = Array<SequenceElement>
type SequenceElement = string | number | ((element: HTMLElement | null) => void | Promise<void>)

const TypeWritterTwo = ({ sequence = [], repeat = Infinity, className = '' }: { sequence: Sequence; repeat?: number; className: string }) => {
  return (
    <TypeAnimation splitter={(str) => splitter.splitGraphemes(str)} sequence={sequence} style={{ fontSize: '2em' }} repeat={repeat} className={className} />
  )
}

export default TypeWritterTwo
