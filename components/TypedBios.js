import React from 'react'
import Typed from 'typed.js'
import Twemoji from './Twemoji'

const TypedBios = () => {
  const el = React.useRef(null)
  const typed = React.useRef(null)

  React.useEffect(() => {
    const options = {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
      // shuffle: true,
    }
    typed.current = new Typed(el.current, options)
    return () => typed.current.destroy()
  }, [])

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          I'm aliased as <b className="font-medium">Luke</b> at work.
        </li>
        <li>I'm a builder, learner and freedom seeker.</li>
        <li>
          I live in <b className="font-medium">Long An, Viet Nam</b>.
        </li>
        <li>
          I was born in the <b className="font-medium">Long An</b> province.
        </li>
        <li>
          My first programming language I learned was <b className="font-medium">C/C++</b>.
        </li>
        <li>I love web development.</li>
        <li>I work mostly with React/Node and pure JS.</li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}

export default TypedBios
