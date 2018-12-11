import React from 'react'
import './RandomiseButton.css'

const RandomiseButton = ({ text, method, classes }) => <button className={classes} onClick={method}>{text}</button>

export default RandomiseButton