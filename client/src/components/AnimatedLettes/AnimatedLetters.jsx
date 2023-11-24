import './AnimatedLetters.scss'

// Gets the letterClass (text-animate animation) and strarray of letters and idx to set the delay of the animation and we will animate all the letters

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  // We know that map need keys to map through the array

  // Setting key = char + i       (so they will be unique)
  // Setting ClassName = letterClass _(i+idx) so it will be increased by idx everytime

  // And finally in span tag we are returning inline character of strArray
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
