import React, { useState, useEffect } from 'react'
import "./nav.scss"

const DateTime = () => {
  const [dateTime, setDateTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const weekday = dateTime.toLocaleDateString('en-US', { weekday: 'short' })
  const month = dateTime.toLocaleDateString('en-US', { month: 'short' })
  const day = dateTime.toLocaleDateString('en-US', { day: 'numeric' })
  const formattedDate = `${weekday} ${month} ${day}`

  const formattedTime = dateTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  })

  return (
    <div className='nav-elem'>
      <p>{formattedDate} {formattedTime}</p>
    </div>
  )
}

export default DateTime
